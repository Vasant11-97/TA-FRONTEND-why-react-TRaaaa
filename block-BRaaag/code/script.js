let input = document.querySelector(`.input`);
let rootElm = document.querySelector('.movies_list');

let allMovies = [
  { name: 'Forest Gump', watched: false },
  { name: 'Inception', watched: false },
];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI(allMovies, rootElm);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, rootElm);
}

function createMovieUI(data, root) {
  //   root.innerHTML = '';
  let movieUI = data.map((movie, i) => {
    let li = React.createElement(
      'li',
      null,
      React.createElement('label', { for: i }, movie.name),
      React.createElement(
        'button',
        { id: i, onClick: handleChange },
        movie.watched ? 'Watched' : 'To Watch'
      )
    );
    return li;
  });
  ReactDOM.render(movieUI, rootElm);
}

createMovieUI(allMovies, rootElm);
