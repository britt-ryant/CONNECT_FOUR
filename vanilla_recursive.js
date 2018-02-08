//This code Vanilla_Recursive is a variation of the file in the branch vanilla, however, this js file utilizes a recursive function as the win check for the board, allowing the user to input the desired size of the board.

//***********************  GLOBAL VARIABLES  ********************************

//First we want to create the board using a 6 X 6 matrix.
class Board {
	constructor(connect, size, status){
		this.connect = connect;
		this.size = size;
		this.status = status;
	}
};

//creating the simple board from the constructor function of the board class


//***********************  TEST BOARDS FOR WRITING CODE *************************

const boardOne = new Board(4, 6);
const boardTwo = new Board(8, 10);

//***********************  TEST BOARDS FOR WRITING CODE *************************

let turn = 2;

let arr = []
let rowFill = []

let currentXpos = 0;
let currentYpos = 0;

let currentBoardForReset = {};

//***********************  GLOBAL VARIABLES  ********************************


//Want to create a function that launches the START screen as soon as the page loads

function startScreen(){
	
	//Create a new HEADER tag for the title and add class
	let mainTitle = document.createElement('header');
	mainTitle.classList.add('title');
	mainTitle.innerHTML = "CONNECT"
	
	//grab the body and append the child HEADER to the BODY tag
	let body = document.querySelector('body');
	body.appendChild(mainTitle)
	mainTitle.addEventListener("click", gameStart)

	//Create and append click instructions
	let clickInstructions = document.createElement('h2')
	clickInstructions.classList.add("how_to_enter")
	clickInstructions.innerHTML = `click the title to start the game`
	body.appendChild(clickInstructions)

	let cartoon = document.createElement(`img`)
	cartoon.classList.add(`cartoon`)
	cartoon.src = `http://gabrielutasi.com/comic/copyright/gabrielutasi/2008/10/101308speed_connect_four.gif`
	body.appendChild(cartoon)

	//create an input for the size of the board and a div above it that explains what to input

	let inputInstructions = document.createElement(`h3`)
	inputInstructions.classList.add(`instructions`)
	inputInstructions.innerHTML = "How experienced are you? Input the number of tiles you want to connect. Please choose a number 2 - 8."
	body.appendChild(inputInstructions)
	let gameSizeSubmit = document.createElement('input')
	gameSizeSubmit.classList.add("input")
	body.appendChild(gameSizeSubmit)


}

startScreen()

function gameStart(){

	//create a new Object to set up the game

	let gameSizeSubmitVal = document.querySelector(`.input`).value
	let gameSize = parseInt(gameSizeSubmitVal)
	if(gameSize >= 2 && gameSize <= 8 ){
		let currentBoard = new Board(gameSize, gameSize + 2)
		console.log(currentBoard)

		//Log the size of the current board for the reset board function
		
		currentBoardForReset = currentBoard

		//First remove all of the formatting from the home screen except the title Div

		let inGameTitle = document.querySelector(`.title`)
		inGameTitle.classList.add(`in_game`)
		let clickInstructions = document.querySelector(`.how_to_enter`)
		clickInstructions.remove()
		let inputInstructions = document.querySelector(`.instructions`)
		inputInstructions.remove()
		let gameSizeSubmit = document.querySelector(`.input`)
		gameSizeSubmit.remove()
		let cartoon = document.querySelector(`img`)
		cartoon.remove()
		
		//manipulate the DOM to create the main container div that will wrap around the table.

		let body = document.querySelector('body');
		let container = document.createElement('div');
		container.classList.add("container")
		body.appendChild(container)

		//Call the function to create the board on the DOM and the array behind the scenes

		//let currentBoard = boardOne;
		createArr(currentBoard);	

	} else {

		//create a new div that tells the user that they need to input a proper value

		let gameSizeSubmit = document.querySelector(`.input`)
		gameSizeSubmit.classList.add(`wrong_value`)
		let incorrectValue = document.createElement(`div`)
		incorrectValue.classList.add(`warning`)
		incorrectValue.innerHTML = `Please choose a number BETWEEN 2 AND 8!`
		document.querySelector(`body`).appendChild(incorrectValue);
		window.setTimeout(reload, 1000);
	}
}

//*************************  TEST FUNCTION  *********************************

function domTest(){
	let gameSizeSubmitVal = document.querySelector(`.input`).value
	console.log(gameSizeSubmitVal)
}

//*************************  TEST FUNCTION  *********************************


//The function below creates an array that will act as the game, actions preformed "behind the scenes"



