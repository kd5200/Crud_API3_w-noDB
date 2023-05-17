import express from 'express';
import { createdUser, getUsers, getUsersById, deleteUser, updateUser } from '../controllers/users.js';
//Imported the variables from my route that are needed for each route.


const router = express.Router();

// all routes in here are starting with /user
router.get("/", getUsers);

router.post("/", createdUser);

router.get("/:id", getUsersById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
