import Ember from 'ember';
import TabController from 'picus/controllers/tab-controller';

export default TabController.extend({
  activeTab: 'status',

  appController: Ember.inject.controller('application'),
});
