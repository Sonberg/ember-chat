define('digilar-client/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'digilar-client/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _digilarClientConfigEnvironment) {

  var name = _digilarClientConfigEnvironment['default'].APP.name;
  var version = _digilarClientConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});