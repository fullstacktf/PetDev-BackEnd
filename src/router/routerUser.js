const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.showAll);
router.get('/:id', userController.findById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
