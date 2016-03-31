"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('digilar-client/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'digilar-client/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _digilarClientConfigEnvironment) {

  var name = _digilarClientConfigEnvironment['default'].APP.name;
  var version = _digilarClientConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("digilar-client/components/chat-component/component", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        isServiceFactory: true,
        socket: _ember["default"].inject.service("websocket"),
        notify: _ember["default"].inject.service("notify"),
        keyDown: function keyDown(e) {
            this.get('socket').writing(e);
        },
        actions: {
            sendMessage: function sendMessage() {
                var message = this.get("message");
                this.set('message', "");
                this.get('socket').sendMessage(message);
                this.get('notify').success('Message sent');
            }
        }
    });
});
define("digilar-client/components/chat-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "digilar-client/components/chat-component/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("message");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.msg", ["loc", [null, [4, 17], [4, 29]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "digilar-client/components/chat-component/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("join");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.join", ["loc", [null, [8, 14], [8, 27]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 5
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "digilar-client/components/chat-component/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("message");
            dom.setAttribute(el1, "class", "me");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.me", ["loc", [null, [12, 28], [12, 39]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "digilar-client/components/chat-component/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("   \n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("     \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "item.msg", ["loc", [null, [3, 10], [3, 18]]]]], [], 0, null, ["loc", [null, [3, 4], [5, 11]]]], ["block", "if", [["get", "item.join", ["loc", [null, [7, 10], [7, 19]]]]], [], 1, null, ["loc", [null, [7, 4], [9, 11]]]], ["block", "if", [["get", "item.me", ["loc", [null, [11, 11], [11, 18]]]]], [], 2, null, ["loc", [null, [11, 5], [13, 11]]]]],
        locals: ["item"],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 3
            },
            "end": {
              "line": 19,
              "column": 3
            }
          },
          "moduleName": "digilar-client/components/chat-component/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("       ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "writing");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 6
          }
        },
        "moduleName": "digilar-client/components/chat-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "message-input");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("   \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "help");
        var el4 = dom.createTextNode("Tyck enter för att skicka medelandet");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "submit-name");
        dom.setAttribute(el3, "value", "Sicka");
        dom.setAttribute(el3, "style", "display: none");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 1, 1);
        morphs[4] = dom.createElementMorph(element2);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "each", [["get", "socket.messages", ["loc", [null, [2, 8], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 0], [15, 9]]]], ["block", "if", [["get", "socket.writingBool", ["loc", [null, [17, 9], [17, 27]]]]], [], 1, null, ["loc", [null, [17, 3], [19, 10]]]], ["inline", "input", [], ["type", "text", "class", "name", "value", ["subexpr", "@mut", [["get", "message", ["loc", [null, [22, 47], [22, 54]]]]], [], []]], ["loc", [null, [22, 8], [22, 57]]]], ["element", "action", ["sendMessage"], [], ["loc", [null, [24, 85], [24, 111]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('digilar-client/components/notify-component/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        isServiceFactory: true,
        notify: _ember['default'].inject.service("notify"),
        actions: {
            remove: function remove(item) {
                this.get('notify').remove(item);
            }

        }

    });
});
define("digilar-client/components/notify-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "digilar-client/components/notify-component/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("notify");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "item.type", ["loc", [null, [2, 17], [2, 26]]]]]]], ["element", "action", ["remove", ["get", "item", ["loc", [null, [2, 48], [2, 52]]]]], ["on", "mouseUp"], ["loc", [null, [2, 30], [2, 68]]]], ["content", "item.message", ["loc", [null, [2, 70], [2, 86]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 9
          }
        },
        "moduleName": "digilar-client/components/notify-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "notify.model", ["loc", [null, [1, 8], [1, 20]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('digilar-client/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('digilar-client/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('digilar-client/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('digilar-client/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('digilar-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'digilar-client/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _digilarClientConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_digilarClientConfigEnvironment['default'].APP.name, _digilarClientConfigEnvironment['default'].APP.version)
  };
});
define('digilar-client/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('digilar-client/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('digilar-client/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('digilar-client/initializers/export-application-global', ['exports', 'ember', 'digilar-client/config/environment'], function (exports, _ember, _digilarClientConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_digilarClientConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _digilarClientConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_digilarClientConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('digilar-client/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('digilar-client/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('digilar-client/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("digilar-client/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('digilar-client/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('digilar-client/router', ['exports', 'ember', 'digilar-client/config/environment'], function (exports, _ember, _digilarClientConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _digilarClientConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('digilar-client/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("digilar-client/services/notify", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Service.extend({
        isServiceFactory: true,
        model: [{
            type: "success",
            message: "trying stuff"
        }],

        error: function error(msg) {
            var item = {
                type: "error",
                message: JSON.stringify(msg)
            };

            this.get("model").pushObject(item);
            this.timeout(item);
        },
        success: function success(msg) {
            var item = {
                type: "success",
                message: JSON.stringify(msg)
            };
            this.get("model").pushObject(item);
            this.timeout(item);
        },
        log: function log(msg) {
            var item = {
                type: "log",
                message: JSON.stringify(msg)
            };

            this.get("model").pushObject(item);
            this.timeout(item);
        },

        reset: function reset() {
            this.set("model", {
                type: "",
                message: ""
            });
        },

        remove: function remove(item) {
            this.get("model").removeObject(item);
        },

        timeout: function timeout(item) {
            var self = this;
            var timer = setInterval(function () {
                self.get("model").removeObject(item);
                clearInterval(timer);
            }, 5000);
        }
    });
});
define("digilar-client/services/websocket", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Object.extend({
        isServiceFactory: true,
        notify: _ember["default"].inject.service("notify"),
        messages: [{
            msg: "Welcome to your chat"
        }],
        writingBool: false,

        _setup: (function () {
            var socket = this.socket = io.connect('http://localhost:3000/', {
                transports: ['websocket', 'polling', 'flashsocket']
            });

            /*
                CHAT | New message
            */
            socket.on('message', (function (data) {
                data = JSON.parse(data);
                this.get('notify').log("Message recived");
                this.get('messages').pushObject({
                    msg: data
                });
            }).bind(this));

            /*
                CHAT | User has joined the chat
            */
            socket.on('join', (function (data) {
                data = JSON.parse(data);
                this.get('messages').pushObject({
                    join: data
                });
            }).bind(this));

            /*
                CHAT | User is writing
            */
            socket.on('writing', (function () {
                if (!this.get('writingBool')) {
                    this.set('writingBool', true);
                }
                clearInterval(counter);
                var self = this;
                var counter = setInterval(function () {
                    clearInterval(counter);
                    self.set('writingBool', false);
                }, 1500);
            }).bind(this));

            socket.on('connection', function () {});
        }).on('init'),

        sendMessage: function sendMessage(message) {
            this.get('messages').pushObject({
                me: message
            });

            this.socket.emit('message', JSON.stringify(message));
        },

        writing: function writing(e) {
            console.log(e.keyCode);
            this.socket.emit('writing', null);
        }
    });
});
define("digilar-client/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 20
          }
        },
        "moduleName": "digilar-client/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["content", "chat-component", ["loc", [null, [2, 0], [2, 18]]]], ["content", "notify-component", ["loc", [null, [3, 0], [3, 20]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('digilar-client/config/environment', ['ember'], function(Ember) {
  var prefix = 'digilar-client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("digilar-client/app")["default"].create({"name":"digilar-client","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=digilar-client.map