
var arregloNombres = [ "Jose", "Diana", "Omar", "Paola" ];

console.log( arregloNombres[2] );
arregloNombres[2] = "Rosa" ;
console.log( arregloNombres[2] );
delete arregloNombres[2];
console.log( arregloNombres );
console.log("La cantidad de elementos en el arreglo es: "
            + arregloNombres.length );
arregloNombres.push( "Cristina" );
console.log( arregloNombres );
arregloNombres.pop();
console.log( arregloNombres);

arregloNombres.splice( 1, 1, "Cristina" );
console.log( arregloNombres );

arregloNombres.splice(1, 2 );
console.log( arregloNombres );

//Ejercicio
//Realizar un programa que lea por teclado 5 notas/calificaciones
//y muestre el promedio de estas.
const prompt = require( 'prompt-sync')();
var calificaciones = [];
calificaciones[0] = prompt( "Dame la primera calif: " );
//console.log( calificaciones[0] );
calificaciones[1] = prompt( "Dame la segunda calif: " );
calificaciones[2] = prompt( "Dame la tercera calif: " );
calificaciones[3] = prompt( "Dame la cuarta calif: " );
calificaciones[4] = prompt( "Dame la quinta calif: " );

//var resultado = ( calificaciones[0] + calificaciones[1] +
           //       calificaciones[2] + calificaciones[3] +
              //   calificaciones[4] ) / 5;
var calif1 = calificaciones[0];
var calif2 = calificaciones[1];
var calif3 = calificaciones[2];
var calif4 = calificaciones[3];
var calif5 = calificaciones[4];

var resultado =  parseInt(calif1) + parseInt(calif2) + parseInt(calif3) +
                parseInt(calif4) + parseInt(calif5);
console.log( resultado );

resultado /= 5;
console.log( resultado );

var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = [ "Adios", "Buenas", "Noches"];
console.log( concatenaN1.concat( concatenaN2) );