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
        this.resetGame();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Resets the game before it starts
     */
    resetGame() {
        //resets the li
       const phrase = document.getElementById('phrase');
       phrase.querySelector('ul').innerHTML = '';
        //resets the life counts
        this.missed = 0;
        //reset the classes on the keys
        const _qwerty = document.getElementById('qwerty');
        const btn = _qwerty.getElementsByTagName('button');

        for (let i = 0; i < btn.length; i++) {
            btn[i].disabled = false;
            btn[i].classList.remove('chosen', 'wrong');
        }
        //resets hearts
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i < tries.length; i++) {
            tries[i].src = 'images/liveHeart.png';
        }
        this.missed = 0;
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
                if (this.checkForWin()) {
                    this.gameOver(true);
                } 
        } else {
                    button.classList.add('wrong');
                    this.removeLife();
                }
    }
    /**
     * Removes a heart if user guesses the wrong letter
     */
    removeLife() {
        const _heart = document.getElementsByClassName('tries');
        if (this.missed < 5) {
            _heart[this.missed].innerHTML = '<img src="images/lostHeart.png"  alt="Heart Icon" height="35" width="30">';
            this.missed += 1;
        } else {
            this.gameOver(false);
        }   
    }
    /**
     * Checks to see if letters entered match the hidden phases
     * @return {boolean} True if the players wins/false if there are letters left.
     * */
    checkForWin() {
        const _hide = document.getElementsByClassName('hide');
        if(_hide.length === 0 ){
            return true;
        } else {
            return false;
        }
    }
    /**
     * Ends the game
     */
    gameOver(win) {
        document.getElementById('overlay').style.display = 'flex';

        if(win) {
            document.getElementById('overlay').className = 'win';
            document.getElementById('game-over-message').innerHTML = 'You Won!';
        } else {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('game-over-message').innerHTML = 'Try again!'
        }
    }
}