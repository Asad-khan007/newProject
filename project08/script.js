
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealContainer = document.getElementById('meals');
const resultContainer = document.getElementById('result-heading');
const selectedMeal = document.getElementById('selected-meal');
//Function to search meal from api and fetch the data 
function searchMeal(e) {
    e.preventDefault()

    // get the search term from input field 
    const term = search.value;
    console.log(term);
        
    // check if search term from input field 
    if(term.trim()) {
        console.log('not empty');
         
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.meals === null){
                resultContainer.innerHTML= `<h2>There is no meal for '${term}':</h2>`
            }else {
                resultContainer.innerHTML= `<h2>Search results for '${term}':</h2>`
            }
            
        });
         
        



    }else {
       alert('please enter a valid search')
    }

}

//Event Listeners
// 1. submit
submit.addEventListener('submit',searchMeal);