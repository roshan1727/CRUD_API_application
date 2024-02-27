import {
    v4 as uuidv4
} from 'uuid';
let users = [];
export const createUser = (req, res) => {
    console.log("POST route has done successfully");
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {
        ...user,
        id: userId
    };
    users.push(userWithId);

    res.send(`POST route has done successfully and the user is ${user.Fname}`);
};

export const getUser = (req, res) => {
    const {
        id
    } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteData = (req, res) => {
    const {
        id
    } = req.params;
    console.log(id);
    users = users.filter((user) => user.id !== id);
    res.send(`The deleted id: ${id} has been done successfully`);
}

export const updateData = (req, res) => {
    const uniqueId = req.params.id;
    const {
        fName,
        Lname,
        age
    } = req.body; // Extract from req.body
    let userDetail = users.find((user) => user.id === uniqueId);
    console.log(userDetail.Fname, "/", userDetail.Lname);
    if (fName) {
        userDetail.Fname = fName;
    }
    if (Lname) {
        userDetail.Lname = Lname;
    }
    if (age) {
        userDetail.age = age;
    }
    res.send(`User with the id ${uniqueId} has been updated`);
};


export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};