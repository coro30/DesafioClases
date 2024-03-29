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