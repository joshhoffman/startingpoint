/**
 * Created by Josh on 4/24/14.
 */
App.Message = Ember.Object.extend({
    // TODO: Make model accurate
    id: 3,
    firstName: 'josh',
    lastName: 'hoffman',
    text: null,
    timeStamp: null
});

App.User = DS.Model.extend({
    // TODO: Create user model
    username : DS.attr('string'),
    displayname: DS.attr('string'),
    password: DS.attr('string')
});