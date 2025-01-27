import express from "express";
import * as usersControls from "../controls/usersControls.js";

const router = express.Router();

router.get("/", usersControls.getAllUsers);

router.get("/:id", usersControls.getUserById);

router.post("/", usersControls.createUser);

router.put("/:id", usersControls.updateUser);

router.delete("/:id", usersControls.deleteUser);

export default router;
