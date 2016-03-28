define("digilar-client/components/notify-component/component", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({

        model: [{
            type: "success",
            message: "trying stuff"
        }],

        error: function error(msg) {
            this.get("model").pushObject({
                type: "error",
                message: JSON.stringify(msg)
            });
        },
        success: function success(msg) {
            this.get("model").pushObject({
                type: "success",
                message: JSON.stringify(msg)
            });
        },
        log: function log(msg) {
            this.get("model").pushObject({
                type: "log",
                message: JSON.stringify(msg)
            });
        },

        reset: function reset() {
            this.set("model", {
                type: "",
                message: ""
            });
        },

        actions: {
            remove: function remove(item) {
                console.log(item);
                this.get("model").removeObject(item);
            }

        }

    });
});