define('digilar-client/app', ['exports', 'ember', 'digilar-client/resolver', 'ember-load-initializers', 'digilar-client/config/environment'], function (exports, _ember, _digilarClientResolver, _emberLoadInitializers, _digilarClientConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _digilarClientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _digilarClientConfigEnvironment['default'].podModulePrefix,
    Resolver: _digilarClientResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _digilarClientConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});