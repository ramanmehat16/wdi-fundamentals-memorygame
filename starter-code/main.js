console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
/*
if (cardThree == cardFour) {
	alert("you found a match");
}
else {
	alert("Sorry, try again");
}
if (cardOne == cardTwo) {
	alert ("You found a match");
}
else {
	alert ("Sorry, try again");
}
if (cardOne == cardThree) {
	alert ("You found a match");
}
else {
	alert ("Sorry, try again")
}
*/

var createBoard = function () {
	var gameBoard = document.getElementById("game-board");
	for (var i=0; i < 4; i++) {
		var cardDiv = document.createElement("div");
		cardDiv.className = "card";
		gameBoard.appendChild (cardDiv);
	}
}
createBoard ()