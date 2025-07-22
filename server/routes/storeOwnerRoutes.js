// Pseudocode for storeOwnerRoutes.js
IMPORT express
IMPORT storeOwnerController from '../controllers/storeOwnerController.js'
IMPORT authMiddleware from '../middleware/authMiddleware.js'

router = express.Router()

router.use(authMiddleware.protect, authMiddleware.authorizeRoles(['Store Owner'])) // All store owner routes require store owner role

router.get('/dashboard', storeOwnerController.getStoreOwnerDashboard)
// Note: change-password handled in authRoutes.js

EXPORT router