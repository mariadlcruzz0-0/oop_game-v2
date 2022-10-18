/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    //Displays letters on the screen
    addPhraseToDisplay(){
        const _phrase = document.getElementById('phrase');
        let _ul = _phrase.querySelector('ul');

        for(let i = 0; i < this.phrase.length; i++) {
            let currentLetter = this.phrase[i];

            if ( currentLetter === ' ') {
                _ul.innerHTML += `<li class="space">${currentLetter}</li>`;
            } else {
                _ul.innerHTML += `<li class="hide letter ${currentLetter}">${currentLetter}</li>`;
            }
        }
    }
    /**
     * checks if the letter matches the phrase.
     * @param {string} letter 
     * @returns {Boolean} depending on whether the letter is included in the phrase.
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Shows the letter on the board that matches the player's selection
     */
    showMatchedLetter(letter){
        let matchLetters = document.getElementsByClassName(letter);

        for(let i = 0; i < matchLetters.length; i++) {
            matchLetters[i].classList.remove('hide');
            matchLetters[i].classList.add('show');
        }
    }
}