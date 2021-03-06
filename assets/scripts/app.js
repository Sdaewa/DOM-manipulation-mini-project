const addMovieModal = document.getElementById('add-modal'); // selecting HTML tag by id
// const addMovieModal = document.querySelector('#add-modal');
const startAddButton = document.querySelector('header button'); // selecting button tag in header
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive'); // selecting cancel btn thru addMovieModal
const addAddMovieButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const displayBox = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');



const updateUI = () => {
    if (movies.length === 0) {
        displayBox.style.display = 'block';
    } else {
        displayBox.style.display = 'none';
    }
};

const cancelBtnHandler = () => {
    closeMovieModal();
    clearInput();
    toggleBackDropOff();
};


const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackDrop(); // call backdrop func inside movieModal 
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleBackDropOff = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearInput();
};


const clearInput = () => {
    for (const input of userInputs) { // iterate thru each element of the array setting value back to ' '
        input.value = '';
    }
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();
    const cancelDelBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDelBtn = deleteMovieModal.querySelector('.btn--danger');
    confirmDelBtn.replaceWith(confirmDelBtn.cloneNode(true)); //Hacky solution but just to use cloneNode and replaceWith, creates a new DOM object
    confirmDelBtn = deleteMovieModal.querySelector('.btn--danger');
    cancelDelBtn.removeEventListener('click', closeMovieDeletionModal);
    cancelDelBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDelBtn.addEventListener('click', deleteMovie.bind(null, movieId));
};

const closeMovieDeletionModal = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1); // remove element at given index
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};


const renderNewMovieElement = (id, title, image, rating) => {
    const newMovieElement = document.createElement('li'); // creating a new list item element
    newMovieElement.className = 'movie-element'; // adding className to the newly created element
    newMovieElement.innerHTML = ` 
    <div class='movie-element__image'>
        <img src='${image}' alt=''> 
    </div>
    <div class='movie-element__info'>
    <h2>'${title}'</h2>
    <p>'${rating} /5 stars'</p>
    </div>
    `; // creates new HTML with title, images and rating values
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    listRoot.appendChild(newMovieElement); // append the new list to the ul tag
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
        id: Math.random.toString(), //create a random number (just for this purpose)
        title: titleValue,
        image: imageValue,
        rating: ratingValue
    };
    movies.push(newMovies);
    // console.log(movies);
    closeMovieModal();
    toggleBackDrop();
    clearInput();
    renderNewMovieElement(newMovies.id, newMovies.title, newMovies.image, newMovies.rating);
    updateUI();
};



startAddButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', toggleBackDropOff);
cancelAddMovieButton.addEventListener('click', cancelBtnHandler);
addAddMovieButton.addEventListener('click', addMovieHandler);