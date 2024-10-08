var calcularEdad = function (fecha) {
    var fechaNacimiento = new Date(fecha);
    var añoNacimiento = fechaNacimiento.getFullYear();
    var mesNacimiento = fechaNacimiento.getMonth() + 1;
    var diaNacimiento = fechaNacimiento.getDate();
    console.log("La fecha ingresada es ".concat(añoNacimiento, " ").concat(mesNacimiento, " ").concat(diaNacimiento));
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1;
    var diaActual = fechaActual.getDate();
    console.log("La fecha ingresada es ".concat(añoActual, " ").concat(mesActual, " ").concat(diaActual));
    var difMeses = (mesActual - mesNacimiento);
    var edad = (añoActual - añoNacimiento);
    if (difMeses < 0 || (difMeses === 0 && diaActual < diaNacimiento)) {
        edad--;
    }
    return console.log("La edad actual es ".concat(edad));
};
calcularEdad("1968-12-30");
