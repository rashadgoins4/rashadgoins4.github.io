/* global $, sessionStorage */

$(document).ready(runProgram);
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);

  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  function handleKeyDown(event) {
    console.log(event.which);

    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    if (event.which === KEY.UP) {
      walker.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }

  function wallCollision() {
    if (walker.x < 0) {
      walker.x -= walker.speedX;
    }
    if (walker.x > $("#board").width() - 50) {
      walker.x -= walker.speedX;
    }
    if (walker.y < 0) {
      walker.y -= walker.speedY;
    }
    if (walker.y > $("#board").height() - 50) {
      walker.y -= walker.speedY;
    }
  }
  
  function endGame() {
    clearInterval(interval);
    $(document).off();
  }
  
}