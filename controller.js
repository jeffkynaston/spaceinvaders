// listener: key left, key right, shoot, laser to invader contact (every laser would be an instance of the laser object,)
// would have x, and y coordinates, if it has the same coordinates as space invader than contact), space bar to start game
//
// on document load: instantiate game object, create player, create/draw all invaders,
// create listeners (1. grab objects from DOM 2. bine listeners on top of them)

$(document).ready(function(){
  gameView = new view
  gameController = new controller(gameView)
  gameController.bindEventListeners()

});

function controller(view){
  this.view = view;
  this.context = this.view.retrieveContext()
}

controller.prototype = {
  bindEventListeners: function(){
    $(document).keyup(this.whichKey.bind(this))
  },


  updateLaser: function(laserCollection) {
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].moveUp()
      if (laserCollection[i].y < 0) { // Potential refactor (as a separate function)
        laserCollection.splice(i, 1)
      }
    }
  }

  drawCanvas: function(laserCollection, player, invader) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    player.drawPlayer();
    invader.drawInvader();
    for (var i = 0; i < laserCollection.length; i ++) {
      laserCollection[i].drawLaser();
    }
  }
};


  whichKey: function(event) {
    debugger
  }
}

function view(){

}

view.prototype = {
  retrieveContext: function(){
    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");
    return context;
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


