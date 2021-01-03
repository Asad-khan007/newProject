// Get DOM Element 
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal =document.getElementById('modal');


// Add Event listener 
// 1 - toggle the Nav
toggle.addEventListener('click', ()=>
  document.body.classList.toggle('show-nav')
);


// 2 - Show the Modal
open.addEventListener('click', ()=> 
  modal.classList.add('show-modal')
);

// 3 - Close the modal
close.addEventListener('click', ()=> 
   modal.classList.remove('show-modal')
);

// 4 - Close the modal on click outside modal
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
);