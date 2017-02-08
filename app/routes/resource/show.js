import Ember from 'ember';

export default Ember.Route.extend({
  modelForm: {},
  resourceId: undefined,

  beforeModel() {
    return this.store.reloadData();
  },

  model(params) {
    const resource = this.store.peekRecord('resource', params.resource_id);
    this.set('resourceId', params.resource_id);

    if (resource === null) {
      return Ember.RSVP.hash({
        cluster: this.store.peekAll('cluster'),
        params: params,
      });
    }

    if (resource.get('properties')) {
      resource.get('properties').forEach((item) => {
        this.set('modelForm.' + item.get('name'), item.get('value'));
      });
    }

    return Ember.RSVP.hash({
      params: params,
      metadata: this.store.getAgentMetadata('resource', this.store.peekRecord('resource', params.resource_id).get('resourceType')),
      formData: this.get('modelForm'),
      cluster: this.store.peekAll('cluster'),
      selectedResource: this.store.filter('resource', (item) => { return item.id === params.resource_id; }),
    });
  },

  actions: {
    onSubmitAction: function(id, form) {
      this.store.pushUpdateAgentProperties('resource', {
        id,
        properties: form.get('changes'),
      });

      this.transitionTo('resource.listing');
    },
    onCheck: function() {},
    changeSelectedAgent: function() {},

    appendMetaAttribute: function(attributes, attr) {
      this.store.pushAppendMetaAttribute(this.get('resourceId'), attr);
    },
    deleteMetaAttribute: function(attribute) {
      attribute.deleteRecord();
      attribute.save();
    },
    deleteMultipleMetaAttributes: function(attributes) {
      attributes.forEach((item) => {
        item.deleteRecord();
        item.save();
      });
    },

    appendLocationPreference: function(attributes, attr) {
      this.store.pushAppendLocationPreference(this.get('resourceId'), attr);
    },
    deleteLocationPreference: function(attribute) {
      attribute.deleteRecord();
      attribute.save();
    },
    deleteMultipleLocationPreferences: function(attributes) {
      attributes.forEach((item) => {
        item.deleteRecord();
        item.save();
      });
    },

  }
});
