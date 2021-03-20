//Programación orientada a objetos 
//Creación de un objeto

// variable = { nombreCaracterísticas: Valor }
var celular = {
     color: "Verde",
     peso: "200 g",
     numCamaras: 5,
     sistema: "Android",
     duracionBateria: 10
  }
 
console.log( celular );
console.log( celular.numCamaras );console.log( celular[ "numCamaras" ] );

class galleta{
     constructor( tamaño, forma, sabor ){
         this.tamaño = tamaño;
         this.forma = forma;
         this.sabor = sabor;
     }
 }


let galletaChocolate = new galleta( "5x5 cm", "Cuadrado", "Chocolate" );
let galletaVainilla = new galleta( "3 cm", "Círculo", "Vainilla" );

console.log( galletaChocolate );
console.log( galletaVainilla );

console.log( galletaChocolate.sabor );
console.log( galletaVainilla[ "sabor" ] );