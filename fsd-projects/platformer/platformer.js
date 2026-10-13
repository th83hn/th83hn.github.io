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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms


createPlatform(1350, 400, 50, 50, "red");
createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform
createPlatform(400, 700, 100, 20, "green");
createPlatform(600, 600, 100, 20, "blue");
createPlatform(750, 500, 100, 20, "white");
createPlatform(550, 400, 100, 20, "blue");
createPlatform(750, 300, 100, 20, "white");
createPlatform(900, 400, 100, 20, "blue");
createPlatform(950, 200, 100, 20, "green");
createPlatform(1150, 500, 100, 20, "white");
createPlatform(1200, 150, 100, 20, "blue");
createPlatform(200, 200, 100, 20, "green");
createPlatform(350, 300, 100, 20, "green");
createPlatform


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("diamond", 200, 700, 0.5, 0.7);




   
    // TODO 4 - Create Cannons

createCannon("top", 300, 2000);
createCannon("right", 300, 2000);
createCannon("right", 600, 2000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
