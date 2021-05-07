function eleccionMaquina() {

    const opciones = ["piedra", "papel", "tijera"];
    let elec_aleatoria = Math.floor(Math.random() * opciones.length);
    let elec_maquina = opciones[elec_aleatoria];

    return elec_maquina;
}

function encontrarResultado(elec_jugador, elec_maquina) {

    let resultado = "";

    let asociacion = {
        piedra: 2,
        papel: 3,
        tijera: 5
    };

    let num_jugador = asociacion[elec_jugador];
    let num_maquina = asociacion[elec_maquina];
    let diferencia = num_jugador - num_maquina;
    let resultados_ganadores = [-3, 1, 2];
    let resultados_perdedores = [-2, -1, 3];
    if (resultados_ganadores.includes(diferencia)) {
        resultado = "Gana jugador";
    } else if (resultados_perdedores.includes(diferencia)) {
        resultado = "Gana máquina";
    } else {
        resultado = "Empate";
    }

    return resultado;

}

function main(id_clickeado) {
    let jugador = id_clickeado;
    let maquina = eleccionMaquina();
    document.getElementById("elecMaquina").innerHTML = "Yo elijo " + maquina +
        "<br>" + "Tú elijes " + jugador + "<br>" + encontrarResultado(jugador, maquina);
}