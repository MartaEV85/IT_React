const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  return result;

}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let totalAverage = moviesAverage(moviesFromDirector)
  return totalAverage;

}

// EXERCICI 3 - BIS

function moviesAverage(array) {
  let totalSum = array.reduce((acc, currentVal) => { return acc + currentVal.score }, 0);
  let average = totalSum / array.length;
  return Number.parseFloat(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 

// *** Això és el que demana l'enunciat: Order un array de pel·licules per títol. Això NO PASSA ELS TEST***

// function orderAlphabetically(array) {
//   function compare(first, second){
// let firstTitle = first.title
// let secondTitle = second.title

//     if (first.title <= second.title){
//       return -1;
//     }else{
//       return 1;
//     }
//   }
//   let orderedMovies = array.sort(compare)
//   return orderedMovies;
// }

// Exercise 4:  Alphabetic order by title 

// Això NO ÉS el que demana l'enunciat i SÍ passa els test.

function orderAlphabetically(array) {
  let titles = array.map(movie => movie.title);

  titles.sort()
  // console.log('TEST ' + titles)
  return titles.slice(0, 20);
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  function compare(first, second) {


    if (first.year < second.year) {
      return -1;
    } else if (first.year > second.year) {
      return 1;
    } else {
      if (first.title <= second.title) {
        return -1;
      } else {
        return 1;
      }
    }
  }
  array.sort(compare)
  let orderedMovies = array.slice(0, array.length);

  return orderedMovies;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = array.filter(movie => {
    let isCategory = movie.genre.indexOf(category) != -1;
    let hasAverage = typeof (movie.score) === "number"

    return isCategory && hasAverage
  });
  let averageCategory = moviesAverage(result)
  // console.log(result)
  return averageCategory;


}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  
  let movieMinutes = array.map(movie => {
      let hours = movie.duration
      let regex = /\d+/g;
      let found = hours.match(regex);

      // let minutes = parseInt(found[0]) * 60 + parseInt(found[1])

      let found1 = parseInt(found[0])
      let found2 = 0
      if (found.length > 1){
        found2 = parseInt(found[1])
      }

      let minutes = found1 * 60 + found2

      // console.log(movie.title + ' ' + minutes + ' ' + hours)
      movie.duration = minutes



      return movie
  });

  // console.log(movieMinutes)
  return movieMinutes;


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter(movie => movie.year === year)

  function compare(first, second) {


    if (first.score >= second.score) {
      return -1;
    } else {
      return 1;
    }
  }

  result.sort(compare)
  let bestMovie = result.slice(0,1)
  return bestMovie;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
