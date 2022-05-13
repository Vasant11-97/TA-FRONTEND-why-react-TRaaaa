let form = document.querySelector('form');
let displayData = document.querySelector('.display');
let movieDetails = [{}];

function handleInput(event) {
  event.preventDefault();
  movieDetails.movie = form.elements.movie.value;
  console.log(form.elements.movie.value);
  createUi();
}

function createUi() {
  let insideDisplay = document.createElement('div');
  insideDisplay.classList.add('insideDisplay');

  let movieName = document.createElement('h3');
  movieName.innerHTML = movieDetails.movie;
  movieName.classList.add('movieName');
  movieName.style.marginLeft = '2rem';

  let watchedButton = document.createElement('button');
  watchedButton.innerHTML = 'To watch';
  watchedButton.addEventListener('click', () => {
    if (watchedButton.innerHTML == 'To watch') {
      watchedButton.innerHTML = 'Watched';
    } else if (watchedButton.innerHTML == 'Watched') {
      watchedButton.innerHTML = 'To watch';
    }
  });

  insideDisplay.append(movieName, watchedButton);
  displayData.append(insideDisplay);

  form.elements.movie.value = '';
}

form.addEventListener('submit', handleInput);
