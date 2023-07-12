"use strict";
class Coche {
    constructor(marca, modelo, color, anio) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._anio = anio;
    }
}
const coche = new Coche('Ford', 'Fiesta', 'Rojo', 2019);
