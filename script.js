const movies = movieData;

function displayMovies(movieList) {
  const movieGrid = document.getElementById('movie-grid');
  movieGrid.innerHTML = '';
  movieList.forEach((movie, index) => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
            <img src="${movie.imageUrl}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
            </div>
        `;
    movieItem.addEventListener('click', () => {
      window.location.href = `movie-details.html?index=${index}`;
    });
    movieGrid.appendChild(movieItem);
  });
}

// Filter movies by search
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
  displayMovies(filteredMovies);
});

// Initial display of movies
displayMovies(movies);