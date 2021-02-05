const { Router } = require('express');
const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/userController');

const router = Router();
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;