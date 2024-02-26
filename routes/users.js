import express from "express";
import {
    v4 as uuidv4
} from 'uuid';


const router = express.Router();
let users = []

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    console.log("POST route has done sucessfully");
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {
        ...user,
        id: userId
    }
    users.push(userWithId);

    res.send(`POST route has done sucessfully and the user is ${user.Fname}`);
});


// get the specific user deatil usoing the unique id
router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

// now deleteing the user based on the id
router.delete("/:id", (req, res) => {
    const {
        userid
    } = req.params;
    console.log(userid);
    users = users.filter((user) => user.id !== userid);
    res.send(`The deleted id:${userid} has been done successfully`);
});





export default router;