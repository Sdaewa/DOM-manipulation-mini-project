const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive'); // selecting cancel btn thru addMovieModal
const addAddMovieButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');


const cancelBtnHandler = () => {
    toggleMovieModalHandler();
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop(); // call backdrop func inside movieModal 
};

const toggleBackDropOffHandler = () => {
    toggleMovieModalHandler();
};

const movies = [];

const addMovieHandler = () => {
    const titleValue = userInputs[0].value; // value property
    const imageValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    // if (userInputs === '') {
    //     alert('Please enter Title, Image and Rating');
    // } else if (!titleValue) {
    //     alert('Please enter Title');
    // } else if (!imageValue) {
    //     alert('Please enter Image');
    // } else if (ratingValue <= 0) {
    //     alert('Please enter Rating');
    // }
    if (titleValue.trim() === '' ||
        imageValue.trim() === '' ||
        ratingValue.trim() <= 0 ||
        +ratingValue < 1 ||
        +ratingValue > 5) {
        alert('Please enter valid values');
    }; // validating input for empty string or max-min rating
    const newMovies = {
        title: title,
        image: img,
        rating: rating
    };
    movies.push(newMovies);
};

startAddButton.addEventListener('click', toggleMovieModalHandler);
backdrop.addEventListener('click', toggleBackDropOffHandler);
cancelAddMovieButton.addEventListener('click', cancelBtnHandler);
addAddMovieButton.addEventListener('click', addMovieHandler);