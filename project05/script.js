   /// Getting Dom Elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-million');
const sortButton = document.getElementById('sort');
const totalButton = document.getElementById('calculate-total');

// Initializing Data Array
let data = [];

// Creat Initial User
generateRandomUser();

// Function to Fetch Random User Data from API
//  API : randomuser.me/api
async function generateRandomUser() {
   const res = await fetch('https://randomuser.me/api')
   const data = await res.json();

   const user = data.results[0];
  
   const newUser = {
       name:`${user.name.first} ${user.name.last}`,
       worth:Math.round(Math.random()*1000000)
   }
   
   addData(newUser) 
   
}
// function to double the neworth fo each user
function doubleWorth() {
    data = data.map(item => {
     return { ...item,worth:item.worth*2}
    });
    updateDOM();
}

/// Add Newly generated user into the data array

function addData(newUser) {
    data.push(newUser);

    updateDOM();
}
// function to sort the rischest users
function sortRichest() {
    data.sort( (a,b) => b.worth - a.worth );

    updateDOM();
};

// function to fillter the user and only show the richest user 
function showRichest() {

    data = data.filter(
        item => item.worth > 100000
    );

    updateDOM();
};

// function to calculate total networth 
function calculateTotal() {
    const totalWorth = data.reduce(
      
        (acc, item) => ( acc += item.worth), 0 
    );

    const  totalNetWorthElement = document.createElement('div')
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(totalWorth)}</strong> </h3>`;
    main.appendChild(totalNetWorthElement);
}


// Function to update the ui with dom

function updateDOM(inputData = data) {

    main.innerHTML = '<h2><strong>Name</strong>Net Worth</h2>'

    inputData.forEach( item => {

        const element =document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong>${ formatCurrency(item.worth)}`
        main.appendChild(element);
    });
}

// Function to format a number as a currency
function formatCurrency (num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listener
// 1 - add user event listener
addUserButton.addEventListener('click', generateRandomUser );

// 2 - Add Double money event listener
doubleMoneyButton.addEventListener('click', doubleWorth);

// 3 - sort event listener
sortButton.addEventListener('click', sortRichest );

// 4 - add show millionaires event listener
showMillionairesButton.addEventListener('click', showRichest);

// 5 - add calculate total wealth event listener
totalButton.addEventListener('click', calculateTotal);