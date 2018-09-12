# ARCADE GAME FOR FRONT-END NANODEGREE
===============================

This is a simple browser-based version of the classic arcade game 'Frogger'.


## TABLE OF CONTENTS
* [Set Up and Running the Game](#set-up-and-running-the-game)
* [How to Play](#how-to-play)
* [Resources](#resources)


## SET UP AND RUNNING THE GAME

The files can be downloaded at https://github.com/aileneh2020/ArcadeGame.git. Once downloaded or cloned to your local machine, open the files in your code editor. Copy the link for the index.html file and load it onto your browser.

This arcade game is created utilizing HTML, CSS and JavaScript (ES6). As of August 2017, the following browsers support ES6: Chrome, Firefox, Edge, Safari and Opera. If there are any issues while utilizing other browsers, including Internet Explorer, you may utilize a compiler, such as Babel (https://babeljs.io/), to get ES6 to work with your browser.

The HTML file is very minimal as it only contains links to the CSS and JS files, along with some code for the modal. The CSS file is mostly styling for the modal. The resources.js file is simply an image loading utility and engine.js provides game loop functionality. The app.js file contains the game characters that are created utilizing ES6 classes and character movement. There is also an images folder containing all the images used for the gameboard and characters.

Game is hosted online at https://aileneh2020.github.io/ArcadeGame/.


## HOW TO PLAY

Objective: To get your player safely across the pavement to the water while avoiding collision with the enemy bugs.

Movement: The player moves one block at a time. Movement is controlled by the user via the up, down, left and right arrows.

Collision: When the player collides with an enemy bug (both player and any enemy bug occupy the same block), the player is sent back to the start position.

Winning: When the player successfully reaches the water, the game is won and all characters on the game board stop moving. User is given the option to Replay which will reset and restart the game board.


## RESOURCES

This game project was created by Udacity as part of the Front-End Nanodegree program. Starter code can be forked/cloned from https://github.com/udacity/frontend-nanodegree-arcade-game.
