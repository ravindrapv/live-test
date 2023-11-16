// Find the list of names of all action movies
// Find the number of movies per genre
// Find the number of movies per genre per year
// Find the average earning of a movie per genre
const data = require("./movies.json");

const moviesPerGenre = {};
data.forEach((movie) => {
  moviesPerGenre[movie.Genre] = (moviesPerGenre[movie.Genre] || 0) + 1;
});

console.log(moviesPerGenre);
