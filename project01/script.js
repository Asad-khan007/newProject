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

// Fuction to check if require feilds have data

function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
      if(input.value === '') {
          showError(input , `${getFieldId(input)} is required `);
      } else {
          showSuccess(input);
      }
  })
}

// Fuction to get the id of the input field with proper case

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// this is an event listener for the form
form.addEventListener('submit' , function(e) {
     e.preventDefault();
     
     checkRequired([username,email,password,password2]);
 })