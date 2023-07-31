const { Router } = require('express');
const studentsRouter = require('./studentsRouter');
const teachersRouter = require('./teachersRouter');
const gradesRouter = require('./gradesRouter');
const coursesRouter = require('./coursesRouter');

const router = Router();

router.use('/students', studentsRouter);
router.use('/teachers', teachersRouter);
router.use('/grades', gradesRouter);
router.use('/courses', coursesRouter);

module.exports = router;
