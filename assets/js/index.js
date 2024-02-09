




function aleatorioCPU(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min)
    return num;

}

const contadorUser = document.getElementById(userCounter);
const contadorCpu = document.getElementById(cpuCounter)

let piedra = 0;
let papel = 1;
let tijera = 2;
let alternativas = ["Piedra", "Papel", "Tijera"];

let opcionUsuario;
let opcionMaquina = aleatorioCPU(0, 2);

let contador = 0;
let acumulador = 0;


while (contador != ) {
    contador++;
    acumulador += ;


// opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
//alert("Escogiste " + alternativas[opcionUsuario]);
//alert("La máquina escogió " + alternativas[opcionMaquina]);


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
        }

    } else {
        alert("Ups!! Has ingresado una opción NO válida, intentalo de nuevo!");

    }
}

