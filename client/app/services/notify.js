import Ember from 'ember';

export default Ember.Service.extend({
    isServiceFactory: true,
    model: [{
        type: "success",
        message: "trying stuff"
    }],

    error: function (msg) {
        var item = {
            type: "error",
            message: JSON.stringify(msg)
        };

        this.get("model").pushObject(item);
        this.timeout(item);
    },
    success: function (msg) {
        var item = {
            type: "success",
            message: JSON.stringify(msg)
        };
        this.get("model").pushObject(item);
        this.timeout(item);
    },
    log: function (msg) {
        var item = {
            type: "log",
            message: JSON.stringify(msg)
        };

        this.get("model").pushObject(item);
        this.timeout(item);
    },

    reset: function () {
        this.set("model", {
            type: "",
            message: ""
        });
    },
    
    remove: function (item) {
        this.get("model").removeObject(item);
    },

    timeout: function (item) {
        var self = this;
        var timer = setInterval(function () {
            self.get("model").removeObject(item);
            clearInterval(timer);
        }, 5000);
    },
});