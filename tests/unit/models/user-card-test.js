import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('userCard', 'UserCards', {
  // Specify the other units that are required for this test.
  needs: ['model:card', 'model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
