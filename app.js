let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has adivinado el número secreto, en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor. Inténtalo de nuevo.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor. Inténtalo de nuevo.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Verificar si el numero generado ya fue sorteado 
    if (listanumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números ya han sido sorteados.');
    } else{
    // si el numero generado esat incluido en la lista
        if (listanumerosSorteados.includes(numeroGenerado)) {
        // llamar a la funcion de nuevo
            return generarNumeroSecreto();
        } else {
        listanumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }    
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limnpiarCaja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    //generar un nuevo numero secreto
    //Inicializar intentos a 1
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();