"use strict";
// Practical work №1

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


let numberOfFilms;
// numberOfFilms = +prompt("How many films have you watched so far?", "");
// console.log(`You have already watched ${numberOfFilms} flims!`);

let ObjQuestions = {
    first: `How many films have you watched so far?`
};

function start() {
    numberOfFilms = +prompt(ObjQuestions.first, '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt(ObjQuestions.first, '');
    }
}

start();

let questions = ["Your last watched film?", "Your score for this flim?"];

let answers = [];
let lastWatchedFilms, score;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let defaultAnswers = {
    films: ['green mile', 'eminem', 'god', 'smells like', 'revolver', 
            'knifeshot', 'jungle', 'qwerty', 'mr robot', 'mrx'],
    scores: [9.5, 8.0, 9.6, 9.4, 6.5, 4.7, 8.8, 9.9, 7.8, 8.9]
};

let indexes = ['first', 'second', 'third', 'fourth', 'fifth', 
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];

let moviesInformation = [];

for (let indx = 0; indx < 10; indx++){
    let urLastWatchedFilm = prompt(questions[0], defaultAnswers.films[indx]);
    let urScoreForThisFilm = prompt(questions[1], defaultAnswers.scores[indx]);

    if (urLastWatchedFilm != null && urScoreForThisFilm != null && 
        urScoreForThisFilm != '' && urScoreForThisFilm != '') {
            personalMovieDB.movies[urLastWatchedFilm] = urScoreForThisFilm; 
    } else {
        alert(`Your answer is empty. Please, try again`);
        indx--;
    }
      
    let currentFilmsInformation = 
    `${indexes[indx]} film: ${urLastWatchedFilm} score: ${urScoreForThisFilm}`;
    alert(currentFilmsInformation);
    moviesInformation.push({
        id: indexes[indx],
        film: urLastWatchedFilm,
        score: urScoreForThisFilm
    });
}

function rememberMyFilms() {

    for (let indx = 0; indx < 10; indx++){
        let urLastWatchedFilm = prompt(questions[0], defaultAnswers.films[indx]);
        let urScoreForThisFilm = prompt(questions[1], defaultAnswers.scores[indx]);
    
        if (urLastWatchedFilm != null && urScoreForThisFilm != null && 
            urScoreForThisFilm != '' && urScoreForThisFilm != '') {
                personalMovieDB.movies[urLastWatchedFilm] = urScoreForThisFilm; 
        } else {
            alert(`Your answer is empty. Please, try again`);
            indx--;
        }
          
        let currentFilmsInformation = 
        `${indexes[indx]} film: ${urLastWatchedFilm} score: ${urScoreForThisFilm}`;
        alert(currentFilmsInformation);
        moviesInformation.push({
            id: indexes[indx],
            film: urLastWatchedFilm,
            score: urScoreForThisFilm
        });
    }
}
function detectLevel() {

    if (personalMovieDB.count < 10){
        console.log(`your watched films are less than 10 :()`);
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log(`your watched films are between 10 and 30, you r cool!`);
    } else if (personalMovieDB.count >= 30) {
        console.log(`OMG! U r god!`);
    } else {
        console.log(`unknown!`);
    }
}

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB(isHidden) {
    if (!isHidden) {
        console.log(personalMovieDB.movies);
    } else {
        console.log(personalMovieDB.movies);
    }
}

console.log(showMyDB(personalMovieDB.private));



function writeYourGenres() {
    const exapmleGenres = ['rock', 'blues', 'jazz'];
    for (let ind = 0; ind < 3; ind++) {
        personalMovieDB.genres[ind] = prompt(`Ваш любимый жанр под номером ${ind + 1}`,
                                         exapmleGenres[ind]);
    }
}

writeYourGenres();

function checkYourProfile(letsGoToWriteYourGenres) {
    let yourName = prompt(`Your name?`, '');

    if (yourName == '' || yourName == null) {
        console.log(`Please, type your name!`);
    } else {
        letsGoToWriteYourGenres();
    }
}

console.log(checkYourProfile(writeYourGenres));