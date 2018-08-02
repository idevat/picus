import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from 'picus/tests/helpers/module-for-acceptance';
import defaultScenario from 'picus/mirage/scenarios/default';
import startApp from 'picus/tests/helpers/start-app';

let application;

const mockTickTock = Ember.Service.extend({
  now: 111,
});

moduleForAcceptance('Acceptance | cluster/resources/detail`', {
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

test('visiting /cluster/resources/detail', (assert) => {
  defaultScenario(server);
  visit('/cluster/my/resources/show/MyMock-01');

  andThen(() => {
    assert.equal(currentURL(), '/cluster/my/resources/show/MyMock-01');
  });
});

test('visiting /cluster/resources/does-not-exist', async (assert) => {
  defaultScenario(server);
  await visit('/cluster/my/resources/show/does-not-exist');

  assert.equal(currentURL(), '/cluster/my/resources/show/does-not-exist');
});


test('add meta attribute', async (assert) => {
  defaultScenario(server);
  const url = '/cluster/my/resources/show/resource-ping?tab=attributes';
  // columns of attributes: checkbox, key, value, delete button
  const attributes = '#attributes table tr';
  const key = 'foo';
  const value = 'bar';

  await visit(url);

  assert.equal(find(attributes).length, 0);

  await click('button:eq(20)'); // Add meta attribute
  await fillIn(emberFormForFind('Key'), key);
  await fillIn(emberFormForFind('Value'), value);
  await click(emberFormButton('Add'));

  andThen(() => {
    assert.equal(find(attributes).length, 1);

    const cellSelector = `${attributes}:eq(0) td`;
    assert.equal(find(cellSelector).length, 4);
    assert.equal(find(`${cellSelector}:eq(1)`).text(), key);
    assert.equal(find(`${cellSelector}:eq(2)`).text(), value);
    assert.equal(currentURL(), url);
  });
});
