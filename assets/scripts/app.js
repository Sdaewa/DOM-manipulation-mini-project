const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addAddMovieButton = addMovieModal.querySelector('.btn--success');


const cancelBtnHandler = () => {
    toggleMovieModal();
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop(); // call backdrop func inside movieModal 
};

const toggleBackDropOffHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {

};

startAddButton.addEventListener('click', toggleMovieModalHandler); // on click toggle modal and backdrop
backdrop.addEventListener('click', toggleBackDropOffHandler);
cancelAddMovieButton.addEventListener('click', cancelBtnHandler);
addAddMovieButton.addEventListener('click', addMovieHandler);