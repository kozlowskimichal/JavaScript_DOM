'use strict';

var istniejacyWezel =
document.getElementById('parFirst').children[3];//przypisz do zmiennej istniejacyWezel

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);


var newElement = document.createElement('p');//stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf');//stwóz nowy tekst dla elementu p

newElement.appendChild(newElementContent);//dodaj tekst do elementu p




