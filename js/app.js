/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

const _startGame = document.getElementById('btn__reset');
_startGame.addEventListener('click', function() {

    game = new Game();
    game.startGame();
});

const _keys = document.getElementsByClassName('key');
for(let i = 0; i < _keys.length; i++) {    
    _keys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });
}