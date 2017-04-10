import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('properties');

  this.route('nodes', function() {
    this.route('listing', { path: 'show/' });
    this.route('show', { path: 'show/:node_id' });
    this.route('create');
  });

  this.route('resources', function() {
    this.route('listing', { path: 'show/' });
    this.route('show', { path: 'show/:resource_id' });
    this.route('create');
    this.route('createGroup', { path: 'create-group' });
  });

  this.route('fences', function() {
    this.route('listing', { path: 'show/' });
    this.route('show', { path: 'show/:fence_id' });
    this.route('create');
  });
  this.route('login');
});

export default Router;
