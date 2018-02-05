var userGuessInputElement = document.getElementById('user-guess');
var randomNumber = Math.floor(Math.random() * 100) + 1;
var feedback= document.querySelector('.feedback')
var guessBtn= document.querySelector('#guess-btn');
var displayGuess= document.querySelector('.display-Guess');
var clearBtn= document.querySelector('#clear-btn');
var resetBtn= document.querySelector('.bt-bottom');
var userGuessNumber; 



function buttonEnable (){ 

  console.log('hello');
  guessBtn.disabled = false; 
  clearBtn.disabled = false;
  resetBtn.disabled = false; 
}

userGuessInputElement.addEventListener('keyup', buttonEnable);
  // buttons should disable"false"

guessBtn.addEventListener('click', submitUserGuess) 
// Function is being called in event listener vs (). as soon as user clicks, calls 
// function to run and then brings in stored information

function submitUserGuess(event) {

  userGuessNumber = userGuessInputElement.value;
  var integer = parseInt(userGuessNumber);
  console.log(integer)
  // Grabbing input field's value and assigning to user guess 

  if (integer < 1 ) {
    feedback.innerText="Outside of range. Guess again, friend!!!";
  } else if (integer > 100 ) {
    feedback.innerText="Outside of range. Guess again, amigo!";
  } else {
    displayGuess.innerText = userGuessNumber;
    numCompare();
  }

};


function numCompare() {
 if (userGuessNumber < randomNumber) {
feedback.innerText="Too Low!";
 } else if (userGuessNumber > randomNumber) {
feedback.innerText="Too high!";
 } else{
  feedback.innerText="Boom!";
 }

}

clearBtn.addEventListener('click', clearInput)

function clearInput() {
userGuessInputElement.value = '';
// reassigns to the string info, nothing!

}

resetBtn.addEventListener('click', resetGame)

function resetGame() {

  randomNumber = Math.floor(Math.random() * 100) + 1;
  clearInput()
  feedback.innerText = ''; 
  displayGuess.innerText = '';
  
}


// Thinking through the mud

// I want a user to be able to input a guess into a text box

// I need a randomly generated number from 1-100. 

// User needs to be able to submit guess.

// I need the user guess to be captured and stored as a var.

// Need to compare user guess to randomly generated number.

// Need to communicate result of guess/num comparison 
//   too low or too high or just right 