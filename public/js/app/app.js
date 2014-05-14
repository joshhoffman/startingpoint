/**
 * Created by Josh on 4/23/14.
 */

App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.IndexController = Ember.Controller.extend({

    loginFailed: false,
    isProcessing: false,
    isSlowConnection: false,
    timeout: null,

    login: function() {
        this.setProperties({
            loginFailed: false,
            isProcessing: true
        });

        this.set("timeout", setTimeout(this.slowConnection.bind(this), 1));

        var request = $.post("/login", this.getProperties("username", "password"));
        request.then(this.success.bind(this), this.failure.bind(this));
    },

    success: function() {
        this.reset();
        // sign in logic
        console.log('successful login');
    },

    failure: function() {
        this.reset();
        this.set("loginFailed", true);
        console.log('failed login');
    },

    slowConnection: function() {
        this.set("isSlowConnection", true);
    },

    reset: function() {
        clearTimeout(this.get("timeout"));
        this.setProperties({
            isProcessing: false,
            isSlowConnection: false
        });
    }

});