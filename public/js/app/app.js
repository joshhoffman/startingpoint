/**
 * Created by Josh on 4/23/14.
 */

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    ready: function() {
        /*var template = Ember.TEMPLATES["templates/application"];
        var html = template();*/
        console.log('ready');
        //$('body').append(Ember.TEMPLATES.application());
    }
});

// change this once I know the routes in the server
/*App.RegisterAdapter = DS.LSAdapter.extend({
  namespace: 'starting'
});*/

App.RegisterController = Ember.Controller.extend({
    // Do post here!
    //template: Ember.TEMPLATES.Register,
    registerFailed: false,
    actions: {
        registerAction: function() {
            var store = this.store;
            var usrname = $("#username").val();
            var dispname = $("#displayname").val();
            var pwd = $("#password").val();
            var confirmpwd = $("#confirmpassword").val();
            
            if(!store) { alert('store null'); }
            var usr = store.createRecord('user', {
                username : usrname,
                displayname : dispname,
                password : pwd,
                confirmpassword : confirmpwd
            });

            usr.save();
            var data = {username: usrname, displayname: dispname, password: pwd, confirmpassword: confirmpwd};
            console.log(data);
            
            console.log("testing " + data);
            var request = $.post("/register", data, function(resp) {
                //resp = resp+"}";
                console.log(resp);
                //var resp2=JSON.parse(resp);
                var resp2 = resp;
                console.log('response is ' + resp2);
                console.log(resp2.status);
                if(resp2.status === 'success') {
                    this.transitionToRoute('index');
                } else {
                    console.log('fail');
                    
                    //this.set('registerFailed', true);
                    this.transitionToRoute('register');
                }
            });
            
            
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

        success: function(resp) {
            this.reset();
            // register logic
            alert('success ' + resp.status);
            console.log('successful register');
        },

        failure: function() {
            this.reset();
            this.set("loginFailed", true);
            alert('fail');
            console.log('failed login');
        }
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

App.IndexView = Ember.View.extend({
    template: Ember.TEMPLATES.application
});

App.RegisterView = Ember.View.extend({
    template: Ember.TEMPLATES.register
});