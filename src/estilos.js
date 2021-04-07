function asignarEstilo(texto, color, negrilla = false) {

    let nuevo_texto = "";

    let estilos = {
        amarillo: "\u001b[33m",
        blanco: "\u001b[37m",
        cyan: "\u001b[36m",
        rojo: "\u001b[31m",
        verde: "\u001b[32m",
        negrilla: "\u001b[1m",
        reset : "\u001b[0m", 
    }

    if (negrilla == false) {
        nuevo_texto = estilos["negrilla"] + estilos[color] + texto 
        + estilos["reset"];
    }else{
        nuevo_texto = estilos[color] + texto + estilos["reset"];
    }

    return nuevo_texto;
};

export {asignarEstilo};