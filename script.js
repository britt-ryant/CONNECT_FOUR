//THIS IS THE JAVASCRIPT FILE FOR THE UNIT_01 PROJECT FOR WDI
// RYAN BRITT'S CONNECT YOUR SKILL (CONNECT FOUR)GAME
// PROJECT UNIT_01


// Pseudo code start

// setUpGame()

// start with building boxes for the board, total grid will be a 7 X 6 board

// initally we will represent players by X and O in a white box

// will add the larger sizes later

// addClickEvents()

// add event listener to the start button on the first page to start the game 

// once start os clicked, hide everyting on the homepage, trigger the CSS for the title and score on the game page and trigger the seUpGame()


// columnClick()

// add an event listener to each COLUMN so that the tile on the board from bottom to top will flip over to be either an X or an O;
// should be able to click anywhere in the column and just adds to the column from bottom to top

// checkForWin()

// once each box is flipped, trigger the checkForWin() which will check all adjacent tiles to see if there is a match.

// If match, the function should follow the "match" and count to see how many "matches" there are in a row.

let rows = 6
let columns = 7
let gameBoard = [];

function setUpGame() {

console.log(`building board`)

let $mainDiv = $('body').append('<div id="playSpace"></div>')
let $wholeTable = $(`<table></table>`).appendTo($mainDiv)
// let $mainTr = $(`<tr id="mainTr"></tr>`).appendTo($wholeTable)
// 	for (let i = 0; i < columns; i++) {
// 		let $column = $(`<td><table id="column${i}">test</table></td>`).appendTo($mainTr)
// 		for (let j=0; j < rows; j++) {
// 		 let $row = $(`<tr><td id="row${j}">${j}</td></tr>`)
// 		}
// 	}


for (let i = 0; i < rows; i++) {
	let $row = $(`<tr id=row${i} class="game-board-row"></tr>`).appendTo($wholeTable)
	for(let j = 0; j < columns; j++) {
		let $uniqueSquare = $row.append(`<td id="column${j}" class="game-board-square">${j}</td>`)
		}
	}
}
setUpGame()

// for each row, grab the nth item in the row and add it to a column



function clickFunction(){
for(let i=0; i < rows; i++){
	$(`#row${i}`).each(function(){
		$(this).on("click", function(){
			console.log(`I worked for every column`)
			
		})
	})
	}
}

clickFunction();

















