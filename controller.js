// listener: key left, key right, shoot, laser to invader contact (every laser would be an instance of the laser object,)
// would have x, and y coordinates, if it has the same coordinates as space invader than contact), space bar to start game
//
// on document load: instantiate game object, create player, create/draw all invaders,
// create listeners (1. grab objects from DOM 2. bine listeners on top of them)

$(document).ready(function(){
  var gameView = new view()
  var gameController = new controller(gameView)

  gameView.initialize()
  gameController.bindEventListeners()
  gameController.drawCanvas(gameController.laserCollection, gameController.player, gameController.invader)
});

function controller(view){
  this.view = view;
  this.context = this.view.retrieveContext();
  this.player = new Player;
  this.invader = new Invader;
  this.laserCollection = [];

}

controller.prototype = {
  bindEventListeners: function(){
    $(document).keyup(this.whichKey.bind(this))
    $(document).keydown(this.preventSpaceBarScroll)
  },

  preventSpaceBarScroll: function(e) {
    if (e.keyCode === 32) { e.preventDefault() }
  },

  updateLaser: function(laserCollection) {
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].moveUp()
      if (laserCollection[i].y < 0) { // Potential refactor (as a separate function)
        laserCollection.splice(i, 1)
      }
    }
  },

  updateInvader: function(invader) {
    for (var i = 0; i < laserCollection.length; i++){
      if ((invader.y + 40 <= laserCollection[i].y) && (((laserCollection[i].x + 4) > invader.x) && (laserCollection[i].x < (invader.x + 40)))) {
        invader.alive = false;
        laserCollection.splice(i, 1);
      }
    }
  },

  drawCanvas: function(laserCollection, player, invader) {

    this.context.clearRect(0, 0, this.view.canvas.width, this.view.canvas.height);
    player.drawPlayer(this.context, this.player);
    invader.drawInvader(this.context, this.invader);
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].drawLaser();
    }
  },


  whichKey: function(event) {

    if (event.keyCode === 32) {
      this.startGame(event)
    };
    if (event.keyCode === 37) {
      this.moveLeft()
    };
    if (event.keyCode === 39) {
      this.moveRight()
    };
    if (event.keyCode === 70) {
      this.fireLaser()
    }
  },
  startGame: function(e) {
    this.view.prepStartGame();
  },
  moveLeft: function() {
    this.player.moveLeft()
  },
  moveRight: function() {
    this.player.moveRight()
  },
  fireLaser: function() {
    var laser = new Laser
    laser.x = this.player.x
    laser.y = this.player.y
    this.laserCollection.push(laser)
  }

};

function view(){
}

view.prototype = {
  initialize: function() {
    $('body').addClass('loaded')
    $('audio')[0].play()
  },

  prepStartGame: function() {
    $('body').removeClass().addClass('game-started')
    $('#title-container').hide()
  },

  displayWin: function() {
    $('#win').fadeIn();
  },

  retrieveContext: function(){
    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");
    return context;
  },

  canvas: function(){
    return $("#canvas")[0];
  }
}
//  within controller object: function to draw player, function to draw invaders, function to draw the laser,
// master animation loop - while? recursion? player moving left and right, player can shoot, laser
// moves, player disappears


// Write functions for on events
//  Move right function
//    Call players move right function
//  Move left function
//    Call players move left function
//  Fire lazer function
//    Initialize new lazer object(intial postion inherited from player position)
//    Add lazer to array of lazer objects
//


