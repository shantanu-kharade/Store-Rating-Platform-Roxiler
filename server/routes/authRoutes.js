// Pseudocode for authRoutes.js
IMPORT express
IMPORT authController from '../controllers/authController.js'
IMPORT validationMiddleware from '../middleware/validationMiddleware.js'

router = express.Router()

router.post('/signup', validationMiddleware.validateUserCreation, authController.signup)
router.post('/login', authController.login)
router.post('/change-password', authMiddleware.protect, authController.changePassword)

EXPORT router