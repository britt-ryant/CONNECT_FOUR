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

//*******************************  GLOBAL VARIABLES  *****************************

let $connectWhat = 0;
let $rows = 0;
let $columns = 0;
let $rowBasket = [];

//*******************************  GLOBAL VARIABLES  *****************************

function landingScreen(){
	let $title = $(`body`).append(`<header id='title' class='start_screen in_game'><h1>X Connect O</h1></header>`)
	$($title).toggleClass(`start_screen`)
	let $descritpion = $(`#title`).append(`<h2 id=description>Click the name of the game to play!</h2>`)
	$(`#title`).on("click", eventListenerTitle)
	$(`body`).append(`<div id="board_size_question">How many would you like to connect?</div>`)
	$(`body`).append(`<input class="what_to_connect" id="board_size" type='text'>`)
	$(`body`).append(`<div id="player_title">Player Names</div>`)
	$('body').append(`<div class='player' id='player'></div>`)
	$('.player').append(`<input class="newPlayer" type="text" name='Player One' value=''/><div>vs.</div><input class="newPlayer" type="text" name='Player Two' value=''/>`)
}
landingScreen()


function eventListenerTitle(){
	console.log($(`#board_size`).val())
	if(parseInt($(`#board_size`).val()) > 2 && parseInt($(`#board_size`).val()) <= 8) {	
		$connectWhat = parseInt($(`#board_size`).val())
		$rows = $connectWhat + 1;
		$columns = $connectWhat + 1;
		for(i = 0; i <= $columns; i++) {
			$rowBasket[i] = $rows
		}

		console.log($connectWhat)
		setUpGame()
		$(`#title`).off('click', eventListenerTitle)
		$(`#description`).remove()
		$(`#board_size`).remove()
		$(`#board_size_question`).remove()
		$(`#player_title`).remove()
		$(`#title`).toggleClass(`in_game`)
	} else {
		$(`#board_size`).removeClass()
		$(`#board_size`).addClass(`what_to_connect_red`)
		setTimeout(reloadHomePage, 500)
	}
}


//*******************************  GLOBAL VARIABLES  *****************************

let $fillInBoard = "X"
let $turn = "X"
let $checkCounter = 0

//*******************************  GLOBAL VARIABLES  *****************************


//For adding the click event

//Create the game board

function setUpGame() {
console.log(`building board`)
console.log($rowBasket)


//Function that builds the board pieces by creating a div element in html id=playSpace and appends a table to the div

let $mainDiv = $('body').append('<div id="playSpace"></div>')
let $wholeTable = $(`<table></table>`).appendTo($mainDiv)
$($(`#player`)).appendTo(`body`)
$($(`.newPlayer`)).toggleClass(`newPlayer`)


//The below for loop creates the rows "<tr>" and colums "<td>"

for (let i = 0; i < $rows; i++) {
	let $row = $(`<tr class="row-${i + 1}"></tr>`).appendTo($wholeTable)
	for(let j = 0; j < $columns; j++) {
		let $eachSquare = $row.append(`<td class="col-${j + 1}"> </td>`)
		}
	}
clickEvent()
}



//Create a click event for each column on the game board

function clickEvent(){
	for(let i = 0; i <= $columns; i++){
		$(`.col-${i}`).on("click", bottomsUp)
	}
}

//This funciton is unused in the final game, just provided as a coordinate checker for the click function

function checker() {
	console.log(`I worked! You selected ${$(this).parent().attr("class")} ${$(this).attr("class")}`)
	//$(this).text($fillInBoard)
	//let $currentClass = $(this).attr("class")
}

//Create a function that fills the squares from the bottom up

//For each case selected (column) we want to add a game piece to the last row in the node list of rows.  Switch statement?? ----> NO YOU IDIOT, check this out....

//Create the "pieces" for each click event

//*** BONUS *** Create an event to add piece played from the computer


