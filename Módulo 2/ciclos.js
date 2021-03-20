//Ciclos - While
var contador1 = 5;
var contador2 = 30;
while( contador1 < 10 && contador2 > 25 ){
    console.log( "Contador1: " + contador1 +
    "Contador2: " + contador2 );
    contador1++;
    contador2--;
}

var contador3 = 0;
var condicion ="Hola";
//Ciclos do-while
do{
    console.log( "Entraste al ciclo do while" );
    contador3++;
    if( contador3 == 2 ){
        condicion = "Adios"
    };
}while( condicion == "Hola" );

var condicion2 = 25;
do{
    console.log( "Valor: " + condicion2 );
    condicion2 -= 5;
}while( condicion2 >= 5 );


//Ejercicio do-while
//Crear un programa que lea tantos números
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la
//suma de todos los números ingresados.
const prompt = require( 'prompt-sync' )();
var recibeNumero;
var suma = 0;
do{
    recibeNumero = prompt( "Dame un número: " ); //Recibimos un texto
    suma = suma + parseInt( recibeNumero );
}while( recibeNumero != 0 );

console.log( "La suma total es: " + suma );

//Ejercicio - While
recibeNumero = prompt( "Dame un número " );
while( recibeNumero != 0 ){
    suma = suma + parseInt( recibeNumero );
    recibeNumero = prompt( "Dame un número " );
}
console.log( "La suma total con while es: " + suma );