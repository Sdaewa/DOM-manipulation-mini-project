const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');


const cancelBtn = () => {
    toggleMovieModal();
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop(); // call backdrop func inside movieModal 
};

const toggleBackDropOff = () => {
    toggleMovieModal();
};

startAddButton.addEventListener('click', toggleMovieModal); // on click toggle modal and backdrop
backdrop.addEventListener('click', toggleBackDropOff);
cancelAddMovieButton.addEventListener('click', cancelBtn);