// Find the list of names of all action movies
// Find the number of movies per genre
// Find the number of movies per genre per year
// Find the average earning of a movie per genre

const data = require("./movies.json");
const earningsPerGenre = {};
const countPerGenre = {};

data.forEach((movie) => {
  const genre = movie.Genre;
  const earning = parseFloat(movie.Gross_Earning_in_Mil);
  if (!isNaN(earning)) {
    earningsPerGenre[genre] = (earningsPerGenre[genre] || 0) + earning;
    countPerGenre[genre] = (countPerGenre[genre] || 0) + 1;
  }
});

const averageEarningsPerGenre = {};

for (const genre in earningsPerGenre) {
  const averageEarnings =
    countPerGenre[genre] !== 0
      ? earningsPerGenre[genre] / countPerGenre[genre]
      : 0;
  averageEarningsPerGenre[genre] = Number(averageEarnings.toFixed(2));
}

console.log(averageEarningsPerGenre);
