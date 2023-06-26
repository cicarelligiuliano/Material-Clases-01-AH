const login = (req, res) => {
    const { usuario, contraseña } = req.body;
    if (usuario == 'pepe' && contraseña == '123456') {
        res.status(200).json({ token: 'AASDE1234' });
    } else {
        res.status(403).json({ message: 'Credenciales erroneas' });
    }
};

const authRoute = (req, res) => {
    const { authorization } = req.headers;

    const token = authorization.split(' ')[1];

    if (token == 'AASDE1234') {
        res.status(200).json({ message: 'Ruta autorizada' });
    } else {
        res.status(403).json({ message: 'Token invalido' });
    }
};

module.exports = { login, authRoute };
