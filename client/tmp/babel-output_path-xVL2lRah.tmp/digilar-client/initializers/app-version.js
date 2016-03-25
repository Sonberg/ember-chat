define('digilar-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'digilar-client/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _digilarClientConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_digilarClientConfigEnvironment['default'].APP.name, _digilarClientConfigEnvironment['default'].APP.version)
  };
});