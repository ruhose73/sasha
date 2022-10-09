const Router = require('express')
const router = new Router
const AuthController = require('../controllers/authController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/getInfo', AuthController.getInfo)

module.exports = router