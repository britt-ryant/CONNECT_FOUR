//script2.js is the secondary file for Ryan's Project Unit_01.  In this file I will attempt to go back through my code and restructure it, solving the connect four board with a different method, using an array to represent the DOM, solving the connect four logic and representing it by repainting it on the DOM.  I will also be using Vanilla JavaScript instead of using Jquery to exercise my ability in both forms of DOM manipulation.

//First we want to create the board using a 6 X 6 matrix.

class Board {
	constructor(connect, size, status){
		this.connect = connect;
		this.size = size;
		this.status = status;
	}
};

//creating the simple board from the constructor function of the board class

const boardOne = new Board(4, 6);

let currentBoard = boardOne;
//console.log(boardOne)

//manipulate the DOM to create the main container div that will wrap around the table.

const body = document.querySelector('body');

const container = document.createElement('div');

container.classList.add("container")

body.appendChild(container)

let turn = 2;



//The function below creates an array that will act as the game, actions preformed "behind the scenes"

let arr = []

function createArr(obj) {
	for(let i = 0; i < obj.size; i++) {
		arr[i] = [] 
		for(let j = 0; j < obj.size; j++) {
			arr[i][j] = 0;
		}
	}
createBoard(arr)
}


createArr(currentBoard)
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

let rowFill = []
	for(let i = 0; i < arr.length; i++){
		rowFill[i] = arr.length - 1
	}

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
let table = container.querySelector('table')
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
	alert(`Winner`)
}



