const { Student } = require('../db.js');

const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();

        res.json(students);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createStudent = async (req, res) => {
    try {
        const { name, lastName, age } = req.body;

        if (!name || !lastName || !age) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const newStudent = await Student.create({
            name,
            lastName,
            age,
        });

        res.status(201).json(newStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const editStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByPk(id);
        const { id: StudentId, ...rest } = req.body;

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.update({ ...rest });

        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.destroy();

        res.status(200).json({ message: 'Student deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getStudents, getStudentById, createStudent, editStudent, deleteStudent };
