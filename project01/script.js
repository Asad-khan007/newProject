const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





//All functions 

//Function to show success 

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Function for show Error 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}
// Function to check if email is valid

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()) ) {
        showSuccess(input)
    } else {
        showError(input,`Please provide a valid Email`)
    }
}

// Funtion to check required field have data

function checkRequired(inputArray) {
     inputArray.forEach(function(input) {
         if(input.value === '') {
             showError(input ,`${getProper(input)} is required`)
         } else {
             showSuccess (input);
         }
     });
}
// Function to convert in proper case 

function getProper(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
}

// Function to check length of characters

function checkLength(input, min , max) {
   if( input.value.length < min ){
       showError(input, `${getProper(input)} need to be at least ${min} character`)
   } else if ( input.value.length > max) {
    showError(input, `${getProper(input)} need to be less than ${max} character`)
   } else {
       showSuccess(input);
   }
}

// Function to check if password was matched

function matchPas(input, input2) {
    if(input.value !== input2.value) {
        showError(input2, 'password is not match')
    } 
}

// this is an event listener for the form 
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    matchPas( password,password2);
})