const router = require('express').Router();

const userController = require('../controllers/userController')

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getSingleUser)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUer)
router.put('/users/status/:id', userController.toggleUserStatus)
router.delete('/users/:id', userController.deleteUer)

module.exports = router