$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(400, 200, 300, 290);
    createPlatform(777, 170, 349, 121);
    createPlatform(222, 220, 54, 97);
    createPlatform(16, 345, 41, 154, "hotpink")
     
    
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 150);
    createCollectable("diamond", 200, 170, 0.5, 0.7)
    createCollectable("grace", 797, 130);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1800);
    createCannon("right", 300, 2000);
    createCannon(bottom, 400, 1789)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
