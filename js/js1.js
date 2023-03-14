

let boton_1 = document.getElementById('boton_1');

let textooculto_1 = document.getElementById('textooculto_1');

boton_1.addEventListener('click', funcion1);

function funcion1 () {
    textooculto_1.classList.toggle('mostrar1');

    if(textooculto_1.classList.contains('mostrar1')){
        boton_1.innerHTML = 'Ocultar cursos';
    }
    else {
        boton_1.innerHTML = 'Ver cursos';
    }
}

let boton_2 = document.getElementById('boton_2');

let textooculto_2 = document.getElementById('textooculto_2');

boton_2.addEventListener('click', funcion2)

function funcion2 () {
    textooculto_2.classList.toggle('mostrar1');

    if(textooculto_2.classList.contains('mostrar1')){
        boton_2.innerHTML = 'Ocultar asistencias y presentaciones a congresos';
    }
    else {
        boton_2.innerHTML = 'Ver asistencias y presentaciones a congresos';
    }
}

let boton_3 = document.getElementById('boton_3');

let textooculto_3 = document.getElementById('textooculto_3');

boton_3.addEventListener('click', funcion3)

function funcion3 () {
    textooculto_3.classList.toggle('mostrar1');

    if(textooculto_3.classList.contains('mostrar1')){
        boton_3.innerHTML = 'Ocultar competencias';
    }
    else {
        boton_3.innerHTML = 'Ver competencias';
    }
}

