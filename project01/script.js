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

function validationEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
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

// this is an event listener for the form 
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    
    checkRequired([username,email,password,password2])
})