function createArr(obj) {
	for(let i = 0; i < obj.size; i++) {
		arr[i] = [] 
		for(let j = 0; j < obj.size; j++) {
			arr[i][j] = 0;
		}
	}
	createBoard(arr)
	for(let i = 0; i < arr.length; i++){
		rowFill[i] = arr.length - 1
	}
}



//*************************  TEST FUNCTION  *********************************


function testBoardAccess(){
	for (let i = 0; i < arr.length; i ++) {
		for (let j = 0; j < arr[i].length; j ++){
			arr[1][1] = 1;
		}
	}
}

//testBoardAccess()

//*************************  TEST FUNCTION  *********************************


//function to maipulate the DOM to represent the array of arrays

function createBoard(arr){
	let gameBoard = document.createElement('table');
	gameBoard.classList.add("game-board");
	let container = document.querySelector(`.container`)
	container.appendChild(gameBoard);
	for(let i = 0; i < arr.length; i ++) {
		let row = document.createElement('tr');
		row.classList.add(`row-`,i);
		gameBoard.appendChild(row);
		for(j = 0; j < arr.length; j++){
			let cell = document.createElement('td');
			cell.classList.add(`col-`, j)
			cell.id = `row-${i} col-${j}`
			row.appendChild(cell)
			cell.addEventListener('click', modifyArray)
		}
	}
	let resetButton = document.createElement(`div`)
	resetButton.classList.add(`reset`)
	resetButton.innerHTML = `Reset`
	let body = document.querySelector(`body`)
	body.appendChild(resetButton)
	resetButton.addEventListener(`click`, resetBoard)

}



//*************************  TEST FUNCTION  *********************************


function clickTestFunction() {
		console.log(`I worked!! ${this.getAttribute('class')[5]}`)
}


//*************************  TEST FUNCTION  *********************************


function modifyArray(){
	let columnClicked = this.getAttribute(`class`)[5];

	//Ternary argument to test who's turn it is.
	turn = (turn === 1) ? 2 : 1;
	
	for (let i = 0; i < arr.length; i ++) {
		for (let j = 0; j < arr[i].length; j ++){
			arr[rowFill[columnClicked]][columnClicked] = turn;
			currentXpos = columnClicked
			currentYpos = rowFill[columnClicked]
		}
	}
	
	//Check to see if the column has been filled 

	if(rowFill[columnClicked] >= 1){

		rowFill[columnClicked] --
	}

	//Call all of the test functions when each piece is placed, based on the current X and Y postion of the number modified in the array.  Within each test function, there is a call for the check win function that will determine if the "winArr" contains any values that are the winning value.  

	repaintBoard()
	checkDown(currentXpos, currentYpos)	
	checkSideways(currentXpos, currentYpos)
	checkDiagLeft(currentXpos, currentYpos)
	checkDiagRight(currentXpos, currentYpos)
	checkDiagMidRight(currentXpos, currentYpos)
	checkDiagMidLeft(currentXpos, currentYpos)
}



//Now that the array has been modified, repaint the board to update the spaces taken up

function repaintBoard() {
	let container = document.querySelector(`.container`)
	let table = container.querySelector('table')
		for (let i = 0; i < arr.length; i ++){
			for (let j = 0; j < arr.length; j++){
				if (arr[i][j] === 1){
					let cell = document.getElementById(`row-${i} col-${j}`)
					cell.classList.add(`x_piece`)
					cell.innerHTML = "X"
					//console.log(cell)
				} else if(arr[i][j] === 2){
					let cell = document.getElementById(`row-${i} col-${j}`)
					cell.classList.add(`o_piece`)
					cell.innerHTML = "O"
				}
			}
		}
}


//*************************  TEST FUNCTION  *********************************


function tapped () {
	console.log(`IM IN!`)
	//console.log(currentXpos, currentYpos)
}

//*************************  TEST FUNCTION  *********************************


winArr = [0,0,0,0]


function checkDown(currentXpos,currentYpos){
	//console.log(`Im working`)
	if(currentYpos + 1 < arr.length){
		if(arr[currentYpos][currentXpos] === arr[currentYpos + 1][currentXpos]){
			winArr[0]++
			winningScreen()
			checkDown(currentXpos, currentYpos + 1)
			winArr[0] = 0
		}
		//console.log(winArr)
	}
}

function checkSideways(currentXpos, currentYpos) {
	//console.log(currentXpos)
	 	let n = arr.length -1
	 	while (n >= 0) {
			if(arr[currentYpos][n] === arr[currentYpos][n - 1] && arr[currentYpos][n] !== 0){
				//tapped()
				winArr[1]++
				winningScreen()
			}
			n --
		}
		//console.log(winArr)
		//horizontalCheck()
		winArr[1] = 0
}

