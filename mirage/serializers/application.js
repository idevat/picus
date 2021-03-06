import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  // include contains name of hasMany() relations that have to be included
  include: ['nodes', 'resources', 'nodeAttributes', 'nodeUtilizationAttributes', 'properties',
    'fences', 'fenceProperties', 'resourceProperties', 'metaAttributes', 'locationPreferences',
    'orderingPreferences', 'aclUsers', 'aclGroups', 'aclRoles', 'aclPermissions', 'permissions',
    'colocationPreferences', 'utilizationAttributes', 'ticketPreferences', 'constraintSet',
    'resourceSets', 'constraintSets', 'orderingSet', 'users', 'groups',
  ],
});
