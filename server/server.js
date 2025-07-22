// Pseudocode for server.js

IMPORT express
IMPORT dotenv
IMPORT cors
IMPORT helmet
IMPORT db_connection from './config/db.js'
IMPORT authRoutes from './routes/authRoutes.js'
IMPORT userRoutes from './routes/userRoutes.js'
IMPORT storeRoutes from './routes/storeRoutes.js'
IMPORT ratingRoutes from './routes/ratingRoutes.js'
IMPORT adminRoutes from './routes/adminRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json()) // For parsing application/json
app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded
app.use(cors()) // Enable CORS
app.use(helmet()) // Security headers

// Database Connection
db_connection.connect() // Connect to the relational database

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/stores', storeRoutes)
app.use('/api/ratings', ratingRoutes)
app.use('/api/admin', adminRoutes)

// Global Error Handling Middleware (
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})