function bottomsUp() {
	let $currentColumn = $(this).attr("class")
	let $columnNumber = parseInt($currentColumn[4])
	$turn = ($turn === "X") ? "O" : "X"
	//$currentCoordinate = [$rowBasket[$columnNumber - 1] , $columnNumber - 1]
	let $xCoord = ($columnNumber);
	let $yCoord = ($rowBasket[$columnNumber - 1])
	//let $yCoordUp = ($rowBasket[$columnNumber] + 1)

	console.log($xCoord, $yCoord)
	console.log($xCoord-1)
	//console.log($columnNumber)

	if($rowBasket[$xCoord] >= 0 && $rowBasket[$xCoord] <= $columns) {

		$(`.row-${$yCoord} .col-${$xCoord}`).text($turn);
			
			checkDown($yCoord)
			checkLeft($xCoord)
			checkRight($xCoord)
			bothSidesR($xCoord)
			bothSidesL($xCoord)
			diagLeft($yCoord, $xCoord)
			diagRight($yCoord, $xCoord)
			diagLeftMiddleDown($yCoord, $xCoord)
			diagLeftMiddleUp($yCoord, $xCoord)
			diagRightMiddleDown($yCoord, $xCoord)
			diagRightMiddleUp($yCoord, $xCoord)

			
			function checkDown(a) {

				if($turn === $(`.row-${a + 1} .col-${$xCoord}`).text()){

					checkDown(a+1)

					$checkCounter ++

						if ($checkCounter === $connectWhat - 1){
							winningScreen()
						}

				} else {

					$checkCounter = 0
				}	
			}

			function checkLeft(b) {

				if($turn === $(`.row-${$yCoord} .col-${b - 1}`).text()){

					checkLeft(b-1)

					$checkCounter ++

						if ($checkCounter === $connectWhat - 1){
							winningScreen()
						}

				} else {

					$checkCounter = 0
				}
			}

			function checkRight(c) {

				if($turn === $(`.row-${$yCoord} .col-${c + 1}`).text()){

					checkRight(c+1)

					$checkCounter ++

						if ($checkCounter === $connectWhat - 1){
							winningScreen()
						}

				} else {

					$checkCounter = 0
				}
			}	

			function bothSidesL(d) {
				if($turn === $(`.row-${$yCoord} .col-${d + 1}`).text() && $turn === $(`.row-${$yCoord} .col-${d - 1}`).text()){

					bothSidesL(d - 1)
					//bothSides(d - 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {
						winningScreen()
					}
				} else {
					$checkCounter = 0
				}

			}
			function bothSidesR(e) {
				if($turn === $(`.row-${$yCoord} .col-${e + 1}`).text() && $turn === $(`.row-${$yCoord} .col-${e - 1}`).text()){

					bothSidesR(e + 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {
						winningScreen()
					}
				} else {
					$checkCounter = 0
				}
			}
			function diagLeft(f,g){
				if($turn === $(`.row-${f + 1} .col-${g - 1}`).text()){

					diagLeft(f + 1, g - 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 1) {
						winningScreen()
					}
				} else {
					$checkCounter = 0
				}
			}
			function diagRight(h,i){
				if($turn === $(`.row-${h + 1} .col-${i + 1}`).text()){

					diagRight(h + 1, i + 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 1) {
						winningScreen()
					}
				} else {
					$checkCounter = 0
				}
			}
			function diagLeftMiddleDown(j,k){
				if($turn === $(`.row-${j + 1} .col-${k - 1}`).text() && $turn === $(`.row-${j - 1} .col-${k + 1}`).text()){

					diagLeftMiddleDown(j + 1, k - 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {

						winningScreen() 
					}
				} else {
					
					$checkCounter = 0
				}
			}
			function diagLeftMiddleUp(l,m){
				if($turn === $(`.row-${l + 1} .col-${m - 1}`).text() && $turn === $(`.row-${l - 1} .col-${m + 1}`).text()){

					diagLeftMiddleUp(l - 1, m + 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {

						winningScreen() 
					}
				} else {
					
					$checkCounter = 0
				}
			}
			function diagRightMiddleDown(o,p){
				if($turn === $(`.row-${o - 1} .col-${p - 1}`).text() && $turn === $(`.row-${o + 1} .col-${p + 1}`).text()){

					diagRightMiddleDown(o + 1, p + 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {

						winningScreen() 
					}
				} else {
					
					$checkCounter = 0
				}
			}
			function diagRightMiddleUp(q,r){
				if($turn === $(`.row-${q + 1} .col-${r + 1}`).text() && $turn === $(`.row-${q - 1} .col-${r - 1}`).text()){

					diagRightMiddleUp(q - 1, r - 1)

					$checkCounter++

					if($checkCounter === $connectWhat - 2) {

						winningScreen() 
					}
				} else {
					
					$checkCounter = 0
				}
			}

					
			
			console.log(`------>`,$checkCounter)

			$rowBasket[$columnNumber - 1] --

			console.log($xCoord, $yCoord)
		
		}
	}		


//Create winning screen

function winningScreen(){
	//alert(`WINNER`)
	$(`table`).remove()
	$(`.player`).remove()
	$(`#playSpace`).append(`<h2 class='winning_screen'>WINNER!</h2`)
	setTimeout(reloadHomePage, 2000)
}

//reload the homepage

function reloadHomePage(){
	location.reload();
}













