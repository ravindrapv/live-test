// Find the list of names of all action movies
// Find the number of movies per genre
// Find the number of movies per genre per year
// Find the average earning of a movie per genre
const data = require("./movies.json");

const actionMovies = data
  .filter((movie) => movie.Genre.includes("Action"))
  .map((movie) => movie.Title);
console.log(actionMovies);
