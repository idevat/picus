import Ember from 'ember';

const FenceField = Ember.Component.extend({
  tagName: '',

  actions: {
    selectNode(value) {
      this.get('object').set(
        `${this.get('propertyName')}.checked`,
        value,
      );
    },
  },
});

FenceField.reopenClass({
  positionalParams: ['propertyName'],
});

export default FenceField;
