/**
 * Created by Josh on 4/23/14.
 */

App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// change this once I know the routes in the server
/*App.RegisterAdapter = DS.LSAdapter.extend({
  namespace: 'starting'
});*/

App.RegisterController = Ember.Controller.extend({
    // Do post here!
    actions: {
        registerAction: function() {
            var store = this.store;
            if(!store) { alert('store null'); }
            var usr = store.createRecord('user', {
                username : $("#username").val(),
                displayname : $("#displayname").val(),
                password : $("#password").val()
            });
            alert(store.find('user', '6mdal'));
            usr.save();
            this.transitionToRoute('index');
        },

        register: function() {
            this.setProperties({
                registerFailed: false,
                isProcessing: true
            });

            this.set("timeout", setTimeout(this.slowConnection.bind(this), 1));

            var request = $.post("/register", this.getProperties("username", "password", "displayname"));
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
    }
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