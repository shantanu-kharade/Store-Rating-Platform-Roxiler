// Pseudocode for adminRoutes.js
IMPORT express
IMPORT adminController from '../controllers/adminController.js'
IMPORT authMiddleware from '../middleware/authMiddleware.js'
IMPORT validationMiddleware from '../middleware/validationMiddleware.js'

router = express.Router()

router.use(authMiddleware.protect, authMiddleware.authorizeRoles(['System Admin'])) // All admin routes require admin role

// Admin Dashboard
router.get('/dashboard', adminController.getAdminDashboardData)

// User Management (Admin can add any user type)
router.post('/users', validationMiddleware.validateUserCreation, adminController.addUser)
router.get('/users', adminController.getAllUsers) // With filter and sort options
router.get('/users/:id', adminController.getUserDetails)
router.put('/users/:id', validationMiddleware.validateUserCreation, adminController.updateUser) // Or a more specific update
router.delete('/users/:id', adminController.deleteUser)

// Store Management
router.post('/stores', validationMiddleware.validateStoreCreation, adminController.addStore)
router.get('/stores', adminController.getAllStores) // With filter and sort options
router.get('/stores/:id', adminController.getStoreDetails)
router.put('/stores/:id', validationMiddleware.validateStoreCreation, adminController.updateStore)
router.delete('/stores/:id', adminController.deleteStore)

EXPORT router