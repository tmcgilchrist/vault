import Ember from 'ember';

export default Ember.Route.extend({

    model: function () {
        this.store.find('card');
    },
    setupController: function(controller, model) {
        console.log("Model is empty: " + (model === undefined) + " model: " + model);
        controller.set('model', model);
    }
});
