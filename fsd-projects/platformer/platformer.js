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

     //Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
// createPlatform(0,620,400,20,"purple")
// createPlatform(500,390,10,100, "purple")
// createPlatform(530,630,100,20,"purple")
// createPlatform(700,500,50,20,"purple")
// createPlatform(650,250,50,20,"purple")
// createPlatform(900,200,300,20,"purple")
// createPlatform(900,50,300,50,"purple")
// createPlatform(1300,0,20,720,"purple")
// createPlatform(1200,200,20,300,"purple")
// createPlatform(900,200,20,500,"purple")
// createPlatform(900,700,400,20,"purple")
// createPlatform(900,600,50,20,"purple")
// createPlatform(1100,500,100,20,"purple")
// createPlatform(900,370,200,20,"yellow")
// createCollectable("diamond",1000,320) 
// createCollectable("grace",1250,50)
// createCollectable("kennedi",500,350)
// createCannon("right",600,10000)
// createCannon("top",1330,1500)
// createCannon("left",660,1)
// createPlatform(200,490,50,1,"lightblue")
// createPlatform(100,370,50,1,"lightblue")
// createPlatform(300,370,50,1,"lightblue")
// createPlatform(800,620,100,20,"purple")
    // TODO 3 - Create Collectables
createPlatform(0, 200, 400, 20)
createPlatform(0, 100, 300, 20)
createCannon('top', 390, 1000)
createPlatform(400, 100, 300, 20)
createPlatform(400, 100, 20, 120)
createPlatform(290, 0, 20, 120)
createPlatform(700, 200, 100, 20)
createPlatform(700, 100, 20, 120)
createPlatform(1050, 200, 250, 20)
createCollectable('sunflower', 900, 100)
createPlatform(1300, 200, 20, 300)
createPlatform(1100, 220, 1, 300, 'red')
createPlatform(750, 220, 1, 300, 'red')
createPlatform(750, 500, 320, 1, 'red')
createPlatform(800, 650, 600, 20)
createCollectable('sunflower', 830, 550)
createCannon('bottom',600, 1500)
createCannon('bottom',550, 1500)
createCannon('bottom',500, 1500)
createCannon('bottom',450, 1500)
createCannon('bottom',400, 1500)
createCollectable('darren', 530, 200)
createPlatform(350, 650, 450, 20)
createPlatform(330, 210, 20, 460)
createPlatform(450, 530, 50, 20)
createPlatform(350, 450, 20, 20)
createPlatform(450, 350, 50, 20)
createCannon('right',100, 3055)
createCannon('right', 650, 2050)





    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
