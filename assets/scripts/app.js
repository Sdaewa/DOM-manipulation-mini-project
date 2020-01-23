const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const backdrop = document.getElementById('backdrop');

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop(); // call backdrop func inside movieModal 
};


startAddButton.addEventListener('click', toggleMovieModal); // on click toggle modal and backdrop