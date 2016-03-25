define('digilar-client/tests/helpers/resolver', ['exports', 'digilar-client/resolver', 'digilar-client/config/environment'], function (exports, _digilarClientResolver, _digilarClientConfigEnvironment) {

  var resolver = _digilarClientResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _digilarClientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _digilarClientConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});