/*Primero se han definido las variables para identificarlas en el DOM, la pantalla, botones, variables para señalar estados y audios 
que sonarán de forma interactiva.*/
let pantalla = document.getElementById("screen");
let boton = document.getElementsByClassName("btn");
let operador = document.getElementsByClassName("operator");
let borrar = document.getElementById("erase");
let igual = document.getElementById("equals");
let punto = document.getElementById("dot");
let cajaCalculadora = document.querySelector('.container');
let todosBotones = document.querySelectorAll('input[type="button"]');
let botonMapa = document.getElementById('btn-mapa');
let linkGithub = document.getElementById('link-github');
let unOperador = false;
let numDecimal = false;
let bombHasBeenPlanted = new Audio('media/audio/bomb.mp3')
let iniciarBomba = new Audio('media/audio/open.mp3');
let sonidoBoton = new Audio('media/audio/boton.mp3');
let defusar = new Audio('media/audio/defuse.mp3');
let disparadEnLaBrecha = new Audio('media/audio/fire.mp3');

/*Después se han añadido los event listeners para que al clicar un botón, enlace o incluso un contenedor llame a una función concreta
 */
borrar.addEventListener("click", limpiarPantalla, false);
igual.addEventListener("click", calcular, false);
punto.addEventListener("click", decimal, false);
cajaCalculadora.addEventListener("click", inicioBomba, {once: true});
botonMapa.addEventListener("click", cambiarMapa, false);
linkGithub.addEventListener("click", fireInDaHole, false);

/*Bucles for que añaden a cada botón un event listener numerado con el índice de un bucle for, ya que get elements by class name 
da una colección
 */
for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", valor, false);
}

for (let i = 0; i < operador.length; i++) {
    operador[i].addEventListener("click", operacion, false);
}

for (let i = 0; i< todosBotones.length; i++){
    todosBotones[i].addEventListener("click", reproducirBoton, false);
}

/*Funciones para el funcionamiento de la calculadora. Utilizan el parámetro e que representa el evento concreto (un click)
 */
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

/*Funciones que reproducen sonidos de CS 1.6
 */
function inicioBomba(){
    iniciarBomba.play();
}

function reproducirBoton() {
    sonidoBoton.currentTime = 0; //Con currentTime = 0 el sonido se reinicia cuando volvemos a llamar a la función, así no se solapa el sonido de pulsar botones.
    sonidoBoton.play();
}

function fireInDaHole(){
    disparadEnLaBrecha.play();
}

/*Toggle para cambiar al "modo noche", representado por un mapa de Counter Strike más oscuro. Cambia la clase para que el css actúe de forma distina.
 */
function cambiarMapa(){
    document.body.classList.toggle('assault');
    if(document.body.classList.contains('assault')) {
        botonMapa.value = "Ir a de_dust2";
    }
    else{
        botonMapa.value = "Ir a cs_assault";
    }
}


