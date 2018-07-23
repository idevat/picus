import Ember from 'ember';

export function extendFormFor([formFields], { appSpecificFields }) {
  return { ...formFields, ...appSpecificFields };
}

export default Ember.Helper.helper(extendFormFor);
