//script2.js is the secondary file for Ryan's Project Unit_01.  In this file I will attempt to go back through my code and restructure it, solving the connect four board with a different method, using an array to represent the DOM, solving the connect four logic and representing it by repainting it on the DOM.  I will also be using Vanilla JavaScript instead of using Jquery to exercise my ability in both forms of DOM manipulation.


//*************************  TEST FUNCTION  *********************************

function tapped(){
	console.log(`IM IN!!`)
}

//*************************  TEST FUNCTION  *********************************

//First we want to create the board using a 6 X 6 matrix.

class Board {
	constructor(connect, size, status){
		this.connect = connect;
		this.size = size;
		this.status = status;
	}
};

//creating the simple board from the constructor function of the board class
let turn = 2;
let arr = []
let rowFill = []

const boardOne = new Board(4, 6);

let currentBoard = boardOne;
//console.log(boardOne)

//manipulate the DOM to create the main container div that will wrap around the table.

function initiateStartScreen(){
	let title = document.createElement(`h1`)
	let body = document.querySelector(`body`)
	title.classList.add(`title`)
	body.appendChild(title)
	title.innerHTML = "Connect 4"
	let clickInstructions = document.createElement(`div`)
	clickInstructions.classList.add(`clickInstructions`)
	title.appendChild(clickInstructions)
	clickInstructions.innerHTML = "click the title to begin"
	title.addEventListener("click", clickInitiateFunction)
	let inputOne = document.createElement('input')
	inputOne.classList.add("input")
	body.appendChild(inputOne)
	let versus = document.createElement('div')
	versus.classList.add('input')
	versus.innerHTML = "vs."
	body.appendChild(versus)
	let inputTwo = document.createElement('input')
	inputTwo.classList.add("input")
	body.appendChild(inputTwo)
	
}

initiateStartScreen()

function clickInitiateFunction(){
	//console.log(currentBoard)
	document.querySelector(`.clickInstructions`).remove()
	let inputs = document.querySelectorAll(`.input`)
	inputs[0].classList.add("input_game_page")
	inputs[2].classList.add("input_game_page")
	console.log(inputs)
	createArr(currentBoard)
	//create the rowfill array
		for(let i = 0; i < arr.length; i++){
		rowFill[i] = arr.length - 1
	}
}
//The function below creates an array that will act as the game, actions preformed "behind the scenes"


function createArr(obj) {
	for(let i = 0; i < obj.size; i++) {
		arr[i] = [] 
		for(let j = 0; j < obj.size; j++) {
			arr[i][j] = 0;
		}
	}
createBoard(arr)
}


//createArr(currentBoard)
//console.log(arr)

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

//console.log(arr)


//function to maipulate the DOM to represent the array of arrays

function createBoard(arr){
	const body = document.querySelector('body');
	const container = document.createElement('div');
	container.classList.add("container")
	body.appendChild(container)
	let gameBoard = document.createElement('table');
	gameBoard.classList.add("game-board");
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
	//let rowClicked = this.parentElement.getAttribute(`class`)[5]
	
	for (let i = 0; i < arr.length; i ++) {
		for (let j = 0; j < arr[i].length; j ++){
			arr[rowFill[columnClicked]][columnClicked] = turn;
		}
	}
	
	//Check to see if the column has been filled 

	if(rowFill[columnClicked] >= 1){

		rowFill[columnClicked] --
	}
	console.log(arr)
	//console.log(rowClicked)
	//console.log(rowFill)

	repaintBoard()
	checkWin()
}

//Now that the array has been modified, repaint the board to update the spaces taken up

function repaintBoard() {
let table = document.querySelector('table')
	for (let i = 0; i < arr.length; i ++){
		for (let j = 0; j < arr.length; j++){
			if (arr[i][j] === 1){
				let cell = document.getElementById(`row-${i} col-${j}`)
				cell.innerHTML = "X"
				//console.log(cell)
			} else if(arr[i][j] === 2){
				let cell = document.getElementById(`row-${i} col-${j}`)
				cell.innerHTML = "O"
			}
		}
	}
}



function checkWin() {
	//Check for win 
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j ++){
			
			//Test for win down

			if(i <= 2){	
				if(arr[i][j] === arr[i + 1][j] && arr[i + 1][j] === arr[i + 2][j] && arr[i + 2][j] === arr[i + 3][j] && arr[i][j] !== 0){
					

					console.log(`---->WINNER<----`)
					winningScreen()
			
			//Test for a win diagonally in both directions				

				} else if(arr[i][j] === arr[i + 1][j-1] && arr[i + 1][j-1] === arr[i + 2][j-2] && arr[i + 2][j-2] === arr[i + 3][j-3] && arr[i][j] !== 0){
					

					console.log(`---->WINNER<----`)
					winningScreen()
				

				} else if(arr[i][j] === arr[i + 1][j+1] && arr[i + 1][j+1] === arr[i + 2][j+2] && arr[i + 2][j+2] === arr[i + 3][j+3] && arr[i][j] !== 0){

					console.log(`---->WINNER<----`)
					winningScreen()
				}
			
			//Test right and left for Win

			} else if(j >= 3){
				if(arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j] !== 0){
					
					console.log(`--->WINNER!<---`)
					winningScreen()
				}	
			}
		}
	}
}


function winningScreen() {

	//alert(`PLACE MODAL BOX HERE`)
	let inputs = document.querySelectorAll('.input')
	for(let i = 0; i < 3; i++){
		inputs[i].remove()
	}
	document.querySelector(`table`).remove()
	window.setTimeout(writeWinner, 500)
	window.setTimeout(writeWinner, 1000)
	window.setTimeout(writeWinner, 1500)
	window.setTimeout(resetGame, 3000)

}


function writeWinner () {
	let winScreen = document.createElement('h1')
	winScreen.innerHTML = "WINNER!!"
	winScreen.classList.add(`winner`)
	let body = document.querySelector(`body`)
	body.appendChild(winScreen)

}

function resetGame(){
	location.reload();
}



