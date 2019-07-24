const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.showAll);
router.get('/:id', userController.findById);
router.put('/:id', userController.updateUser);
router.post('/', userController.addUser);
router.delete(':id', userController.deleteUser);
module.exports = router;
