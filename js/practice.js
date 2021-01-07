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


let numberOfFilms;
numberOfFilms = prompt("How many films have you watched so far?", "");
console.log(`You have already watched ${numberOfFilms} flims!`);

let lastWatchedFilms = prompt("Your last watched film?", "8 mile");
let score = prompt("Your score for this flim?", "9.5");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastWatchedFilms: score
    },
    actors: "",
    genres: "",
    private: false
};