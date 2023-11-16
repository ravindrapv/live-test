// Find the list of names of all action movies
// Find the number of movies per genre
// Find the number of movies per genre per year
// Find the average earning of a movie per genre
const data = require("./movies.json");

const moviesPerGenrePerYear = {};

data.forEach((movie) => {
  const genre = movie.Genre;

  moviesPerGenrePerYear[genre] = moviesPerGenrePerYear[genre] || {};
  moviesPerGenrePerYear[genre][movie.Year] =
    (moviesPerGenrePerYear[genre][movie.Year] || 0) + 1;
});

console.log(moviesPerGenrePerYear);
