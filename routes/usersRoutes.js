const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.post('/', usersController.addUser);
router.get('/', usersController.getAllUsers);
router.delete('/:id', usersController.deleteUserById);
router.put('/:id', usersController.updateUserById);
router.get('/:id', usersController.getUserById);

module.exports = router;