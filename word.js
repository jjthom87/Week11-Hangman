var blankWord = require('./letter.js')['blankWord']; 
var randomWord = require('./game.js')['randomWord'];
var splitWord = randomWord.split('');
var splitBlank = blankWord.split(' ');

function Word(){
	this.blankWord = splitBlank;
	this.randomWord = splitWord;
	this.correctArray = [];
	this.wrongArray = [];
	this.guessLeft = 6;
	this.guessLetter = function(guess){
		if (this.randomWord.indexOf(guess) > -1) {
			this.correctArray.push(guess);
		for (var i = 0; i < this.randomWord.length; i++) {
			if (this.randomWord[i] === guess) {
				this.blankWord[i] = guess;
				}
			}
		} else {
			this.wrongArray.push(guess);
			this.guessLeft--;
			console.log("Guesses Left: " + this.guessLeft);
		}
	}
}

var newUser = new Word();
module.exports['words'] = newUser;