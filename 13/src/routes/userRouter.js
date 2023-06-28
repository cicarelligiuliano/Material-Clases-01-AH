const router = require('express').Router();
const { getUsers } = require('../controllers/userController');
const { routeMiddleware } = require('../middlewares/middlewares');
const { upload } = require('../storage');
const fs = require('fs');
const path = require('path');

const users = [];

// router.get('/', routeMiddleware, getUsers);
router.get('/', (req, res) => {
    res.json(users);
});
router.get('/about', (req, res) => {
    res.send('GET ABOUT');
});

router.get('/getPDF', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../src/uploads/1687991619912-fe69fef5-f6ce-49b7-8dc7-12f727b30ee0.pdf'));
});

router.post('/', upload.single('image'), (req, res) => {
    const file = req.file;

    // if (!nombre || !apellido || !email || !password) {
    //     return res.status(400).json({ message: 'Please send all fields' });
    // }

    // if (!file) {
    //     return res.status(400).json({ message: 'Please send a file' });
    // }

    // users.push({ nombre, apellido, email, password, image: path.resolve(__dirname, `../../${file.path}`) });

    res.status(201).json({ message: 'Upload successfully', file: file });
});

module.exports = router;
