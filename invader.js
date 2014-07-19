var canvas = document.getElementById('invader');
var ctx = canvas.getContext('2d');

function Invader() {
  this.x = 400,
  this.y = 400,
  this.width = 40,
  this.height = 40,
  this.alive = true
};

Invader.prototype = {

  drawInvader: function(context, myInvader) {
    context.beginPath();
    context.rect(myInvader.x, myInvader.y, myInvader.width, myInvader.height);
    context.fillStyle = 'green';
    context.fill();
  },

  moveRight: function() {
    this.x += 23
  },

  moveLeft: function() {
    this.x -= 23
  }

};



