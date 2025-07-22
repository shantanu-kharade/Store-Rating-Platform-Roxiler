// Pseudocode for userController.js

IMPORT Store from '../models/Store.js'
IMPORT Rating from '../models/Rating.js'

FUNCTION getAllStoresForNormalUser(req, res):
    query = req.query // For search (name, address), filter, and sort
    userId = req.user.id
    try:
        stores = Store.findAll(query.search, query.filter, query.sortField, query.sortOrder)
        // For each store, fetch overall rating and current user's rating
        storesWithRatings = []
        FOR EACH store IN stores:
            overallRating = AVG(ratingValue FROM Ratings WHERE storeId = store.id)
            myRating = Rating.findByUserIdAndStoreId(userId, store.id)
            storesWithRatings.add({
                ...store,
                overallRating: overallRating || 0,
                mySubmittedRating: myRating ? myRating.ratingValue : null
            })
        RETURN res.status(200).json({ stores: storesWithRatings })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION submitRating(req, res):
    storeId = req.params.storeId
    userId = req.user.id
    ratingValue = req.body.ratingValue
    try:
        existingRating = Rating.findByUserIdAndStoreId(userId, storeId)
        IF existingRating:
            RETURN res.status(400).json({ message: "You have already submitted a rating for this store. Please modify it." })

        newRating = Rating.create({ storeId, userId, ratingValue })
        RETURN res.status(201).json({ message: "Rating submitted successfully.", rating: newRating })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION modifyRating(req, res):
    storeId = req.params.storeId
    userId = req.user.id
    newRatingValue = req.body.ratingValue
    try:
        rating = Rating.findByUserIdAndStoreId(userId, storeId)
        IF NOT rating:
            RETURN res.status(404).json({ message: "No rating found to modify for this store." })

        UPDATE Rating SET ratingValue = newRatingValue WHERE id = rating.id
        RETURN res.status(200).json({ message: "Rating modified successfully." })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

EXPORT getAllStoresForNormalUser, submitRating, modifyRating