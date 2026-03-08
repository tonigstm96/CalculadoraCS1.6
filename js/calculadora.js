let pantalla = document.getElementById("screen");
let boton = document.getElementsByClassName("btn");
let operador = document.getElementsByClassName("operator");
let borrar = document.getElementById("erase");
let igual = document.getElementById("equals");
let punto = document.getElementById("dot");
let unOperador = false;
let numDecimal = false;
let bombHasBeenPlanted = new Audio('media/audio/bomb.mp3')
let iniciarBomba = new Audio('media/audio/open.mp3');
let sonidoBoton = new Audio('media/audio/boton.mp3');
let cajaCalculadora = document.querySelector('.container');
let todosBotones = document.querySelectorAll('input[type="button"]');
let defusar = new Audio('media/audio/defuse.mp3');
let botonMapa = document.getElementById('btn-mapa');


borrar.addEventListener("click", limpiarPantalla, false);
igual.addEventListener("click", calcular, false);
punto.addEventListener("click", decimal, false);
cajaCalculadora.addEventListener("click", function(){
    iniciarBomba.play();
}, {once: true});
botonMapa.addEventListener("click", cambiarMapa, false);

for (let i = 0; i < boton.length; i++) {
console.log(boton[i]);
boton[i].addEventListener("click", valor, false);
}

for (let i = 0; i <operador.length; i++) {
console.log(operador[i]);
operador[i].addEventListener("click", operacion, false);
}

for (let i = 0; i< todosBotones.length; i++){
    todosBotones[i].addEventListener("click", reproducirBoton, false);
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
    } 
    else {
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
    } 
    else {
        alert("Introduzca solo un operador!");
    }  
}

function limpiarPantalla(e) {
    pantalla.value = "";
    unOperador = false;
    numDecimal = false;
    defusar.play();
}

function calcular(e) {
    if (unOperador) {
        alert("Introduzca una operación correcta!")
    }
    else {  
        pantalla.value = eval(pantalla.value);
        unOperador = false;
        numDecimal = false;
        bombHasBeenPlanted.play();
    }
}

function reproducirBoton() {
    sonidoBoton.currentTime = 0;
    sonidoBoton.play();
}

function cambiarMapa(){
    document.body.classList.toggle('assault');
    if(document.body.classList.contains('assault')) {
        botonMapa.value = "Ir a de_dust2";
    }
    else{
        botonMapa.value = "Ir a cs_assault";
    }
}
