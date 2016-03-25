define('digilar-client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'digilar-client/tests/helpers/start-app', 'digilar-client/tests/helpers/destroy-app'], function (exports, _qunit, _digilarClientTestsHelpersStartApp, _digilarClientTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _digilarClientTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _digilarClientTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});