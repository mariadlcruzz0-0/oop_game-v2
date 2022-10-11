/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
           new Phrase('phrase 1'),
           new Phrase('phrase 2'),
           new Phrase('phrase 3'),
           new Phrase('phrase 4'),
           new Phrase('phrase 5') 
        ];
        this.activePhrase = null;
    }
    startGame() {
        this.activePhrase = this.getRandomPhrase();
    }
    getRandomPhrase() {
        this.phrases = Math.random();
    }
}