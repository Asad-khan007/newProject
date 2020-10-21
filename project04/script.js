// Getting Element from DOM 
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('currency-one0');
const currTwoAmount = document.getElementById('currency-two0');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');

// Fetch exchange rate from 3rd party API

function calculate() {
     
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/3a6c32f2df3b8a8d25c71a60/latest/${currencyOneCode}`)
    .then(res => res.json())
    .then(data => {
          const exchangeRate = data.conversion_rates[currencyTwoCode];

          // Display the Conversion Rates
          rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode} `

          //Conversion Rate and Update Amount of Currency Two

             currTwoAmount.value = currOneAmount.value * exchangeRate;
    })
}

function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
}


// Evenet Listeners

currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click' , flip);

calculate();