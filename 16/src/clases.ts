class Coche {
    private _marca: string;
    private _modelo: string;
    private _color: string;
    private _anio: number;

    constructor(marca: string, modelo: string, color: string, anio: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._anio = anio;
    }
}

const coche = new Coche('Ford', 'Fiesta', 'Rojo', 2019);