function checkDiagLeft(currentXpos, currentYpos) {
	//console.log(currentXpos, currentYpos)
	//tapped();
	if(currentYpos + 1 < arr.length){
		if(currentXpos - 1 >= 0){
			//console.log(currentXpos, currentYpos)
			//tapped()
			if(arr[currentYpos][currentXpos]=== arr[currentYpos + 1][currentXpos - 1]){
				//tapped()
				winArr[2] ++
				console.log(winArr)
				winningScreen()
				return checkDiagLeft(currentXpos - 1, currentYpos + 1)
			}
			
		}
		
	}
	
	winArr[2] = 0;
}


function checkDiagRight(currentXpos, currentYpos) {
	//console.log(currentXpos, currentYpos)
	//tapped();
	let newXpos = parseInt(currentXpos);
	if(currentYpos + 1 < arr.length){
		//console.log(currentXpos)
		if(newXpos + 1 < arr.length){
			if(arr[currentYpos][newXpos] === arr[currentYpos + 1][newXpos + 1]){
				//tapped()
				//console.log(currentXpos, currentYpos)
				winArr[3] ++
				console.log(winArr)
				winningScreen()
				return checkDiagRight(newXpos + 1, currentYpos + 1)
			}
			
		}
		
	}
	
	winArr[3] = 0;
}

console.log(winArr)

function checkDiagMidLeft(currentXpos, currentYpos) {
	//console.log(currentXpos, currentYpos)
	//tapped();
	let newXpos = parseInt(currentXpos);
	if(currentYpos + 1 < arr.length){
		if(newXpos - 1 >= 0){
			//console.log(currentXpos, currentYpos)
			//tapped()
			if(arr[currentYpos][newXpos]=== arr[currentYpos + 1][newXpos - 1] && arr[currentYpos][newXpos]=== arr[currentYpos - 1][newXpos + 1]){
				//tapped()
				winArr[2] ++
				checkDiagMidLeft(newXpos + 1, currentYpos - 1)
				checkDiagLeft(currentXpos, currentYpos);

			}
			
		}
		
	}
	
}


function checkDiagMidRight(currentXpos, currentYpos) {
	//console.log(currentXpos, currentYpos)
	//tapped();
	let newXpos = parseInt(currentXpos);
	if(currentYpos + 1 < arr.length){
		//console.log(currentXpos)
		if(newXpos + 1 < arr.length){
			if(arr[currentYpos][newXpos] === arr[currentYpos + 1][newXpos + 1] && arr[currentYpos][newXpos] === arr[currentYpos - 1][newXpos - 1]){
				winArr[3] ++
				checkDiagMidRight(newXpos - 1, currentYpos - 1)
				checkDiagRight(currentXpos, currentYpos)
			}
			
		}
		
	}
}

console.log(winArr)


//*************************  TEST FUNCTION  *********************************

function horizontalCheck(){
	winArr[1]++
	console.log(winArr)
}

//*************************  TEST FUNCTION  *********************************


//win check function.  If any of the numbers in the win array are the value of the inputted match requirement, the game will terminate, the board will be outlined in red, removed and the words WINNER will be displayed.  Finally, the game will reload to the landing page.

function winningScreen(){
if(winArr.includes(arr.length - 3)){
			//alert(`WINNER`)
			let board = document.querySelector(`table`)
			board.classList.add(`winner_board`)
			setTimeout(removeBoard, 1000)
			setTimeout(printWinner, 1500)
			setTimeout(printWinner, 3000)
			//setTimeout(printWinner, 4500)
			setTimeout(reload, 6000)
		}
}

//Function to remove the board from the page to allow for WINNER to be printed

function removeBoard(){
	let board = document.querySelector(`table`)
	board.remove()
	let resetButton = document.querySelector(`.reset`)
	resetButton.remove()
}

//Function to create the divs that say WINNER

function printWinner(){
	let winner = document.createElement('div')
	winner.classList.add(`print_winner`)
	winner.innerHTML = `WINNER !!!`
	let body = document.querySelector(`body`)
	body.appendChild(winner)

}

//Function to repaint a blank board if the reset button is clicked

function resetBoard(){
	let table = document.querySelector(`table`)
	let resetButton = document.querySelector(`.reset`)
	table.remove()
	resetButton.remove()
	createArr(currentBoardForReset)

}

//Reload function for when the page needs to be reloaded

function reload() {
	location.reload()
}





