import express from "express";
import {
    updateData,
    deleteData,
    getUser,
    createUser,
    getUsers
} from '../controllers/users.js'

const router = express.Router();


router.get('/', getUsers);

router.post('/', createUser);

// get the specific user detail using the unique id
router.get('/:id', getUser);

// now deleting the user based on the id
router.delete("/:id", deleteData);

// to do a partial edit of the user detail using patch
router.patch('/:id', updateData);

export default router;