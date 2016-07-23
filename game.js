function Randomword () {
 this.words = ["aerosmith", "whitesnake", "soundgarden", "nirvana", "donovan", "acdc", "metallica", "enya", "seger", "police", "foreigner", "genesis"]
 this.chosenWord = words[Math.floor(Math.random() * words.length)];

 return this.chosenWord
}

var randomWord = Randomword();

module.exports['randomWord'] = randomWord;