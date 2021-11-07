export default class Cliente {
    constructor(nombre, impuesto) {

        this._nombre = () => {
            return nombre
        }
        this._impuesto = () => {
            return impuesto
        }
    }

    get nombre() {
        return this._nombre();
    }

    set nombre(new_name) {
        return this._nombre = () => {
            return new_name
        }
    }
    get impuesto() {
        return this._impuesto();
    }

    set impuesto(new_impuesto) {
        return this._impuesto = () => {
            return new_impuesto
        }
    }


    calcularImpuesto() {
        return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 21 / 100
    }
}
