// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  // queue: [],

  initialize: function() {
  
    // this.on('change:queueStatus', function(song) {
    //   queue.push(song);
    // }, this);

  }

});