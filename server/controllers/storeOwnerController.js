// Pseudocode for storeOwnerController.js

IMPORT Store from '../models/Store.js'
IMPORT Rating from '../models/Rating.js'
IMPORT User from '../models/User.js' // To get user names for ratings

FUNCTION getStoreOwnerDashboard(req, res):
    ownerId = req.user.id
    try:
        store = Store.findByOwnerId(ownerId)
        IF NOT store:
            RETURN res.status(404).json({ message: "No store found for this owner." })

        ratings = Rating.findByStoreId(store.id)
        averageRating = AVG(ratingValue FROM ratings)
        totalRatings = COUNT(ratings)

        // Get details of users who submitted ratings
        usersWhoRated = []
        FOR EACH rating IN ratings:
            user = User.findById(rating.userId)
            usersWhoRated.add({
                name: user.name,
                email: user.email,
                ratingValue: rating.ratingValue,
                submittedAt: rating.createdAt
            })

        RETURN res.status(200).json({
            storeName: store.name,
            averageTotalSubmittedRatings: averageRating || 0,
            totalRatingsCount: totalRatings,
            usersWhoSubmittedRatings: usersWhoRated
        })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

EXPORT getStoreOwnerDashboard