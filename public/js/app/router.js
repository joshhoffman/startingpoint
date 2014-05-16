/**
 * Created by Josh on 4/23/14.
 */
App.Router.map(function() {
    this.resource('index', {path:"/"});
    //this.resource('chat', { path:"/" });
    this.resource('register', {path: "/register" });
    this.resource('login', { path: "/login" })
});

App.RegisterRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('user');
    },
    setupController : function(controller, model) {
        controller.set("model", model);
    }
});

App.IndexRoute = Ember.Route.extend({
    // TODO: socket.io should be involved here somewhere
    activate: function() {
        // TODO: init socket.io here
        console.log('test');
    },
    
    model: function() {
        return [
            {
                id: 1,
                firstName: 'Josh',
                lastName: 'Hoffman',
                text: 'test text',
                timeStamp: Date.now() - 400000
            }
        ];
    },

    actions: {
        sendMessage: function(message) {
            if(message !== '')
            {
                // TODO: Some AJAX here maybe?
                var user, messages, newMessage;

                if(message !== '')
                {
                    messages = this.modelFor('index');
                    newMessage = App.Message.create({
                        text: message,
                        timeStamp: Date.now()
                    })
                    messages.pushObject(newMessage);
                }
            }
        }
    }
});