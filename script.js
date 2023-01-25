// Words used in the game
// const wordBank = [
//     "flexbox",
//     "algorithm",
//     "conditionals",
//     "interpolation",
//     "concatenation", 
// ]


const numberOfErrors = 0;
const secretString = "flexbox";
let visibleString = secretString.split('').fill('_').join('');

const updateVisibleWord = (newWord) => {
    const visibleWord = document.querySelector('#visible-word');
    visibleWord.innerHTML = newWord;
};

// 'DOMContentLoaded' event is to make sure that all HTML elements are loaded in the DOM before executing callback.
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); // Put console in place to make sure it works before I continued working.

    initializeButtons(); // Queries the document to find all the buttons and attempt to attach and eventListener to each.
    updateVisibleWord(visibleString);

  });

  // Should make buttons interactive by selecting all keys and adding eventListeners.
  const initializeButtons = () => {
    const newGameButton = document.querySelector('#new-game-button button');
    newGameButton.addEventListener('click', (event) => {
        resetGame();
    });

    const keyboardButtons = document.querySelectorAll('#keyboard button'); // querySelectorAll functions kinda like CSS selectors in JS?
   console.log(keyboardButtons);

   // Element (button) is the button we do something to. Index is the position while it loops. Array is the entire buttons variable array.
   keyboardButtons.forEach( (button, index, array) => {


    button.addEventListener('click', (event) => {
        const letter = button.innerHTML;
        handleLetterClick(letter);
        button.disabled = true; // Disable pressed keys
    });

   });

  };

  const handleCorrectLetter = (letter) => {

  }

  const handleWrongLetter = () => {

  }

  const handleLetterClick = (letter) => {
    // if statements
  }

  const resetGame = () => {
    location.reload();
  }