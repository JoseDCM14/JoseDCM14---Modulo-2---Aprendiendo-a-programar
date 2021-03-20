//Ejemplo
//Dado un número, separarlo en centenas, decenas y unidades.
//Intercambiar la posicion entre las centenas y las unidades
//e imprimir el número final.

var numeroCompleto = 738;
if( numeroCompleto <= 999 && numeroCompleto > 99 ){
    var centenas = parseInt( ( numeroCompleto / 100 ));
    //var centenas = parseInt( 738 / 100 );
    //console.log( centenas * 100 );
    var decenas = parseInt( (numeroCompleto % 100) / 10);
    // decenas = parseInt( 38 / 10 )
    //console.log ( decenas )
    var unidades = (numeroCompleto % 100) - (decenas*10);
    //unidades = parseInt( 38 - 30 )
    //console.log( unidades );
    console.log ( "El valor final es: " + unidades + decenas + centenas );

}
else{
    console.log( "Ingresa un número de 3 cifras");
}

//Condicional switch

var conSwitch = "Jose";
var edad = 16;

switch( conSwitch ){
    case 2:
        console.log( "El valor ingresado es: 2" );
        break; 
    case 6:
        console.log( "El valor ingresado es: 6" );
        break;
    case "Jose":
        console.log( "Hola Jose" );
        if( edad == 16 ){
            console.log( "Callese" );
        }
        break;
    default:
        console.log( "El valor ingresado es distinto" );
        break;
}