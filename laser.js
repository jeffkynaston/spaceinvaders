function Laser(x, y) {
    this.x = x,
    this.y = y,
    this.width = 4,
    this.height = 20

};

Laser.prototype = {

  drawLaser: function(context, myLaser) {
    context.beginPath();
    context.rect(myLaser.x, myLaser.y, myLaser.width, myLaser.height);
    context.fillStyle = 'red';
    context.fill();
  },

  moveUp: function() {
    this.y -= 40
  }

};
