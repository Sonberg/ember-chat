define('digilar-client/tests/components/chat-component/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/chat-component/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/chat-component/component.js should pass jshint.');
  });
});