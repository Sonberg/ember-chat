define("digilar-client/components/chat-component/component", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        isServiceFactory: true,
        socket: _ember["default"].inject.service("websocket"),
        actions: {
            sendMessage: function sendMessage() {
                var message = this.get("message");
                this.set('message', "");
                this.get('socket').sendMessage(message);
            }
        }
    });

    /*
    
    dummy: Ember.inject.service(),
        actions: {
            sendMessage: function () {
                var message = this.get("message");
                this.get("websocket").sendMessage(JSON.stringify(message));
                this.set("message", null);
            
            }
        }
    
    */
});