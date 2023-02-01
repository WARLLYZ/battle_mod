//set main ship and enemy ships health
let mainShipHealth = 20;
let enemyShip1Health = 5;
let enemyShip2Health = 5;
let enemyShip3Health = 5;
let enemyShip4Health = 5;
let enemyShip5Health = 5;
let enemyShip6Health = 5;

//set current target enemy ship
let currentTarget = 1;

//event listener on main ship image
document.getElementById("my-ship").addEventListener("click", function() {
  //check if main ship is still alive
  if (mainShipHealth > 0) {
    //generate random number between 0 and 1
    let attackChance = Math.random();
    
    //check if main ship hits the target
    if (attackChance <= 0.7) {
      switch (currentTarget) {
        case 1:
          enemyShip1Health -= 5;
          document.getElementById("enemy-ship1-hp").innerHTML = enemyShip1Health;
          if (enemyShip1Health <= 0) {
            currentTarget++;
          }
          break;
        case 2:
          enemyShip2Health -= 5;
          document.getElementById("enemy-ship2-hp").innerHTML = enemyShip2Health;
          if (enemyShip2Health <= 0) {
            currentTarget++;
          }
          break;
        case 3:
          enemyShip3Health -= 5;
          document.getElementById("enemy-ship3-hp").innerHTML = enemyShip3Health;
          if (enemyShip3Health <= 0) {
            currentTarget++;
          }
          break;
        case 4:
          enemyShip4Health -= 5;
          document.getElementById("enemy-ship4-hp").innerHTML = enemyShip4Health;
          if (enemyShip4Health <= 0) {
            currentTarget++;
          }
          break;
        case 5:
          enemyShip5Health -= 5;
          document.getElementById("enemy-ship5-hp").innerHTML = enemyShip5Health;
          if (enemyShip5Health <= 0) {
            currentTarget++;
          }
          break;
        case 6:
          enemyShip6Health -= 5;
          document.getElementById("enemy-ship6-hp").innerHTML = enemyShip6Health;
          if (enemyShip6Health <= 0) {
            //player wins the game
            alert("You won the game!");
            resetGame();
          }
          break;
        default:
          break;
      }
      
      //check if enemy ship hits back
      if (Math.random() <= 0.7) {
        mainShipHealth -= 3;
        document.getElementById("my-ship-hull").innerHTML = mainShipHealth;
        if (mainShipHealth <= 0) {
          //player loses the game
          alert("Game Over!");
          resetGame();
        }
      }
    }
  }
});

//reset game function
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

function resetGame() {
  document.getElementById("my-ship-hull").innerText = "20";
  document.getElementById("enemy-ship1-hp").innerText = "5";
  document.getElementById("enemy-ship2-hp").innerText = "5";
  document.getElementById("enemy-ship3-hp").innerText = "5";
  document.getElementById("enemy-ship4-hp").innerText = "5";
  document.getElementById("enemy-ship5-hp").innerText = "5";
  document.getElementById("enemy-ship6-hp").innerText = "5";
}