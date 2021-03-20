//Tema ---> Funciones
//Bloque de código para realizar una tarea en particular
//Se ejecuta una función en JS cuando es llamada
//Declaración de función
function multiplica( primerOperando, segundoOperando ){
    var resultado = primerOperando * segundoOperando;
    console.log( "El resultado es: " + resultado );
}
multiplica( 25, 2 );

function multiplica3(){
    var resultado2 = 12 * 12;
    console.log( "El resultado es: " + parseInt(resultado2) );
}
multiplica3();

//Función como expresión
var resultado = function multiplica2( primerOperando ){
            //2 * 25 --> 50
            //resultado = 50;
    return 2 //* primerOperando;
}
console.log( resultado( 25 ) );

//Función Flecha
//Funciones que saluda a una persona
const saludaPersona = ( nombre ) => console.log
    ( "Tévez " + nombre );
saludaPersona( "Facherito" )

const suma = ( numero ) => console.log( numero * 2 );
suma( 12 );

//Ejercicio #1
//Escribir un programa que tenga una función a la que
//se le pasa como parámetro un número y devuelve como
//resulltado un texto que indica si el número es par o no

function determinaNumero( numero ){
    if( (numero % 2 ) == 1){
        console.log( "El número es impar" );
    }
    else if( (numero % 2) == 0 ){
        console.log( "El numero es par" );
    }
}
determinaNumero( 3 );

//Ejercicio #2
//Definir una función que muestre la informacion de un texto
//que se introduce como argumento y determinar si el texto
//contiene mayúsculas, minúsculas o ambas.

function determinaTexto( texto ){
    if( texto == texto.toUpperCase() ){
        console.log( "El texto está en mayúsculas" );
    }
    else if( texto == texto.toLowerCase()){
        console.log( "El texto está en minúsculas" )
    }
}
determinaTexto( "hola" );