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