import Ember from 'ember';

export default Ember.Component.extend({
    isServiceFactory: true,
    notify: Ember.inject.service("notify"),
    actions: {
        remove: function (item) {
            this.get('notify').remove(item);   
        }
        
    }

});