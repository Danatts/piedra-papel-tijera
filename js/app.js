let num_rondas = parseInt(prompt('¿A cuántas victorias quieres jugar?'));

let contador_jug = 0;
let contador_maq = 0;

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
        contador_jug = contador_jug + 1;
        resultado = 1;
    } else if (resultados_perdedores.includes(diferencia)) {
        contador_maq = contador_maq + 1;
        resultado = 2;
    } else {
        resultado = 0;
    }

    return [resultado, contador_jug, contador_maq];
}

function cambiarColor(maquina){
    document.getElementById(maquina + "m").style.background = "firebrick";
}

function reestablecerColor(maquina){
    document.getElementById(maquina + "m").style.background = "white";
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

function verificarResultado(punt_jugador, punt_maquina){
    let jugar_denuevo = Boolean;
    if (punt_jugador == num_rondas || punt_maquina == num_rondas) {
        document.getElementById("piedra").setAttribute('disabled', true);
        document.getElementById("papel").setAttribute('disabled', true);
        document.getElementById("tijera").setAttribute('disabled', true);
        if (punt_jugador == num_rondas) {
            jugar_denuevo = confirm('Tú ganas \n¿Quiéres jugar de nuevo?');            
        }else{
            jugar_denuevo = confirm('Gano yo \n¿Quiéres jugar de nuevo?');            
        }
    }
    return jugar_denuevo;
}


function main(id_clickeado) {
    let jugador = id_clickeado;
    let maquina = eleccionMaquina();
    let resultado = encontrarResultado(jugador, maquina);
    plasmarResultado(resultado, jugador, maquina);
    let jugar_denuevo = verificarResultado(resultado[1], resultado[2]);
    cambiarColor(maquina);
    setInterval(() => {
        reestablecerColor(maquina);
    }, 180);
    if (jugar_denuevo == true) {
        window.location.reload();
    }
}