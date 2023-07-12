const algunaFuncion = (x: number, y: number): string | number => {
    if (x < 0 || y < 0) {
        return 'No se permiten numeros negativos';
    }
    return x + y;
};

