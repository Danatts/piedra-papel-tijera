let contadorJug = 0;
let contadorMaq = 0;

function eleccionMaquina() {

    const opciones = ["piedra", "papel", "tijera"];
    let elec_aleatoria = Math.floor(Math.random() * opciones.length);
    let elec_maquina = opciones[elec_aleatoria];

    return elec_maquina;
}

function encontrarResultado(elec_jugador, elec_maquina) {

    let resultado = 0;

    let asociacion = {
        piedra: 2,
        papel: 3,
        tijera: 5
    };

    let resultados_ganadores = [-3, 1, 2];
    let resultados_perdedores = [-2, -1, 3];

    let num_jugador = asociacion[elec_jugador];
    let num_maquina = asociacion[elec_maquina];

    let diferencia = num_jugador - num_maquina;

    if (resultados_ganadores.includes(diferencia)) {
        contadorJug = contadorJug + 1;
        resultado = 1;
    } else if (resultados_perdedores.includes(diferencia)) {
        contadorMaq = contadorMaq + 1;
        resultado = 2;
    } else {
        resultado = 0;
    }

    return [resultado, contadorJug, contadorMaq];
}

function plasmarResultado(resultado, jugador, maquina) {  
    switch (resultado[0]) {
        case 1:
            document.getElementById("elecJugador").style.color = "green";
            document.getElementById("elecMaquina").style.color = "red";
            break;
        case 2:
            document.getElementById("elecJugador").style.color = "red";
            document.getElementById("elecMaquina").style.color = "green";
            break;
        case 0:
            document.getElementById("elecJugador").style.color = "orange";
            document.getElementById("elecMaquina").style.color = "orange";
            break;
    }

    document.getElementById("elecMaquina").innerHTML = maquina;
    document.getElementById("elecJugador").innerHTML = jugador;
    document.getElementById("resultado").innerHTML = `${resultado[1]} - ${resultado[2]}`
}

function main(id_clickeado) {
    let jugador = id_clickeado;
    let maquina = eleccionMaquina();
    let resultado = encontrarResultado(jugador, maquina);
    plasmarResultado(resultado, jugador, maquina);
}