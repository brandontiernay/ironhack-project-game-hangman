// Words used in the game
// const wordBank = [
//     "flexbox",
//     "algorithm",
//     "conditionals",
//     "interpolation",
//     "concatenation",
// ]

let numberOfErrors = 0;
const secretString = "right";
let visibleString = secretString.split("").fill("_").join("");
const visibleWord = document.querySelector("#visible-word");
const winWord = [];
const allLetters = document.querySelectorAll(".letter");
console.log(allLetters);
// const updateVisibleWord = (newWord) => {
//     const visibleWord = document.querySelector('#visible-word');
//     visibleWord.innerHTML = newWord;
// };

// 'DOMContentLoaded' event is to make sure that all HTML elements are loaded in the DOM before executing callback.
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed"); // Put console in place to make sure it works before I continued working.

  initializeButtons(); // Queries the document to find all the buttons and attempt to attach and eventListener to each.
  // updateVisibleWord(visibleString);
});

// Should make buttons interactive by selecting all keys and adding eventListeners.
const initializeButtons = () => {
  const newGameButton = document.querySelector("#new-game-button button");
  newGameButton.addEventListener("click", (event) => {
    resetGame();
  });

  const keyboardButtons = document.querySelectorAll("#keyboard button"); // querySelectorAll functions kinda like CSS selectors in JS?
  console.log(keyboardButtons);

  // Element (button) is the button we do something to. Index is the position while it loops. Array is the entire buttons variable array.
  keyboardButtons.forEach((button, index, array) => {
    button.addEventListener("click", (event) => {
      // const letter = button.innerHTML;
      // console.log(event);
      // Text from inside element
      let letter = event.target.innerHTML.toLowerCase();
      console.log(event.target.innerHTML);
      handleCorrectLetter(letter);
      // handleLetterClick(letter);
      // handleWrongLetter(letter);
      // Disable pressed keys
      // button.disabled = true;
    });
  });
};
let count = 0;
let rightLetter = 0;
let count2 = 0;
const rightArray = ["_", "_", "_", "_", "_"];

