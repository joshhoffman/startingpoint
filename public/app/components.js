/**
 * Created by Josh on 4/24/14.
 */
App.TimeStampComponent = Ember.Component.extend({
    startTimer: function() {
        var currentTime = this.get('time');
        this.set('time', currentTime - 6000);
        this.scheduleStartTimer();
    },

    scheduleStartTimer: function() {
        this._timer = Ember.run.later(this, 'startTimer', 6000);
    }.on('didInsertElement'),

    killTimer: function() {
        Ember.run.cancel(this._timer);
    }.on('willDestroyElement')
});

App.ChatBoxComponent = Ember.Component.extend({
    message: '',
    actions: {
        submit: function() {
            // TODO: post AJAX data
            var message = this.get('message').trim(),
                conversation = this.$('ul')[0];

            this.sendAction('action', message);

            Ember.run.schedule('afterRender', function() {
                conversation.scrollTop = conversation.scrollHeight;
            });

            this.set('message', '');
        }
    }
});