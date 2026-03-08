let pantalla = document.getElementById("screen");
let boton = document.getElementsByClassName("btn");
let operador = document.getElementsByClassName("operator");
let borrar = document.getElementById("erase");
let igual = document.getElementById("equals");
let punto = document.getElementById("dot");
let unOperador = false;
let numDecimal = false;

borrar.addEventListener("click", limpiarPantalla, false);
igual.addEventListener("click", calcular, false);
punto.addEventListener("click", decimal, false);

for (let i = 0; i < boton.length; i++) {
console.log(boton[i]);
boton[i].addEventListener("click", valor, false);
}

for (let i = 0; i <operador.length; i++) {
console.log(operador[i]);
operador[i].addEventListener("click", operacion, false);
}

function valor(e){
    pantalla.value += e.target.value;
    unOperador = false;
}

function decimal(e){
    if (pantalla.value == "") {
        alert("Operación inválida");
    }
    else if (!numDecimal){
        pantalla.value += e.target.value;
        numDecimal = true;
    } else {
        alert("Solo puede introducir el punto una vez por número!");
    }
}

function operacion(e){
    if (pantalla.value == "") {
        alert("Operación inválida");
    }
    else if (!unOperador) {
        pantalla.value += e.target.value;
        unOperador = true;
        numDecimal = false;
    } else {
        alert("Introduzca solo un operador!");
    }  
}

function limpiarPantalla(e) {
    pantalla.value = "";
    unOperador = false;
}

function calcular(e) {
    if (unOperador) {
        alert("Introduzca una operación correcta!")
    }
    pantalla.value = eval(pantalla.value);
    unOperador = false;
    numDecimal = false;
}
