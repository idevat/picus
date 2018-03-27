import Ember from 'ember';
import ResourceValidations from 'picus/validators/resource-validations';
import BaseRoute from 'picus/routes/base-route';

const { RSVP } = Ember;

export default BaseRoute.extend({
  modelForm: {},
  agentForm: {},
  mappingForm: {},
  agentMetadata: {},
  // @todo: Ember.computed.alias (?) agentForm.fenceAgent
  selectedAgent: '',
  mapping: {},

  beforeModel() {
    return new RSVP.Promise((resolve, reject) => {
      this.store.getAvailableAgents('fence').then(
        (response) => {
          this.set('availables', response);
          resolve(response);
        },
        (xhr) => {
          reject(xhr);
        },
      );
    });
  },

  async model(params) {
    if (!this.get('selectedAgent')) {
      const agent = this.get('availables.undefinedProvider')[0];
      this.set('modelForm.fenceAgent', agent);
      this.set('selectedAgent', agent);
    }

    return Ember.RSVP.hash({
      availableAgents: this.get('availables'),
      params,
      agentMetadata: this.get('agentMetadata'),
      modelForm: this.get('modelForm'),
      updatingCluster: this.store.peekAll('cluster'),
      selectedAgent: this.get('selectedAgent'),
      fences: this.store.peekAll('fence'),
      agentForm: this.get('agentForm'),
      mappingForm: this.get('mappingForm'),
      resourceValidation: ResourceValidations,
    });
  },

  actions: {
    selectFenceAgent(steps, form) {
      this.set('agentForm', form);
      this.set('selectedAgent', form.fenceAgent);

      this.store
        .getAgentMetadata('fence', `stonith:${this.get('selectedAgent')}`)
        .then((response) => {
          this.set('agentMetadata.response', response);

          return steps['transition-to']('fenceProperties');
        });

      return steps['transition-to']('loadingMetadata');
    },

    selectMapping(steps, form) {
      this.set('mappingForm', form);
      return steps['transition-to']('summary');
    },

    changeSelectedAgent(form, fieldName, selectedItem) {
      this.set('modelForm', form);
      this.set('selectedAgent', selectedItem);
      this.set('modelForm.fenceAgent', selectedItem);
      this.refresh();
    },

    onSubmitAction(steps, form) {
      form.get('changes').forEach((obj) => {
        if (typeof obj.value === 'object') {
          // EmptyObject is a result of value from select-field with (array)
          // which was not changed, so it should be ignored.
          obj.value = obj.value.name;
        }
      });

      form.save();

      // @todo: add support for timeout
      this.store.getFencePlugs().then((response) => {
        this.controller.set('fenceMappingInfo', Ember.A(Object.keys(response)));
        steps['transition-to']('mapping');
      });

      return steps['transition-to']('loadingList');
    },

    submitAgent() {
      delete this.get('mappingForm').mappingScheme;

      // copied&modified from fence/create.js (refactor-later)
      const cluster = this.store.peekAll('cluster').objectAt(0);

      const resource = this.get('store').createRecord('fence', {
        name: this.get('modelForm.resourceName'),
        agentType: this.get('modelForm.fenceAgent'),
      });

      Object.keys(this.get('modelForm')).forEach((obj) => {
        if (['resourceName', 'agentType'].includes(obj.key)) {
          return;
        }

        if (typeof this.get(`modelForm.${obj}`) === 'object') {
          // Only primitive values can be serialized.
          // EmptyObject is a result of value from select-field with (array)
          // which was not changed, so it should be ignored.
          return;
        }

        resource.get('properties').addObject(this.get('store').createRecord('fence-property', {
          resource,
          name: obj,
          value: this.get(`modelForm.${obj}`),
        }));
      });

      // save mapping info into pcmk_host_map
      let pcmkHostMap = '';
      Object.keys(this.get('mappingForm')).forEach((nodename) => {
        const plugValue = this.get(`mappingForm.${nodename}`);
        if (plugValue.trim() !== '') {
          pcmkHostMap += `${nodename}:${plugValue};`;
        }
      });

      resource.get('properties').addObject(this.get('store').createRecord('fence-property', {
        resource,
        name: 'pcmk_host_map',
        value: pcmkHostMap,
      }));

      cluster.get('fences').addObject(resource);
      this.transitionTo('cluster.fences.index');

      this.set('modelForm', {});
      this.set('mappingForm', {});
      this.set('agentForm', {});

      return this.get('notifications').notificationSaveRecord(resource, 'ADD_FENCE');
    },
  },
});