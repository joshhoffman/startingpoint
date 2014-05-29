App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
});

$().ready(function() {
    $.getJSON("/userGet", function(json) {
        post.setProperties(json);
    });
});
    
App.Post = Ember.Object.extend({

});

App.PostController = Ember.ObjectController.extend({
  author: function() {
    return [this.get('id'), this.get('displayname')].join(' ');
  }.property('salutation', 'name')
});

App.PostView = Ember.View.extend({
  // the controller is the initial context for the template
  controller: null,
    template: Ember.Handlebars.compile("<h1>{{displayname}}</h1><h2>{{#each schedule}}{{this.event}}{{/each}}</h2><div>{{reminders}}</div>")
});

var post = App.Post.create();
var postController = App.PostController.create({ model: post });

App.PostView.create({ controller: postController }).appendTo('body');