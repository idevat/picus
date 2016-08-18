import Ember from 'ember';

export default Ember.Component.extend({
  title: undefined,
  status: undefined,
  componentId: undefined,
  isCollapsable: false,
  isCollapsed: true,
  isChecked: false,
  onClickAction: undefined,
  onCheckAction: undefined,

  watchChecked: function() {
    this.attrs.onCheckAction(this.get('componentId'), this.get('isChecked'));
  }.observes('isChecked'),

  actions: {
    onSelectItem() {
      this.attrs.onClickAction(this.get('componentId'));
      this.toggleProperty('isCollapsed');
    },
    onSelectCollapse() {
      this.toggleProperty('isCollapsed');
    }
  },
});
