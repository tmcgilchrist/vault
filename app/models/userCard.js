import DS from 'ember-data';

export default DS.Model.extend({
    card: DS.belongsTo('card'),
    user: DS.belongsTo('user')
});
