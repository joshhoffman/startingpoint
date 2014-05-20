/**
 * Created by Josh on 4/23/14.
 */

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    ready: function() {
        /*var template = Ember.TEMPLATES["templates/application"];
        var html = template();*/
        console.log('ready');
        $('body').append(Ember.TEMPLATES.application);
    }
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
            //alert(store.find('user', '6mdal'));
            usr.save();
            var data = {username: usrname, displayname: dispname, password: pwd, confirmpassword: confirmpwd};
            var sdata = JSON.stringify(data);
            console.log(data);
            /*$.post("/register", data);//.then(this.success.bind(this), this.failure.bind(this));*/
            
            console.log("testing " + data);
            //this.setProperties(data);
            //var request = $.post("/register", this.getProperties("username", "password", "displayname"));
            //var request = $.post("/register", data, function(resp) {alert(resp);});
            var request = $.post("/register", data);
            request.then(this.success.bind(this), this.failure.bind(this));
            
            /*$.ajax({
                type: 'POST',
                url: '/register/',
                data: data, // or JSON.stringify ({name: 'jonas'}),
                success: function() { alert('success'); },
                failure: function() { alert('failure'); },
                contentType: "application/json",
                dataType: 'json'
            });*/
            
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
            alert('success');
            console.log('successful login');
        },

        failure: function() {
            this.reset();
            this.set("loginFailed", true);
            alert('fail');
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