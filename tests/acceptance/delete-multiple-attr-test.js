import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from 'picus/tests/helpers/module-for-acceptance';
import defaultScenario from '../../mirage/scenarios/default';
import startApp from '../helpers/start-app';

let application;

const mockTickTock = Ember.Service.extend({
  now: 111,
});

moduleForAcceptance('Acceptance | delete multiple attributes', {
  beforeEach() {
    server.shutdown();

    application = startApp();
    application.register('service:mockTickTock', mockTickTock);
    application.inject('service:store', 'ticktock', 'service:mockTickTock');
  },
  afterEach() {
    Ember.run(application, 'destroy');
  },
});

test('Delete selected on node attributes', async (assert) => {
  defaultScenario(server);
  const url = '/cluster/my/nodes/show/virtual01?tab=attributes';
  const firstUtilAttr = 'table tr:eq(0) td';
  const deleteControl = `${firstUtilAttr}:eq(3) .glyphicon-trash`;

  await visit(url);

  // First attribute exists as expected
  assert.equal('util attr #99', find(`${firstUtilAttr}:eq(1)`).text());
  assert.equal(find(deleteControl).length, 1);

  await click(find(`${firstUtilAttr} input:eq(0)`));
  await click(find('button')[3]); // Delete

  andThen(() => {
    assert.equal(find(deleteControl).length, 0);
    assert.equal(
      find(`${firstUtilAttr}:eq(3)`).text().match('DELETING').length,
      1,
    );
    assert.equal(currentURL(), url);
  });
});
