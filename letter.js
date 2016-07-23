var chooseWord = require('./game.js')['randomWord'];

function Blankword(word){
	this.splitWord = word.split('');
	// var replaceWord = chooseWord.replace(chooseWord, "_")
	for (var i=0; i < this.splitWord.length; i++) {
		this.splitWord[i] = this.splitWord[i].replace(word[i], "_")
	}
	return this.splitWord.join(' ');
}
var makeWord = Blankword(chooseWord);

module.exports['blankWord'] = makeWord;