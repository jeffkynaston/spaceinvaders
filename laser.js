function Laser(x, y) {
    this.x = x,
    this.y = y,
    this.width = 4,
    this.height = 20

};

Laser.prototype = {

  drawLaser: function(context) {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'red';
    context.fill();
  },

  moveUp: function() {
    this.y -= 20
  }

};
