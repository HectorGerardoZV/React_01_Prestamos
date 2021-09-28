export function calcularTotal(cantidad, plazo){
let totalCantidad;
let procentaje;
let totalPlazo;
let procentajePlazo;
    //Calculando interes
    if(cantidad <=1000){procentaje = .25;} 
    else if(cantidad >1000 && cantidad<=5000){procentaje = .20;}
    else if(cantidad >5000 && cantidad<=10000){procentaje = .15;}
    else if(cantidad >10000){procentaje = .10;}
    totalCantidad = cantidad*procentaje;
    //Calculando total a pagar con plazo
    if(plazo===3){procentajePlazo=.05}
    else if(plazo===6){procentajePlazo=.10}
    else if(plazo===12){procentajePlazo=.15}
    else if(plazo===24){procentajePlazo=.20}
    totalPlazo = cantidad*procentajePlazo;
    return totalCantidad+totalPlazo+cantidad;
}