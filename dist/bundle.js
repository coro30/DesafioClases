(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = function () {
      return nombre;
    };

    this._impuesto = function () {
      return impuesto;
    };
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    },
    set: function set(new_name) {
      return this._nombre = function () {
        return new_name;
      };
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto();
    },
    set: function set(new_impuesto) {
      return this._impuesto = function () {
        return new_impuesto;
      };
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 21 / 100;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto_anual) {
    var deducciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Impuesto);

    this._monto_bruto_anual = function () {
      return monto_bruto_anual;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuesto, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual();
    },
    set: function set(new_monto_bruto_anual) {
      return this._monto_bruto_anual = function () {
        return new_monto_bruto_anual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones();
    },
    set: function set(new_deducciones) {
      return this._deducciones = function () {
        return new_deducciones;
      };
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;
},{}],3:[function(require,module,exports){
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
},{"./Cliente.js":1,"./Impuesto.js":2}]},{},[3]);
