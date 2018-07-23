import Ember from 'ember';

const NodeField = Ember.Component.extend({
  tagName: '',

  didReceiveAttrs(...args) {
    this._super(...args);

    const propertyPath = `object.${this.get('propertyName')}`;
    if (this.get(propertyPath) === undefined) {
      this.set(propertyPath, Ember.Object.create({ state: 'unknown' }));
    }
  },

  actions: {
    update(value) {
      const propertyPath = `object.${this.get('propertyName')}`;
      this.get('update')(this.get(propertyPath));
    },
    authorize() {
      const propertyPath = `object.${this.get('propertyName')}`;
      this.set(`${propertyPath}.state`, 'in-progress');
      // @todo: assert if authorize returns promise
      this.get('authorize')(this.get(propertyPath))
        .then(() => { this.set(`${propertyPath}.state`, 'auth-success'); })
        .catch(() => { this.set(`${propertyPath}.state`, 'auth-fail'); })
      ;
    },
  },
});

NodeField.reopenClass({
  positionalParams: ['propertyName'],
});

export default NodeField;
