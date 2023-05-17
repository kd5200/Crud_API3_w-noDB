import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

//In progress
const router = express.Router();

let users = [
    {
        "firstname": "Henry",
        "lastname": "Ford",
        "age": "45", 
        "Company": "Ford"
    },
    
    {
        "firstname": "Elon",
        "lastname": "Musk",
        "age": "48", 
        "Company": "Tesla"
    }
]

// all routes in here are starting with /user
router.get('/', (req,res) => {
    res.send(users);
})

router.post("/", (req,res) => {
    console.log('POST route reached')

    const user = req.body;

    // const userId = uuidv4();

                        //^ spread operator 
    users.push({ ...user, id: uuidv4()});

    res.send(`user with the name ${user.firstname} added to Database`)
});

router.get("/:id", (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser)
})

router.delete("/:id", (req,res) => {
    const { id } = req.params; 

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} has been deleted from our records :/`);
})

router.patch("/:id", (req,res) => {
    const { id } = req.params;

    const userToBeUpdated = users.find((user) => user.id === id)

    // in progress
})

export default router;
