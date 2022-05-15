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
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '').toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

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
      null,
      elm('label', { for: i }, movie.name),
      elm(
        'button',
        { id: i, onClick: handleChange },
        movie.watched ? 'Watched' : 'To Watch'
      )
    );
    rootElm.append(li);
  });
}

// function createMovieUI(data, root) {
//   root.innerHTML = '';
//   data.forEach((movie, i) => {
//     let btn = elm('button', { id: i }, movie.watched ? 'Watched' : 'To Watch');
//     btn.addEventListener('click', handleChange);
//     let li = elm('li', null, elm('label', { for: i }, movie.name), btn);
//     // let button = elm('button');
//     // button.id = i;
//     // button.innerText = movie.watched ? 'Watched' : 'To Watch';
//     // button.addEventListener('click', handleChange);
//     // let label = elm('label');
//     // label.for = i;
//     // label.innerText = movie.name;

//     // li.append(label, button);

//     rootElm.append(li);
//   });
// }

createMovieUI(allMovies, rootElm);
