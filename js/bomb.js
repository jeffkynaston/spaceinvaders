function Bomb(x, y) {
    this.x = x,
    this.y = y,
    this.width = 6,
    this.height = 6

};

Bomb.prototype = {

  drawBomb: function(context, myBomb) {
    context.beginPath();
    context.rect(myBomb.x, myBomb.y, myBomb.width, myBomb.height);
    context.fillStyle = "#d7e827";
    context.fill();
  },

  fallDown: function() {
    this.y += 40
  }

};
