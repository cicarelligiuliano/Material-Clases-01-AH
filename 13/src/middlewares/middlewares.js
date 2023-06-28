const applicationMiddleware = (req, res, next) => {
    console.log('Soy un middleware DE APLICACION');
    next();
};

const routerMiddleware = (message) => {
    return (req, res, next) => {
        console.log(`Soy un middleware DE ENRUTADOR en ${message}`);
        next();
    };
};

const routeMiddleware = (req, res, next) => {
    console.log('Soy un middleware DE RUTA');
    next();
};

module.exports = { applicationMiddleware, routerMiddleware, routeMiddleware };
