
import express from 'express';
import {createUsers, deleteUsers, getUsers, modifyUsers} from '../controllers/users';
const router = express.Router();

router.post('/', createUsers);
router.get('/', getUsers);
router.patch('/', modifyUsers);
router.delete('/', deleteUsers);

export {router as usersRoute};
            