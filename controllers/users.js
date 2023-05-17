//Controller file which encapsulates all of the routes logic/functionality which then is imported to the routes/users.js

import { v4 as uuidv4 } from 'uuid';

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

export const getUsers = (req,res) => {
    res.send(users);
}

export const createdUser = (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`user with the name ${user.firstname} added to Database`)}


export const getUsersById = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser)
}

export const deleteUser = (req,res) => {
    const { id } = req.params; 

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} has been deleted from our records :/`);
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName,age, company } = req.body;

    const user = users.find((user) => user.id === id)


    if(firstName) {
        user.firstname = firstName;
    }

    if(lastName) {
        user.lastname = lastName;
    }

    if(age) {
        user.age = age;
    }

    if(company) {
        user.Company = company;
    }

    res.send(`User with the id ${id} has been updated`)
    
}


