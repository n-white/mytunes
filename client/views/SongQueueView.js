// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // debugger;
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);

  },

  render: function () {
    var html = [
      '<div>',
        '<span>',
          this.collection,
        '</span>',
      '</div>',
      '<br/>'
    ].join('');
    $('body').append(html);
  }

});
