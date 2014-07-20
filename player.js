function Player() {
  this.x = 400,
  this.y = 700,
  this.width = 80,
  this.height = 40,
  this.alive = true
};

Player.prototype = {

  drawPlayer: function(context, myPlayer) {
    context.beginPath();
    context.rect(myPlayer.x, myPlayer.y, myPlayer.width, myPlayer.height);
    context.fillStyle = 'blue';
    context.fill();
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

