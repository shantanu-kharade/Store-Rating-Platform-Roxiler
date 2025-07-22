// Pseudocode for adminController.js

IMPORT User from '../models/User.js'
IMPORT Store from '../models/Store.js'
IMPORT Rating from '../models/Rating.js'
IMPORT bcryptjs // For hashing passwords when adding users

FUNCTION getAdminDashboardData(req, res):
    try:
        totalUsers = COUNT(User)
        totalStores = COUNT(Store)
        totalRatingsSubmitted = COUNT(DISTINCT userId FROM Ratings)

        RETURN res.status(200).json({
            totalUsers,
            totalStores,
            totalRatingsSubmitted
        })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION addUser(req, res):
    data = req.body (name, email, password, address, role)
    try:
        CHECK if User with email already exists
        IF EXISTS:
            RETURN res.status(400).json({ message: "User already exists with this email." })

        hashedPassword = bcryptjs.hash(data.password, 10)
        newUser = User.create({ name: data.name, email: data.email, password: hashedPassword, address: data.address, role: data.role })

        // If adding a Store Owner, ensure a store is also created or associated
        IF data.role == 'Store Owner':
            // Logic to create a new store or associate with an existing one.
            // For simplicity, let's assume a store is created for this owner.
            newStore = Store.create({ name: `${data.name}'s Store`, email: data.email, address: data.address, ownerId: newUser.id })
            // Potentially link newUser.id to newStore.id, depending on schema design
            UPDATE User SET storeId = newStore.id WHERE id = newUser.id // If Users table stores storeId for Store Owners

        RETURN res.status(201).json({ message: "User added successfully.", user: newUser })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION getAllUsers(req, res):
    query = req.query // For filters (name, email, address, role) and sorting (sortField, sortOrder)
    try:
        users = User.findAll(query.filters, query.sortField, query.sortOrder)
        // For Store Owner, also fetch associated store rating (aggregate)
        usersWithRatings = users.map(user => {
            IF user.role == 'Store Owner':
                store = Store.findByOwnerId(user.id)
                IF store:
                    averageRating = AVG(ratingValue FROM Ratings WHERE storeId = store.id)
                    user.rating = averageRating // Add rating field to user object
            RETURN user
        })
        RETURN res.status(200).json({ users: usersWithRatings })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION getUserDetails(req, res):
    userId = req.params.id
    try:
        user = User.findById(userId)
        IF NOT user:
            RETURN res.status(404).json({ message: "User not found." })

        // If Store Owner, fetch store details and average rating
        IF user.role == 'Store Owner':
            store = Store.findByOwnerId(user.id)
            IF store:
                averageRating = AVG(ratingValue FROM Ratings WHERE storeId = store.id)
                user.storeDetails = store
                user.averageStoreRating = averageRating

        RETURN res.status(200).json({ user: user })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

// (Similar functions for updateUser, deleteUser, addStore, getAllStores, getStoreDetails, updateStore, deleteStore)

EXPORT getAdminDashboardData, addUser, getAllUsers, getUserDetails, /* etc. */