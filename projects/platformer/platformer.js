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
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(0, 600, 200, 150); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(300, 670, 5, 70); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(200, 655, 200, 15); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(400, 720, 1000, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(500, 520, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(850, 610, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1230, 100, 5, 400); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1128, 500, 200, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1155, 400, 150, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1180, 300, 100, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1206, 200, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(950, 200, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(750, 280, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(520, 200, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(200, 100, 220, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(400, 280, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(200, 250, 80, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(195, 100, 5, 160); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1230, 100, 200, 5); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(600, 540, 5, 200); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(950, 630, 5, 150); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1220, 610, 180, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1320, 630, 5, 150); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(0, 300, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(0, 100, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(150, 200, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(400, 655, 10, 100); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(565, 700, 70, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(916, 700, 70, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1286, 700, 70, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 770, 650,); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 10% bounce
    createCollectable("kennedi", 1235, 320, 20, 0.5); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("database", 1087, 650); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("database", 450, 650,); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 1235, 85, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("max", 1190, 100, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("steve", 1190, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("database", 1300, 40, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("database", 220, 100, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("kennedi", 0, 50); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("max", 0, 250); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("database", 770, 240); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 750, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 100, 1500); // cannon on left wall, 600px down, shooting once per second
    createCannon("top", 1400, 1800); // cannon on left wall, 600px down, shooting once per second
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
