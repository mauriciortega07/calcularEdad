const calcularEdad = (fecha): void => {
    let fechaNacimiento: Date = new Date(fecha);
    let añoNacimiento: number = fechaNacimiento.getFullYear();
    let mesNacimiento: number = fechaNacimiento.getMonth()+1;
    let diaNacimiento: number = fechaNacimiento.getDate();
    console.log(`La fecha ingresada es ${añoNacimiento} ${mesNacimiento} ${diaNacimiento}`);
    let fechaActual: Date = new Date();
    let añoActual: number = fechaActual.getFullYear();
    let mesActual: number = fechaActual.getMonth()+1;
    let diaActual: number = fechaActual.getDate();
    console.log(`La fecha ingresada es ${añoActual} ${mesActual} ${diaActual}`);


    let difMeses = (mesActual - mesNacimiento);

    let edad = (añoActual - añoNacimiento);
    
    if (difMeses < 0 || (difMeses === 0 && diaActual < diaNacimiento)){
        edad--
    }
    return console.log(`La edad actual es ${edad}`);
}

calcularEdad("1968-12-30");