// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  
  initialize: function() {
    // status variable for whether song is in queue
    // default is false

  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // this particular song will get pushed to collection in songsQueue.js'
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // this particular song will get removed from collection in songsQueue.js
    this.trigger('dequeue', this);
  },

  ended: function() {
    // will detect that song has finished playing 
    // dequeue itself 
    // play next song ? 
    this.trigger('ended', this);

  }

});
