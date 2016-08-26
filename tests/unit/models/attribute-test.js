import { moduleForModel, test } from 'ember-qunit';

moduleForModel('attribute', 'Unit | Model | attribute', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('has required attributes', function(assert) {
  const model = this.subject();
  const attrNames = ['key', 'value'];

  assert.expect(attrNames.length);
  for (var attrName of attrNames) {
    assert.ok(Object.keys(model.toJSON()).indexOf(attrName) > -1, 'attribute ' + attrName + ' is missing');
  }
});
