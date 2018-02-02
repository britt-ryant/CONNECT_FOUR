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

let $rows = 6
let $columns = 6

let $fillInBoard = "X"


//For adding the click event

let $rowBasket = [];
	for(i = 0; i < $columns; i++) {
		$rowBasket[i] = $rows
	}





//Create the game board

function setUpGame() {
console.log(`building board`)
//Function that builds the board pieces by creating a div element in html id=playSpace and appends a table to the div

let $mainDiv = $('body').append('<div id="playSpace"></div>')
let $wholeTable = $(`<table></table>`).appendTo($mainDiv)

//The below for loop creates the rows "<tr>" and colums "<td>"

for (let i = 0; i < $rows; i++) {
	let $row = $(`<tr class="row-${i + 1}"></tr>`).appendTo($wholeTable)
	for(let j = 0; j < $columns; j++) {
		// let $eachSquare = $row.append(`<td class="col-${j}">row${i} col${j}</td>`)
		let $eachSquare = $row.append(`<td class="col-${j + 1}"> </td>`)
		}
	}
}

setUpGame()


//Create a click event for each column on the game board
function clickEvent(){
	for(let i = 0; i <= $columns; i++){
		$(`.col-${i}`).on("click", bottomsUp)
	}
}
clickEvent()

//This funciton is unused in the final game, just provided as a coordinate checker for the click function

function checker() {
	console.log(`I worked! You selected ${$(this).parent().attr("class")} ${$(this).attr("class")}`)
	//$(this).text($fillInBoard)
	//let $currentClass = $(this).attr("class")
}

//Create a function that fills the squares from the bottom up

//For each case selected (column) we want to add a game piece to the last row in the node list of rows.  Switch statement??

function bottomsUp() {
	let $currentColumn = $(this).attr("class")
	let $columnNumber = parseInt($currentColumn[4])
	console.log($columnNumber)
	
if($rowBasket[$columnNumber-1] >= 0) {
	if($(`.row-${$rowBasket[$columnNumber -1]} .${$currentColumn}`).text() === "X"){
		$rowBasket[$columnNumber -1] --
		$(`.row-${$rowBasket[$columnNumber -1]} .${$currentColumn}`).text("X")
	} else {
		$(`.row-${$rowBasket[$columnNumber -1]} .${$currentColumn}`).text("X");
	}

}
		//change the text of the blocks incrementally

		//$currentColumn.text("X")
}	


	//console.log($currentClass)
	// switch ($currentClass) {
	// 	case "col-1":
	// 	console.log(`I worked for ${$currentClass}`);
	// 	break;
	// 	case "col-1":
	// 	console.log(`I worked for ${$currentClass}`);
	// 	break;
	// 	case "col-1":
	// 	console.log(`I worked for ${$currentClass}`);
	// 	break;
	// }






//Create the "pieces" for each click event

//Create an event to add piece played from the computer

//Create a "check for win" function

//Create winning screen

//*** BONUS **** Create a new level && refracture the check for win with more than four matching tiles.
















