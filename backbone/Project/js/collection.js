// collection 
var song = Backbone.Model.extend();
var songs = Backbone.Collection.extend({
    model: song
});

var Songs = new songs([]);

Songs.add(new song({
    title: " song1"
}));