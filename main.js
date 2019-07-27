'use strict';

// declaramos variables //
const happyface = document.querySelector('.happyface');
const updateBtn = document.querySelector('.happyface_btn');
const selectMood = document.querySelector('.happyface_selectmood');
const face = document.querySelector('.happyface_title');

// funcion para calcular números aleatorios max=100 //
function random(max) {
    return Math.floor(Math.random() * max);
}

// Declaramos otra función dónde llamamos a la carita y al contendor de las opciones de happy y sad //
function updateMood() {

    face.innerHTML = selectMood.value;

    const randomNum = random(100); // creamos una variable que va a contener la función de "random" para calcular los números aleatorios hasta 100. //

    //simplificamos los condicionales if y else por los operadores ternarios y aquí le decimos que si el número aleatorio es par pues que pinte de amarillo el fondo y si es impar que lo pinte de naranja. //

    randomNum % 2 === 0 ? happyface.classList.remove('changecolor') : happyface.classList.add('changecolor');

    /*if (randomNum % 2 === 0) {
        happyface.classList.remove('changecolor');
    } else {
        happyface.classList.add('changecolor');
    }*/
}

// Cuando pulse el botón, me pintará la carita que eliga en el fondo y cambiará el color dependiendo de si el aleatorio es par o impar. //
updateBtn.addEventListener('click', updateMood);