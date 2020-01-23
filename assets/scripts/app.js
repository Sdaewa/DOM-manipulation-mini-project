const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header

startAddButton.addEventListener('click', () => {
    addMovieModal.classList.toggle('visible')
}); // on click toggle modal