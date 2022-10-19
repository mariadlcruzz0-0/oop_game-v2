/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
           new Phrase('I got a tip for you'),
           new Phrase('Let me tell you something'),
           new Phrase('You look great today'),
           new Phrase('Beautiful smile'),
           new Phrase('Keep it up') 
        ];
        this.activePhrase = null;
    }
    /**
     * Starts the game
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Selects random phrase from the phrases array
     */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
    /**
     * Checks to see if the letters entered match the phrase
     */
    handleInteraction(button) {
        button.disabled = true;
        let matchedLetter = this.activePhrase.checkLetter(button.textContent);

        if (matchedLetter) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
                if (this.checkForWin()) {
                    this.gameOver(true);
                } 
        else {
                    button.classList.add('Try Again');
                    this.removeLife();
                }
        }
    }
    /**
     * Removes a heart if user guesses the wrong letter
     */
    removeLife() {
        const _heart = document.getElementsByClassName('tries');

        console.log(_heart[this.missed].innerHTML = '<img src="images/lostHeart.png>');
        
        console.log(this.missed += 1);

            if (this.missed === 5) {
                this.gameOver(false);
            }        
    }
    /**
     * Checks to see if letters entered match the hidden phases
     * @return {boolean} True if the players wins/false if player looses.
     */
    checkForWin() {
        //if(){}
    }
    /**
     * Ends the game
     */
    gameOver() {}
}