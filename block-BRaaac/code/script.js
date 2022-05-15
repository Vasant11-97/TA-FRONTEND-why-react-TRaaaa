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

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  console.log(children);
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
}

function createMovieUI(data, root) {
  root.innerHTML = '';
  data.forEach((movie, i) => {
    let li = elm(
      'li',
      {},
      // elm('button', {
      //   id: i,
      //   innerText: movie.watched ? 'Watched' : 'To Watch',
      // })
    );
    let button = elm('button', {
      id: i,
      innerText: movie.watched ? 'Watched' : 'To Watch',
    });
    button.addEventListener('click', handleChange);
    let label = elm('label', {
      for: i,
      innerText: movie.name,
    });
    li.append(label, button);

    rootElm.append(li);
  });
}

createMovieUI(allMovies, rootElm);
