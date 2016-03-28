import Ember from 'ember';

export default Ember.Component.extend({

    model: [{
        type: "success",
        message: "trying stuff"
    }],

    error: function (msg) {
        this.get("model").pushObject({
            type: "error",
            message: JSON.stringify(msg)
        });
    },
    success: function (msg) {
        this.get("model").pushObject({
            type: "success",
            message: JSON.stringify(msg)
        });
    },
    log: function (msg) {
        this.get("model").pushObject({
            type: "log",
            message: JSON.stringify(msg)
        });
    },
    
    reset: function () {
        this.set("model", {
            type: "",
            message: ""
        });
    },
    
    actions: {
        remove: function (item) {
            console.log(item);
            this.get("model").removeObject(item);
        }
        
    }

});