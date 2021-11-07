"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));

var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Ejemplo de aplicación del programa con un cliente:
var impuesto = new _Impuesto["default"]("24000000", "16000000");
var cliente1 = new _Cliente["default"]("Willians Guerrero", impuesto);
console.log(cliente1.nombre);
cliente1.calcularImpuesto();
console.log(cliente1.calcularImpuesto());