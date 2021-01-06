// Grab DOM element 

const word = document.getElementById('word');
const worngLetters = document.getElementById('wrong-letters');
const resstartButton = document.getElementById('restart');
const popup = document.getElementById('popup-container');
const message = document.getElementById('win-lose');
const notification = document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

// An array of words to select from
  const wordPool = ['javascript', 'facebook','youtube','twich','computer','amazone','ufone','zonge','google'];
// Selecting a word at random from the pool
let selectedWord = wordPool[Math.floor(Math.random()* wordPool.length)];
// Array to classify the input of the user
const correctLetters = ['a','e','i','o','u','f'];
const incorrectLetters = [];

//Function to display the word on the scrren
function displaySelectedWord() {
     word.innerHTML = `
      ${selectedWord.split('').map(
          letter => `<span class="letter"> ${correctLetters.includes(letter) ? letter: '' } </span>`
      ).join('')
    }
     `;

     const wordText = word.innerText.replace(/\n/g , '');
       
     if(wordText === selectedWord) {
         message.innerText = 'You Won!';
         popup.style.display = 'flex';

     }
};

// Function to display the sliding notification
function showNotification() {
    notification.classList.add('show');

    setTimeout( ()=> {notification.classList.remove('show');},2000 );
};

//Function to Update Incorrect Letter
function updateWrongLetters() {
    // Update the Display for worng Letters
    worngLetters.innerHTML = `
     ${incorrectLetters.length > 0 ? `<p>Wrong</p>` : ''}
     ${incorrectLetters.map( letter => `<span>${letter}</span>`)}
    `;

    // Display hangman parts on incorrect input
    hangmanParts.forEach( (part , index)=> {
        const errors = incorrectLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none'
        }
    });
    // Show popup if lost
    if(incorrectLetters.length === hangmanParts.length){
        message.innerText = 'You Lost!';
        popup.style.display = 'flex';
    }
}

//Event Handlers 
// 1. Event Handlers for keyboard Button Press
window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <= 90 ) {
        const letter = e.key;
       if(selectedWord.includes(letter) ){
           if(!correctLetters.includes(letter)){
               correctLetters.push(letter);
               displaySelectedWord();
           } else {
               showNotification(); 
           }
       } else {
           if(!incorrectLetters.includes(letter)) {
               incorrectLetters.push(letter);
               updateWrongLetters();
           } else {
               showNotification();
           }
       }
    }
});

// 2. Event listener for restart buttom
resstartButton.addEventListener('click', ()=>{
    // empty the arrays
    correctLetters.splice(0);
    incorrectLetters.splice(0);

    //get a new selected word form the pool 
    selectedWord = wordPool[Math.floor(Math.random()*wordPool.length)];
    displaySelectedWord();

    // Clear the wrong letters div
    updateWrongLetters();

    //Hide the popup
    popup.style.display = 'none';
})

displaySelectedWord();