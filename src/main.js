import Cliente from './Cliente.js'
import Impuesto from './Impuesto.js'

//Ejemplo de aplicación del programa con un cliente:

let impuesto = new Impuesto("24000000", "16000000")
let cliente1 = new Cliente("Willians Guerrero", impuesto);

console.log(cliente1.nombre);

cliente1.calcularImpuesto();
console.log(cliente1.calcularImpuesto());

