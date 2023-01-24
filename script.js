// Words used in the game
// const wordBank = [
//     "flexbox",
//     "algorithm",
//     "conditionals",
//     "interpolation",
//     "concatenation", 
// ]

const word = "flexbox"

// 'DOMContentLoaded' event is to make sure that all HTML elements are loaded in the DOM before executing callback.
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); // Put console in place to make sure it works before I continued working.

    initializeKeyboard(); // Queries the document to find all the buttons and attempt to attach and eventListener to each.

  });

  // Should make keyboard interactive by selecting all keys and adding eventListeners.
  const initializeKeyboard = () => {
   const buttons = document.querySelectorAll('#keyboard button'); // querySelectorAll functions kinda like CSS selectors in JS?
   console.log(buttons);

   // Element (button) is the button we do something to. Index is the position while it loops. Array is the entire buttons variable array.
   buttons.forEach( (button, index, array) => {

    button.addEventListener('click', (event) => {

        const letter = //????
        handleLetterClick(letter);
    });

   });

  };

  const handleLetterClick = (letter) => {

  }