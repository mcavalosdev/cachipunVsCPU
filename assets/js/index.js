/* Primero hay que capturar los contadores -----> ok
2.- Ahora hay que capturar el evento de los botones ----> ok
3.- botones de piedra papel o tijera deben gatillar un evento que sea capturado 
por el boton jugar y entrar al ciclo if.
4.-se debe modificar contador 

*/


function aleatorioCPU(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min)
    return num;

}

const userName = prompt("escribe tu nombre")

let btnPiedra = document.getElementById("piedra").addEventListener("click", ()=> console.log("boton piedra"));
let btnPapel = document.getElementById("papel").addEventListener("click", ()=> console.log("boton papel") );
let btnTijera = document.getElementById("tijera").addEventListener("click", ()=>  console.log("boton tijera"));



/*
const contadorUser = document.getElementById(userCounter);
const contadorCpu = document.getElementById(cpuCounter)
const userPapel =



// let opcionMaquina = aleatorioCPU(0, 2);

while (contador != ) {
    contador++;
    acumulador += ;




    if (opcionUsuario == piedra) {

        if (opcionMaquina == piedra) {
            alert("Empate");

        } else if (opcionMaquina == papel) {
            alert("Perdiste!");

        } else if (opcionMaquina == tijera) {
            alert("Ganaste!");
        }

    } else if (opcionUsuario == papel) {

        if (opcionMaquina == piedra) {
            alert("Ganaste!");

        } else if (opcionMaquina == papel) {
            alert("Empate!");

        } else if (opcionMaquina == tijera) {
            alert("Perdiste!");
        }

    } else if (opcionUsuario == tijera) {

        if (opcionMaquina == piedra) {
            alert("Perdiste");

        } else if (opcionMaquina == papel) {
            alert("Ganaste!");

        } else if (opcionMaquina == tijera) {
            alert("Empate!");
        }s

    } else {
        alert("Ups!! Has ingresado una opción NO válida, intentalo de nuevo!");

    }
}

*/