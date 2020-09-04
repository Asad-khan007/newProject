const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let tickPrice = +movieSelect.value;

populateUI();
// function to update the ui from local storage
 function populateUI() {
     const selectedSeats = JSON.parse(localStorage.getItem('selectedSeat'));
     
     if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
         if(selectedSeats.indexOf(index) > -1) {
             seat.classList.add('selected');
         }
        })
     }
     
     const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

     if(selectedMovieIndex !== null ){
         movieSelect.selectedIndex = selectedMovieIndex;
     }

 };


// Function to Update Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    count.innerText = countSelectedSeats;
    total.innerText = countSelectedSeats  * tickPrice;

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
      
    localStorage.setItem('selectedSeat', JSON.stringify(seatsIndex)) ;
} 

// Function to set data to the local storage

function setMovieData(key , value) {
    localStorage.setItem('selectedMovieIndex', key);
    localStorage.setItem('selectedMoviePrice', value);
}


// Event listener for selecting Availabel seats 

container.addEventListener('click', (e)=> {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
       e.target.classList.toggle('selected');
       updateSelectedCount();
    }
    
});

// Event Listener for update the price 

movieSelect.addEventListener('change', (e)=> {
     tickPrice = e.target.value;
     updateSelectedCount();

     setMovieData(e.target.selectedIndex, e.target.value); 
});

// Calculate initial number of seats and total 
updateSelectedCount();
