// Pseudocode for userRoutes.js
IMPORT express
IMPORT userController from '../controllers/userController.js'
IMPORT authMiddleware from '../middleware/authMiddleware.js'
IMPORT validationMiddleware from '../middleware/validationMiddleware.js'

router = express.Router()

router.use(authMiddleware.protect, authMiddleware.authorizeRoles(['Normal User'])) // All normal user routes require normal user role

router.get('/stores', userController.getAllStoresForNormalUser) // With search, filter, and sort
router.post('/stores/:storeId/rate', validationMiddleware.validateRatingSubmission, userController.submitRating)
router.put('/stores/:storeId/rate', validationMiddleware.validateRatingSubmission, userController.modifyRating)
// Note: change-password handled in authRoutes.js

EXPORT router