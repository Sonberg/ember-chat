define('digilar-client/tests/unit/services/dummy-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/dummy-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/dummy-service-test.js should pass jshint.');
  });
});