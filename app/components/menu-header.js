import Ember from 'ember';

export default Ember.Component.extend({
  title: undefined,
  isCollapsed: true,
  onlyErrors: false,
  onCheckAction: undefined,

  errorCount: function() {
    const list = this.get('errorList');

    if (list) {
      return list.get('length');
    } else {
      return null;
    }
  }.property('errorList.@each.status'),

  errorList: function() {
    const list = this.get('data');
    if (list) {
      return list.filter(function(item) {
        return ['error', 'failed'].includes(item.get('status'));
      });
    } else {
      return [];
    }
  }.property('data.@each.status'),

  actions: {
    onSelectCollapse() {
      if (this.get('onlyErrors')) {
        this.set('isCollapsed', false);
        this.set('onlyErrors', false);
      } else {
        this.toggleProperty('isCollapsed');
      }
    },
    showOnlyErrors() {
      this.set('isCollapsed', false);
      this.set('onlyErrors', true);
    }
  },
});
