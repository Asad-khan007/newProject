const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');


// All fuctions 



// Fuction to show the error

function showError (input , message) {
  const formControl = input.parentElement;
  formControl.className='form-control error';
  const small = formControl.querySelector('small');
  small.innerText =  message
}

// Fuction to show the Success

function showSuccess(input ) {
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

// Fuction to check Email is valid

function emailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// this is an event listener for the form
form.addEventListener('submit' , function(e) {
     e.preventDefault();
     
     if(username.value === ''){
        showError(username,'username is required')
     } 
     else {
         showSuccess(username);
     }
     if(email.value === ''){
        showError(email,'Email is required')
     } 
      else if( !emailValid(email.value)) {
         showError(email,'Email is not valid');
      }
     else {
         showSuccess(email);
     }
     if(password.value === ''){
        showError(password,'Password is required')
     } 
     else {
         showSuccess(password);
     }
     if(password2.value === ''){
        showError(password2,'Password is required')
     } 
     else {
         showSuccess(password2);
     }
 })