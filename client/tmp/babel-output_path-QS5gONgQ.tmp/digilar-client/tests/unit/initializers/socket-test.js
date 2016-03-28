define('digilar-client/tests/unit/initializers/socket-test', ['exports', 'ember', 'digilar-client/initializers/socket', 'qunit'], function (exports, _ember, _digilarClientInitializersSocket, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | socket', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _digilarClientInitializersSocket['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});