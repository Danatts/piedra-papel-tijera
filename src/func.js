function encontrarResultado(elec_jugador, elec_maquina) {

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
        console.log("Gana jugador");
    }else if (resultados_perdedores.includes(diferencia)){
        console.log("Gana máquina");
    }else{
        console.log("Empate");
    }
}
