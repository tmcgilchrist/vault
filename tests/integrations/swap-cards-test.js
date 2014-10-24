import Ember from "ember";
import Pretender from 'pretender';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;
var pretender;

var CARDS = {
    "1": {
        id: '1',
        name: 'Card 1'
    },
    "2": {
        id: '2',
        name: 'Card 2 '
    }
};

module('Integration - Swap cards', {
    setup: function() {
        pretender = new Pretender(function(){
            this.get('/cards', function(request){
                var all =  JSON.stringify({cards: Object.keys(CARDS).map(function(k){return CARDS[k];})});
                console.log(all);
                return [200, {"Content-Type": "application/json"}, all];
            });

            this.get('/cards/:id', function(request){
                var card = JSON.stringify({card: CARDS[request.params.id]});
                console.log(card);
                return [200, {"Content-Type": "application/json"}, card];
            });
        });
        App = startApp();
    },
    teardown: function() {
       //Ember.run(App, App.destroy);
        if (pretender) {
            pretender.shutdown();
        }
        pretender = null;
    }
});

test("Page contents", function() {
    expect(2);
    visit('/cards').then(function() {
        equal(find('.cards-list').length, 1, "Page contains list of models");
        equal(find('.cards-list .trading-card').length, 2, "List contains expected number of models");
    });
});
