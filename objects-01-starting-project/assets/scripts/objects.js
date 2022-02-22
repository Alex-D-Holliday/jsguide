const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie; // == movie.info
    console.log(otherProps);
    //const { title: movieTitle } = info; // == info.title
    let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(value) {
        if (value.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title; // .toUpperCase(); is better
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);


/*
const movieList = document.querySelector('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Coding'],
  userChosenKeyName: '...',
  greet: function () {
    alert('Hello there');
  },
  1.5: 'hello'
};

//person.age = 31;
delete person.age;
person.isAdmin = true;

person.greet();

console.log(person['first name']);
console.log(person[1.5]);*/
