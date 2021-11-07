export default class Impuesto {
    constructor(monto_bruto_anual, deducciones = []) {

        this._monto_bruto_anual = () => {
            return monto_bruto_anual
        }

        this._deducciones = () => {
            return deducciones
        }
    }

    get monto_bruto_anual() {
        return this._monto_bruto_anual();
    }

    set monto_bruto_anual(new_monto_bruto_anual) {
        return this._monto_bruto_anual = ()=>{
            return new_monto_bruto_anual
        }
    }

    get deducciones() {
        return this._deducciones();
    }

    set deducciones(new_deducciones) {
        return this._deducciones = ()=>{
            return new_deducciones
        }
    }
}