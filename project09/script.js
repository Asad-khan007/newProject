const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form  = document.getElementById('form');
const description = document.getElementById('description');
const amount = document.getElementById('amount');

const dummyTransaction = [
    {id:1, description:'salary', amount:+50000},
    {id:2, description:'electric', amount:+100000},
    {id:3, description:'salary', amount:-3000},
    {id:4 , description:'profit', amount:+40000}
];

let transaction = dummyTransaction;

function addTransactionUI(transaction) {
    const type = transaction.amount > 0 ? '+' : '-';

    const item = document.createElement('li');

    item.classList.add( transaction.amount > 0 ? 'plus' : 'minus' );

    item.innerHTML = `
     ${transaction.description} <span>${type}${Math.abs(transaction.amount)}</span>
     <button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

function updateUI() {
    const amounts = transaction.map( transaction => transaction.amount);
    
    const total = amounts
                     .reduce( (acc, amount) => (acc += amount), 0 )
                     .toFixed(2);
     
    const income = amounts
                     .filter( amount => amount > 0)
                     .reduce((acc,amount) => (acc += amount),0) 
                     .toFixed(2); 
                     
    const expense = amounts
                     .filter( amount => amount < 0)
                     .reduce((acc,amount) => (acc += amount),0) 
                     .toFixed(2);       
                     
    balance.innerText = `${total} PKR`;
    
    money_plus.innerText = `${income}`;

    money_minus.innerText = `${expense}`;
    
}

function init() {
    list.innerHTML = '';

    transaction.forEach(addTransactionUI);
    updateUI();
}

init();