const { getStudents, getStudentById, createStudent, editStudent, deleteStudent } = require('../controllers/studentsControllers');

const router = require('express').Router();

router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
