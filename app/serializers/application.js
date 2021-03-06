import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  _postTextSerializer(params) {
    if (Object.keys(params).length === 0) {
      return '';
    }
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  },

  serialize(snapshot, options) {
    const { record } = snapshot;

    if (options.action === 'delete') {
      if (
        [
          'location-preference',
          'colocation-preference',
          'ordering-preference',
          'ticket-preference',
          'constraint-set',
        ].includes(snapshot.modelName)
      ) {
        return `constraint_id=${record.get('preferenceID')}`;
      } else if (snapshot.modelName === 'resource-attribute') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          key: record.get('key'),
          value: '',
        });
      } else if (snapshot.modelName === 'resource-utilization-attribute') {
        return this._postTextSerializer({
          resource_id: record.get('resource.name'),
          name: record.get('name'),
          value: '',
        });
      } else if (snapshot.modelName === 'node-attribute') {
        return this._postTextSerializer({
          node: record.get('node.name'),
          key: record.get('key'),
          value: '',
        });
      } else if (snapshot.modelName === 'node-utilization-attribute') {
        return this._postTextSerializer({
          node: record.get('node.name'),
          name: record.get('name'),
          value: '',
        });
      } else if (snapshot.modelName === 'acl-role') {
        return this._postTextSerializer({
          'role-0': record.get('name'),
        });
      } else if (snapshot.modelName === 'acl-permission') {
        return this._postTextSerializer({
          item: 'permission',
          acl_perm_id: record.get('permissionID'),
        });
      } else if (snapshot.modelName === 'resource') {
        return this._postTextSerializer({
          [`resid_${record.get('name')}`]: 'true',
        });
      } else if (snapshot.modelName === 'fence') {
        return this._postTextSerializer({
          [`resid-${record.get('name')}`]: 'true',
        });
      }
      Ember.Logger.error(`[serializer] model ${snapshot.modelName} for DELETE can not be serialized`);
    } else if (options.action === 'create') {
      let force = false;
      if (snapshot && snapshot.adapterOptions && snapshot.adapterOptions.force) {
        ({ force } = snapshot.adapterOptions);
      }

      if (snapshot.modelName === 'location-preference') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          disable_autocorrect: 1,
          c_type: 'loc',
          score: record.get('score'),
          rule: record.get('node'),
          node_id: record.get('node'),
          force,
        });
      } else if (snapshot.modelName === 'colocation-preference') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          disable_autocorrect: 1,
          c_type: 'col',
          score: record.get('score'),
          target_res_id: record.get('targetResource'),
          colocation_type: record.get('colocationType'),
          force,
        });
      } else if (snapshot.modelName === 'ordering-preference') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          disable_autocorrect: 1,
          c_type: 'ord',
          res_action: record.get('action'),
          score: record.get('score'),
          order: record.get('order'),
          target_action: record.get('targetAction'),
          target_res_id: record.get('targetResource'),
          force,
        });
      } else if (snapshot.modelName === 'ticket-preference') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          disable_autocorrect: 1,
          c_type: 'ticket',
          ticket: record.get('ticket'),
          role: record.get('role'),
          'loss-policy': record.get('lossPolicy'),
          force,
        });
      } else if (snapshot.modelName === 'resource-attribute') {
        return this._postTextSerializer({
          res_id: record.get('resource.name'),
          key: record.get('key'),
          value: record.get('value'),
          force,
        });
      } else if (snapshot.modelName === 'resource-utilization-attribute') {
        return this._postTextSerializer({
          resource_id: record.get('resource.name'),
          name: record.get('name'),
          value: record.get('value'),
          force,
        });
      } else if (snapshot.modelName === 'node-attribute') {
        return this._postTextSerializer({
          node: record.get('node.name'),
          key: record.get('key'),
          value: record.get('value'),
          force,
        });
      } else if (snapshot.modelName === 'node-utilization-attribute') {
        return this._postTextSerializer({
          node: record.get('node.name'),
          name: record.get('name'),
          value: record.get('value'),
          force,
        });
      } else if (snapshot.modelName === 'acl-role') {
        return this._postTextSerializer({
          name: record.get('name'),
          description: record.get('description'),
        });
      } else if (snapshot.modelName === 'acl-permission') {
        return this._postTextSerializer({
          role_id: record.get('role.name'),
          item: 'permission',
          type: record.get('operation'),
          xpath_id: record.get('xpath'),
          query_id: record.get('query'),
        });
      } else if (snapshot.modelName === 'constraint-set') {
        const json = {
          disable_autocorrect: true,
          c_type: record.get('type'),
        };

        if (record.get('type') === 'ticket') {
          json['options[ticket]'] = record.get('ticket');
          json['options[loss-policy]'] = record.get('lossPolicy');
        }

        const encodedDynamic = [];
        record.get('resourceSets').forEach((s, i) => {
          const fieldName = `resources[${i}][]`;

          s.get('resources').forEach((resource) => {
            encodedDynamic.push(this._postTextSerializer({
              [fieldName]: resource.get('name'),
            }));
          });
        });

        return `${this._postTextSerializer(json)}&${encodedDynamic.join('&')}`;
      } else if (snapshot.modelName === 'resource') {
        const postData = {};

        postData.resource_type = `${record.get('agentProvider')}:${record.get('agentType')}`;
        postData._res_paramne_resourceName = record.get('name');

        if (record.get('clone')) {
          postData.resource_clone = 'on';
        }

        if (record.get('masterslave')) {
          postData.resource_ms = 'on';
        }

        record.get('properties').forEach((obj) => {
          postData[`_res_paramne_${obj.get('name')}`] = obj.get('value');
        });

        return this._postTextSerializer(postData);
      } else if (snapshot.modelName === 'fence') {
        const postData = {};

        postData.resource_type = `${record.get('agentType')}`;
        postData._res_paramne_name = record.get('name');

        record.get('properties').forEach((obj) => {
          postData[`_res_paramne_${obj.get('name')}`] = obj.get('value');
        });

        return this._postTextSerializer(postData);
      }
      Ember.Logger.error(`[serializer] model ${snapshot.modelName} for CREATE can not be serialized`);
    } else if (options.action === 'update') {
      if (snapshot.modelName === 'resource') {
        const postData = {};

        postData.resource_type = `${record.get('agentProvider')}:${record.get('agentType')}`;
        postData.resource_id = record.get('name');

        record.get('properties').forEach((obj) => {
          postData[`_res_paramne_${obj.get('name')}`] = obj.get('value');
        });

        return this._postTextSerializer(postData);
      } else if (snapshot.modelName === 'fence') {
        const postData = {};

        postData.resource_type = `${record.get('agentType')}`;
        postData.resource_id = record.get('name');

        record.get('properties').forEach((obj) => {
          postData[`_res_paramne_${obj.get('name')}`] = obj.get('value');
        });

        return this._postTextSerializer(postData);
      } else if (snapshot.modelName === 'cluster') {
        const postData = {};

        record.get('properties').forEach((attr) => {
          if (attr.id === null) {
            // @note: changed properties are always added as new
            postData[attr.get('name')] = attr.get('value');
          }
        });

        return this._postTextSerializer(postData);
      }

      Ember.Logger.error(`[serializer] model ${snapshot.modelName} for UPDATE can not be serialized`);
    }
    return undefined;
  },
});
