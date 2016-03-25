define('digilar-client/tests/helpers/start-app', ['exports', 'ember', 'digilar-client/app', 'digilar-client/config/environment'], function (exports, _ember, _digilarClientApp, _digilarClientConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _digilarClientConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _digilarClientApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});