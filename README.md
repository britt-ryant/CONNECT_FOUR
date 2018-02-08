*** Ryan Britt/ 02/01/2018 ***  

*** CONNECT ***

ABOUT: 

This game is a variation of the classic connect four.  The difference is that you can decide the size of your board/how many tiles in a row that you want to match.  There are three branches in the GitHub, two that are my personal spin on the game, and one (vanilla) that is a standard game of connect four.

LANGUAGE:

Two versions of this game utilize Vanilla JavaScript (Vanilla and Vanilla_Recursive) to create an array behind the scenes and use the array to check for matches.  Each time a player clicks a div in the DOM, the array gets updated.  Then, a function is called to "re-paint" the DOM to represent the behind the scenes array.  

The other version of this game (master branch) uses JQuery to create the board, modify the board ("X" and "O") and then "read" the text in the DOM and check for matches.  This version uses a recirsive finction as well so the board size does not have to be a constant.

STAGES:

Every branch begins with a landing page, two require a gameboard size input, and player names.  Once inputs are in the board loads.  When there is a winner, the winning screen is displayed and the page reloads.