
function Invader(x) {
  this.x = x,
  this.y = 100,
  this.width = 40,
  this.height = 40,
  this.alive = true,
  this.direction = 1
};

Invader.prototype = {

  drawInvader: function(context, myInvader) {
    if (!myInvader.alive) { return };

    var img = $('#hr-logo')[0];

    context.drawImage(img, myInvader.x, myInvader.y , myInvader.width, myInvader.height);
  },

  changeInvaderPosition: function(invader) {
    if (invader.direction == 1){
      invader.moveRight();
      if (invader.x > 1000){
        invader.direction = -1
        invader.moveDown()
      }
    } else {
      invader.moveLeft();
      if (invader.x < 40 ){
        invader.direction = 1
        invader.moveDown()
      }
    }

  },

  reachBottom: function() {
    return this.y >= 650
  },

  moveRight: function() {
    this.x += 3
  },

  moveLeft: function() {
    this.x -= 3
  },

  moveDown: function() {
    this.y += 45
  }

};



