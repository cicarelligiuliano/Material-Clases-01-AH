const getFyH = (req, res) => {
    const date = new Date();
    res.json({ fyh: date.toLocaleString() });
};

let numeroDeVisitas = 0;
const getVisitas = async (req, res) => {
    try {
        // return res.status(503).json({ msg: 'Disculpen estamos trabajando en esta ruta' });
        numeroDeVisitas++;
        asdasdsadas;

        res.send(`El numero de visitas es ${numeroDeVisitas}`);
    } catch (error) {
        res.status(500).json({ Error: error });
    }
};

const getGeneral = (req, res) => {
    res.send('Bienvenidos al servidor de express');
};

module.exports = { getFyH, getVisitas, getGeneral };
