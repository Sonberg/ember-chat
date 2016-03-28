QUnit.module('JSHint - services/websocket.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/websocket.js should pass jshint.\nservices/websocket.js: line 39, col 40, \'data\' is defined but never used.\nservices/websocket.js: line 52, col 43, \'data\' is defined but never used.\nservices/websocket.js: line 53, col 11, Missing semicolon.\nservices/websocket.js: line 11, col 36, \'io\' is not defined.\n\n4 errors');
});
