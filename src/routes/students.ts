
import express from 'express';
import {createStudents, deleteStudents, getStudents, modifyStudents, getStudentsById} from '../controllers/students';
const router = express.Router();

router.post('/', createStudents);
router.get('/', getStudents);
router.get('/:id', getStudentsById);
router.patch('/', modifyStudents);
router.delete('/', deleteStudents);

export {router as studentsRoute};
            