const express = require("express");
const { createUser, getAllUsers } = require("./controller");

const router = express.Router();

//create user
router.post("/user", createUser);
router.get("/users", getAllUsers);

module.exports = router;