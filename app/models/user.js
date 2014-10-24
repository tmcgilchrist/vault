import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    userCards: DS.hasMany('userCard', {async: true})
});
