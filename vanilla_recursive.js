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


let currentXpos = 0;
let currentYpos = 0;



function modifyArray(){
	let columnClicked = this.getAttribute(`class`)[5];
	//Ternary argument to test who's turn it is.
	turn = (turn === 1) ? 2 : 1;
	//let rowClicked = this.parentElement.getAttribute(`class`)[5]
	
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
	console.log(arr)
	repaintBoard()
	//johnWinFunction(currentXpos, currentYpos)
	checkDown(currentXpos, currentYpos)	
	checkSideways(currentXpos, currentYpos)
	checkDiagLeft(currentXpos, currentYpos)
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


//*************************  TEST FUNCTION  *********************************


function tapped () {
	console.log(`IM IN!`)
	console.log(currentXpos, currentYpos)
}

//*************************  TEST FUNCTION  *********************************


winArr = [0,0,0]


// function johnWinFunction(currentXpos,currentYpos){
// 	//console.log(currentXpos, currentYpos)
// 	if(currentYpos + 1 < arr.length){
// 		checkDown(currentXpos, currentYpos)
// 	} else {
// 		checkSideways(currentXpos, currentYpos)
// 	}
// }

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
			console.log(currentXpos, currentYpos)
			//tapped()
			if(arr[currentYpos][currentXpos]=== arr[currentYpos + 1][currentXpos - 1]){
				//tapped()
				winArr[2] ++
				console.log(winArr)
				winningScreen()
				return checkDiag(currentXpos - 1, currentYpos + 1)
			}
			
		}
		
	}
	
	winArr[2] = 0;
}

console.log(winArr)


//*************************  TEST FUNCTION  *********************************

function horizontalCheck(){
	winArr[1]++
	console.log(winArr)
}

//*************************  TEST FUNCTION  *********************************



function winningScreen(){
if(winArr.includes(boardOne.connect - 1)){
			alert(`WINNER`)
		}
}





