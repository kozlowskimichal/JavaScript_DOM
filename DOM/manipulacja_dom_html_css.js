'use strict';


var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej;

console.log(mainHeader);

mainHeader.innerHTML = "Treść nagłówka"; //Dodajemy treść do nagłówka

var link = document.getElementsByClassName ('link')[0];
//przypisujemy pierwszy link do zmiennej
console.log(link);

link.href = "http://akademia108.pl"; //Nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; //Nadpisujemy nazwę klasy w linku

mainHeader.style.color = "#11aa22"; //Dodajemy style do nagłówka