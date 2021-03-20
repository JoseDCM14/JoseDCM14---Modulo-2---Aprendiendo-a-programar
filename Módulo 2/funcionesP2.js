//Ejercicio #1
//Escribir un programa que obtenga el 
//precio de un producto, y calcule el
//precio total, ya que también se va a
//cobrar el costode envío unicamente
//si el precio del producto es mayor o
//igual a $399



//const prompt = require('prompt-sync')();


var nombreProducto = "Oso de peluche";
var precioProducto = 300;

function precioTotal( precio, nombreProducto ){
    var resultado = 0;
    if( precio <= 399 ){
        console.log( "Factura" )
        console.log( "Costo del " + nombreProducto + " es: " + precio );
        console.log( "Costo envío: 100" );
        resultado = precio + 100;
        console.log( "El total a pagar es: " + resultado );
    }
    else if( precio > 399 ){
        resultado = precio;
        console.log( "El total a pagar es: " + resultado );
    }
}

//precioTotal( precioProducto, nombreProducto );
//precioTotal( 500, "Libro" );

//Ambito de una función
function ambitoVar(){
    const i = 1;
    if ( i == 1 ){
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}
//ambitoVar();
//console.log( variableVar );

//let nombre = "Jose";
//nombre = "Diego";
//console.log( nombre );

function ambitoLet(){
    const i = 1;
    //if( i == 1 ){
        let variableLet = "Ambito de variable - Let";
        console.log( variableLet );
    //}
}
//ambitoLet();
//console.log( variableLet );

var mensaje = "texto";

function mensajeFuncion(){
    var mensaje = "Texto 2";
    console.log( mensaje )
}
console.log( mensaje );
mensajeFuncion();
console.log( mensaje );

multiplicar( 12 );

function multiplicar( primerOperando ){
    var resultado = 3 * primerOperando;
    console.log( "El resultado es: " + resultado );
}

//Declaración como expresión
var resultado = function multiplicar( primerOperando ){
    return 3 * primerOperando;
}
console.log(resultado( 12 ));