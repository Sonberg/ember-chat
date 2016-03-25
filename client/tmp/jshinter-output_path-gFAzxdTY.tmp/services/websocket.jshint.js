QUnit.module('JSHint - services/websocket.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/websocket.js should pass jshint.\nservices/websocket.js: line 13, col 17, \'message\' is defined but never used.\nservices/websocket.js: line 19, col 11, Missing semicolon.\nservices/websocket.js: line 8, col 36, \'io\' is not defined.\n\n3 errors');
});
