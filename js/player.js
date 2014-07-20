function Player() {
  this.x = 400,
  this.y = 700,
  this.width = 80,
  this.height = 80,
  this.alive = true
};

Player.prototype = {

  drawPlayer: function(context, myPlayer) {
    var img = $('#dbc-logo')[0];

    context.drawImage(img, myPlayer.x, myPlayer.y , myPlayer.width, myPlayer.height);
  },

  moveRight: function() {
    if (this.x < 1200) {
      this.x += 23
    }
  },

  moveLeft: function() {
    if (this.x > 0) {
      this.x -= 23
    }
  }

};

