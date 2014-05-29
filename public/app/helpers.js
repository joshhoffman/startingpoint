/**
 * Created by Josh on 4/24/14.
 */
Ember.Handlebars.helper('format-date', function(date) {
    return moment(date).fromNow();
});