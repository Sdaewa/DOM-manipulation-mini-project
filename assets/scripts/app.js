const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const addBackDrop = document.getElementById('backdrop');

const addMovieModal = () => {
    addMovieModal.classList.toggle('visible');
};

const addBackDropModal

startAddButton.addEventListener('click', addMovieModal); // on click toggle modal