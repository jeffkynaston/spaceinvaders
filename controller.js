// listener: key left, key right, shoot, laser to invader contact (every laser would be an instance of the laser object,)
// would have x, and y coordinates, if it has the same coordinates as space invader than contact), space bar to start game
//
// on document load: instantiate game object, create player, create/draw all invaders,
// create listeners (1. grab objects from DOM 2. bine listeners on top of them)

$(document).ready(function(){
  gameView = new view
  gameController = new controller(gameView)

});

function controller(view){

}

function view(){
  var canvas = $("#canvas");
  var context = canvas.getContext("2d");
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


// ANIMATION LOOP

// loop through array of space invaders and draw all space invaders
//    check to see if space invaders state is alive,
//      if yes, draw
//      if no, skip drawing

// draw player at current position

// loop over all lazer objects
//    check to see if lazer state is alive,
//    (dead if hits end of screen or if hits invader object)
//      if yes, draw
//      if no, skip drawing

// loop through invaders, check position, see if a lazer intersects
// if they intersect, update state of lazer and invader to dead