const handleCorrectLetter = (letter) => {
  let lowerCaseLetter = letter.toLowerCase();
  // for (let i = 0; i < secretString.length; i++) {
  //   console.log(secretString.charAt(secretString[i]));
  //   console.log(letter.toLowerCase());
  if (
    secretString[0] === letter.toLowerCase() ||
    secretString[1] === letter.toLowerCase() ||
    secretString[2] === letter.toLowerCase() ||
    secretString[3] === letter.toLowerCase() ||
    secretString[4] === letter.toLowerCase() ||
    secretString[5] === letter.toLowerCase() ||
    secretString[6] === letter.toLowerCase()
  ) {
    console.log(count);

    console.log(count);
    if (allLetters[0].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[0].classList.remove("hide");
      console.log(allLetters[1].innerHTML.toLowerCase());
      rightArray.splice(0, 1, allLetters[0].innerHTML.toLowerCase());
      // rightArray.pop();
      // const letterElement = document.createElement("p");
      // letterElement.innerHTML = allLetters[1].innerHTML.to;
      // visibleWord.appendChild(letterElement);

      console.log(rightArray);
    } else if (allLetters[1].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[1].classList.remove("hide");

      rightArray.splice(1, 1, allLetters[1].innerHTML.toLowerCase());
      console.log(rightArray);
      // rightArray.pop();
    } else if (allLetters[2].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[2].classList.remove("hide");

      rightArray.splice(2, 1, allLetters[2].innerHTML.toLowerCase());
      console.log(rightArray);
      // rightArray.pop();
    } else if (allLetters[3].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[3].classList.remove("hide");
      // rightArray.splice(1, 1);

      rightArray.splice(3, 1, allLetters[3].innerHTML.toLowerCase());
      // rightArray.pop();
      console.log(rightArray, "hey");
    } else if (allLetters[4].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[4].classList.remove("hide");

      rightArray.splice(4, 1, allLetters[4].innerHTML.toLowerCase());
      // rightArray.pop();
      console.log(rightArray);
    } else if (allLetters[5].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[5].classList.remove("hide");

      rightArray.splice(5, 1, allLetters[5].innerHTML.toLowerCase());
      // rightArray.pop();
      console.log(rightArray);
    } else if (allLetters[6].innerHTML.toLowerCase() === letter.toLowerCase()) {
      allLetters[6].classList.remove("hide");

      rightArray.splice(6, 1, allLetters[6].innerHTML.toLowerCase());
      // rightArray.pop();
      console.log(rightArray);
    }
    console.log(rightArray);
    if (rightArray.join("") === secretString) {
        let container = document.querySelector('#container');
        container.style.display = "none";
        let youWin = document.querySelector("#win")
        youWin.style.visibility = "visible";
    //   alert("You win!");
    }
    rightLetter++;
    // allLetters.forEach((letter) => {
    //   console.log(letter.innerHTML);

    //   if (letter.innerHTML.toLowerCase() === secretString[0]) {
    //     letter.classList.remove("hide");
    //     console.log(letter);
    //   }
    // });

    if (winWord.join("") === secretString) {
      alert("you win");
    }
  } else {
    for (let i = 0; i < secretString.length; i++) {
      console.log(secretString[i], "yooo");
      console.log(letter, "yoooo");
      if (letter !== secretString[i] && count == 0) {
        let platform = document.querySelector("#platform");
        platform.style.display = "none";
        let head = document.querySelector("#head");
        head.style.visibility = "visible";
        head.style.height = "30vh";
        console.log("hey22");
      } else if (letter !== secretString[i] && count === 1) {
        let head = document.querySelector("#head");
        let torso = document.querySelector("#torso");
        head.style.display = "none";
        torso.style.visibility = "visible";
        torso.style.height = "30vh";
        console.log("hi");
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
        let keyboard = document.querySelector('#keyboard');
        keyboard.style.display = "none";
        let youLose = document.querySelector("#lose")
        youLose.style.visibility = "visible";
      }
    }
    // numberOfErrors++;
    count++;
    console.log(count, numberOfErrors);
  }
};
// if (secretString[i].includes(letter.toLowerCase())) {
//   winWord.push(letter.toLowerCase());
// }
// console.log(winWord);

// for (let i = 0; i < secretString.length; i++) {
//   if (secretString[i].toLowerCase() === lowerCaseLetter) {
//     let platform = document.querySelector("#platform");
//     platform.style.visibility = "visible";
//     winWord.push(lowerCaseLetter);

//     console.log(winWord);
//     console.log("hey");
//     console.log(secretString[i]);
//     console.log(lowerCaseLetter);
//   }
// }

const handleWrongLetter = (letter) => {
  for (let i = 0; i < secretString.length; i++) {
    console.log(secretString[i]);
    console.log(letter);
    if (letter !== secretString[i] && count === 0) {
      let platform = document.querySelector("#platform");
      platform.style.display = "none";
      let head = document.querySelector("#head");
      head.style.visibility = "visible";
      head.style.height = "30vh";
      console.log("hey22");
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
    } else if (letter !== secretString[i] && count > 5) {
      let leftArm = document.querySelector("#left-arm");
      let rightArm = document.querySelector("#right-arm");
      leftArm.style.display = "none";
      rightArm.style.visibility = "visible";
      rightArm.style.height = "30vh";
      let youLose = document.querySelector("#lose");
      youLose.style.visibility = "visible";
    }
  }
  count++;
  console.log(count);
};

// const handleLetterClick = (letter) => {
//   console.log(numberOfErrors);
//   if (numberOfErrors === 6) {
//     return;
//   } else {
//     const letterElement = document.createElement("p");
//     letterElement.innerHTML = letter;
//     visibleWord.appendChild(letterElement);
//     numberOfErrors++;
//   }
// };

const resetGame = () => {
  location.reload();
};