"use strict"

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

   while (numberOfFilms == "" || numberOfFilms == null|| isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
   }

}
start();

// Главный объект идет как глобальная переменная 
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
     let a = prompt("Один из последних просмотренных фильмов?", ""),
       b = prompt(" На сколько его оцените?", "");

     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
       personalMovieDB.movies[a] = b;
       console.log("done");
     } else {
       console.log("error");
       i--;
     }
   }
}
// rememberMyFilms();

function detectPersonalLevel() {
      if (personalMovieDB.count < 10) {
         alert("Просмотренно довльно мало фильмов");
      } else if (personalMovieDB.count < 30 && personalMovieDB >= 10) {
         alert("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
         alert("Вы киноман");
      } else {
      alert("error");
   }

}
// detectPersonalLevel();
// ---------------------------
function showMyDB(hidden) {
   if (!hidden)
      console.log(personalMovieDB);
} 
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимыйц жанр под номером ${i}`)
   }
}   
writeYourGenres();
// -----------------------------
// console.log(personalMovieDB);



