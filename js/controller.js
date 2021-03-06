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
});

function controller(view){
  this.view = view;
  this.context = this.view.retrieveContext();
  this.player = new Player;
  this.laserCollection = [];
  this.invaderCollection = [];
  this.score = 0;
}

controller.prototype = {
  bindEventListeners: function(){
    $(document).keydown(this.whichKeyDown.bind(this))
    $(document).keyup(this.whichKeyUp.bind(this))
    $('audio').on('ended', function() {
      this.load();
      this.play();
    })
  },

  //preventSpaceBarScroll: function(e) {
  //  if (e.keyCode === 32) { e.preventDefault() }
  //},

  updateLaser: function(laserCollection) {
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].moveUp()
      if (laserCollection[i].y < 0) { // Potential refactor (as a separate function)
        laserCollection.splice(i, 1)
      }
    }
  },

  updateInvader: function(invaderCollection) {
    for (var k = 0; k < this.invaderCollection.length; k++){
      var invader = this.invaderCollection[k]
      invader.changeInvaderPosition(invader)
      for (var i = 0; i < this.laserCollection.length; i++){
          // if ((invader.y + 40 == this.laserCollection[i].y) && (((this.laserCollection[i].x + 4) > invader.x) && (this.laserCollection[i].x < (invader.x + 40)))) {
        if(invader.alive){
          if ((this.laserCollection[i].y < invader.y + 40) && (this.laserCollection[i].y > invader.y) && (((this.laserCollection[i].x + 4) > invader.x) && (this.laserCollection[i].x < (invader.x + 40)))) {
            invader.alive = false;
            this.score += 10;
            $("#score").text(this.score)
            this.laserCollection.splice(i, 1);
          }
        }
      }
    }
  },

  drawCanvas: function(laserCollection, player, invaderCollection) {
    this.context.clearRect(0, 0, this.view.canvas().width, this.view.canvas().height);
    player.drawPlayer(this.context, this.player);

    for (var i = 0; i < invaderCollection.length; i ++) {
      invaderCollection[i].drawInvader(this.context, invaderCollection[i]);
    }
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].drawLaser(this.context);
    }
  },

  animationLoop: function() {
    this.drawCanvas(this.laserCollection, this.player, this.invaderCollection)
    this.updateLaser(this.laserCollection);
    this.updateInvader(this.invaderCollection)
    for (var i = 0, invaders = this.invaderCollection, numOfInvaders = invaders.length; i < numOfInvaders; i ++) {
      if (invaders[i].reachBottom()){
        this.endGame('lose')
      }
    }
    console.log('invader')
  },

  whichKeyDown: function(event) {

    switch(event.keyCode) {
      case 65:
        // TODO: Remove this when MVP done. Just a cheat code.
        this.endGame('lose');
        break;
      case 32:
        if (!this.gameStarted) {
          this.startGame(event);
          this.gameStarted = true;
        }
        break;
      case 37:
        this.moveLeft();
        break;
      case 39:
        this.moveRight();
    }
  },
  whichKeyUp: function(event){
    switch(event.keyCode){
      case 70:
        this.fireLaser();
    }
  },

  startGame: function() {
    for (var i = 0; i<10; i++){
      this.invaderCollection.push(new Invader(i*80));
    }
    var _this = this;

    this.view.prepStartGame();
    setTimeout(function() {
      _this.refreshIntervalId = setInterval( _this.animationLoop.bind(_this), 1000/60)
    }, 800)
    // setTimeout(function() {
    //   gameController.drawCanvas(gameController.laserCollection, gameController.player, gameController.invader)
    // }, 20000)
  },
  endGame: function(winOrLose) {
    winOrLose === 'win' ? this.view.displayWin() :
                           this.view.displayGameOver()
    clearInterval(this.refreshIntervalId);
  },
  moveLeft: function() {
    this.player.moveLeft()
  },
  moveRight: function() {
    this.player.moveRight()
  },
  fireLaser: function() {
    var laser = new Laser
    laser.x = this.player.x + 40
    laser.y = this.player.y
    this.laserCollection.push(laser)
  }

};
//////VIEW/////////
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

  displayGameOver: function() {
    $('#lose').fadeIn();
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


