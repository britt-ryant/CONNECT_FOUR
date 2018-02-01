*** Ryan Britt/ 02/01/2018 ***  
# Connect Your Skill Proposal  
## What is Connect Your Skill?  
Connect four, with a twist.  I would like to create a connect four game using Javascript.
This game will start out as standard connect four and ideally as you win, the size of the game expands(connect five, connect 6, connect 7, connect 8...)

## Wireframe  (Your wireframes go here. Preferably two or more) 

*** see images folder ***

## Initial thoughts on game structure 

Game will start with the a createBoard(), standard 7 X 6 space board. 

Save a pice as an object and reuse object by either yellow or red piece.

User can click anywhere in column and piece will be 'gravity fed' and build up from there

use of recursive funciton to do the checkMatch().


## Phases of Completion  

Step one: draw standard board and add pieces.
	-create a board using dynamic css and javascript
	-use pieces as objects

step two: write check win function
	-use recursive function to preform a win check
	-create this function independant of the size of the board.

step three: expand size of the board
	-create a 'you won' scenario that returns a new game with a larger board if the user won, return to standard size board  

step four: high score screen
	return a screen of score of how large the game board was provided a username and password.


## Links and Resources  (Anything you've looked up so far or are thinking about using.)
-MDN for higher order functions and specifically recursive funcitons
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

-classwork and homeworks

-work from codeacademy and kahn academy

-John, John, and John