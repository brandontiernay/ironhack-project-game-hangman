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
const visibleWord = document.querySelector('#visible-word');
const winWord = [

];

// const updateVisibleWord = (newWord) => {
//     const visibleWord = document.querySelector('#visible-word');
//     visibleWord.innerHTML = newWord;
// };

// 'DOMContentLoaded' event is to make sure that all HTML elements are loaded in the DOM before executing callback.
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); // Put console in place to make sure it works before I continued working.

    initializeButtons(); // Queries the document to find all the buttons and attempt to attach and eventListener to each.
    // updateVisibleWord(visibleString);

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
        // const letter = button.innerHTML;
        console.log(event);
        // Text from inside element
        let letter = event.target.innerHTML;
        console.log(event.target.innerHTML);
        handleLetterClick(letter);
        handleWrongLetter(letter);
        handleCorrectLetter(letter);
        button.disabled = true; // Disable pressed keys
    });

   });

  };

  const handleCorrectLetter = (letter) => {
    let lowerCaseLetter = letter.toLowerCase()
    for (let i = 0; i < secretString.length; i++) {
        if (secretString[i].toLowerCase() === lowerCaseLetter) {
            winWord.push(lowerCaseLetter);
            console.log(winWord);
            console.log(letter);
        }
    }
  }

  let count = 0;
  const handleWrongLetter = (letter) => {
    let platform = document.querySelector("#platform");
    platform.style.display = "none";
    for (let i = 0; i < secretString.length; i++) {
        console.log(secretString[i]);
        console.log(letter);
        if (letter !== secretString[i] && count === 0) {
           
           let head = document.querySelector("#head");
           head.style.visibility = "visible";
           head.style.height = "30vh";
        } else if (letter !== secretString[i] && count === 1) {
            let head = document.querySelector("#head");
            let torso = document.querySelector("#torso");
            head.style.display = "none";
            torso.style.visibility = "visible";
            torso.style.height = "30vh";
         } else if (letter !== secretString[i] && count === 2) {
            let torso = document.querySelector("#torso");
            let leftLeg = document.querySelector("#left-leg");
            torso.style.display = "none";
            leftLeg.style.visibility = "visible";
            leftLeg.style.height = "30vh";
         } else if (letter !== secretString[i] && count === 3) {
            let leftLeg = document.querySelector("#left-leg");
            let rightLeg = document.querySelector("#right-leg");
            leftLeg.style.display = "none";
            rightLeg.style.visibility = "visible";
            rightLeg.style.height = "30vh";
         } else if (letter !== secretString[i] && count === 4) {
            let rightLeg = document.querySelector("#right-leg");
            let leftArm = document.querySelector("#left-arm");
            rightLeg.style.display = "none";
            leftArm.style.visibility = "visible";
            leftArm.style.height = "30vh";
         } else if (letter !== secretString[i] && count === 5) {
            let leftArm = document.querySelector("#left-arm");
            let rightArm = document.querySelector("#right-arm");
            leftArm.style.display = "none";
            rightArm.style.visibility = "visible";
            rightArm.style.height = "30vh";
            let youLose = document.querySelector("#lose")
            youLose.style.visibility = "visible";
         }
    }
    count++;
    console.log(count);
  }

  const handleLetterClick = (letter) => {
    const letterElement = document.createElement("p");
    letterElement.innerHTML = letter;
    visibleWord.appendChild(letterElement);
  }

  const resetGame = () => {
    location.reload();
  }