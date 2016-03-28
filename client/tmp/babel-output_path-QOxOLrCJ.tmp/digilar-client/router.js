define('digilar-client/router', ['exports', 'ember', 'digilar-client/config/environment'], function (exports, _ember, _digilarClientConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _digilarClientConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});