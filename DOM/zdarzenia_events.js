'use strict';


var secondLink = document.getElementsByTagName('a')[1];// Tworzymy zmienna z drugim linkiem

console.log(secondLink);

function alarm(event){
    event.preventDefault();//zapobiegamy domyślnej akcji
    console.log('kliknięto kolejny link');
    
    console.log(event);
    
//    console.log(e.type);
}

secondLink.onclick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknięciu

var thirdLink = document.getElementsByTagName('a')[2];
//Tworzymy zmienna z trzecim linkiem

thirdLink.addEventListener('click', alarm);// wywołujemy funkcję alarm()na trzecim linku po kliknięciu za pomocą event Listenera

thirdLink.removeEventListener('click', alarm);