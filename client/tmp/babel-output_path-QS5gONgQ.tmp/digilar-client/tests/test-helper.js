define('digilar-client/tests/test-helper', ['exports', 'digilar-client/tests/helpers/resolver', 'ember-qunit'], function (exports, _digilarClientTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_digilarClientTestsHelpersResolver['default']);
});