"use strict";

// Enemies the player must avoid
class Enemy {
    constructor(x, y, bugSpeed) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.bugSpeed = bugSpeed;
    }

    // Draw enemy character(s) on screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y * 83 - 20);
    }

    // Update enemy position, with parameter dt being delta time between ticks
    update(dt) {
        const gameboardWidth = 505;

        if (this.x < gameboardWidth) {
            // Multiply movements by dt so game runs at same speed for all computers
            this.x * dt;

            // When enemy reaches end of game board, loop back to start
            if (this.x >= gameboardWidth - 10) {
                this.x = -100;
            }

            this.x += this.bugSpeed + this.changePace();
        }
    }

    // Adds pace variance to enemy bug speed
    changePace() {
        // return a random number between 1-6
        const pace = Math.floor(Math.random() * 6) + 1;
        return pace;
    }
}


// Player created at start position with movement controlled by user input
class Player1 {
    constructor() {
        this.x = 2;
        this.y = 5;
        this.sprite = 'images/char-pink-girl.png';
        this.win = false;
    }

    // Draw player character on screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83 - 20);
    }

    // At every refresh, checks for player-enemy collision and if game is won
    update() {
        this.checkCollisions();
        this.checkWin();
    }

    // Player moves left, right, up and down based on user input
    handleInput(keyPress) {
        if (keyPress === 'left' && this.x > 0) {
            this.x -= 1;
        } else if (keyPress === 'right' && this.x < 4) {
            this.x += 1;
        } else if (keyPress === 'up' && this.y > 0) {
            this.y -= 1;
        } else if (keyPress === 'down' && this.y < 5) {
            this.y += 1;
        }
    }

    // Checks to see if player collides with enemy bug
    checkCollisions() {
        const perimeter = 83;

        for (let enemy of allEnemies) {
            if (withinRange(enemy.x, this.x * 101 - perimeter, this.x * 101 + perimeter) &&
                withinRange(enemy.y, this.y, this.y)) {
                //code to help debug point of collision
                //this.win = true;
                //console.log(allEnemies.indexOf(enemy), enemy.x, enemy.y, `player ${this.x*101-perimeter}, ${this.y}`);
                this.resetPosition();
            }
        }
    }

    // Resets the player to starting position
    resetPosition() {
        this.x = 2;
        this.y = 5;
    }

    // Once the player reaches the water the game is won
    checkWin() {
        if (this.y === 0) {
            this.win = true;
            openModal();
        }
    }

    // Restarts the game
    restart() {
        this.win = false;
        this.resetPosition();
        window.init();
    }
}


// Checks if a number x is within the specified range
function withinRange(x, min, max) {
    return x >= min && x <= max;
}


// Instantiate objects to create player and enemies
const player = new Player1;
const enemy1 = new Enemy(0, 1, 2);
const enemy2 = new Enemy(0, 2, 3);
const enemy3 = new Enemy(0, 3, 1);

// Create an array and push all created enemies into the array
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);


// Listens for key presses and sends the key to Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Modal pops up when game is won
function openModal() {
    const modal = document.getElementById('win-modal');
    const content = document.querySelector('.text-content');

    const text = ("Congratulations!<br>You have safely arrived at the river.");
    content.innerHTML = text;

    modal.style.display = "block";
}

// Close game modal when "x" is clicked
document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById('win-modal');
    modal.style.display = "none";
});

// Restart game if user selects to Play Again in Modal
document.querySelector('.replay').addEventListener('click', function () {
    const modal = document.getElementById('win-modal');
    modal.style.display = "none";
    player.restart();
});
