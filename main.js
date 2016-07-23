var prompt = require('prompt');
var game = require('./word.js')['words'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function startGame() {
	prompt.start()
	prompt.get(['userGuess'], function(err, result){
	if (game.guessLeft === 1) {
		console.log("You have no guesses left. Game Over");
		process.exit();
	}
	if (result.userGuess.length !== 1) {
		console.log("Please select a Letter");
		startGame();
	} else if (alphabet.indexOf(result.userGuess) < 0) {
		console.log("Please input a valid character");
		startGame();
	} else if ((game.correctArray.indexOf(result.userGuess) > -1) || (game.wrongArray.indexOf(result.userGuess) > -1)) {
		console.log("Letter Already Selected");
		startGame();
	} else {
		game.guessLetter(result.userGuess)
		console.log(game.blankWord.join(' '));
		startGame();
		if (game.blankWord.join('') === game.randomWord.join('')) {
			return console.log("You got the word, you Rock!");
			process.exit();
		}
	}
	})
};
startGame();