// Pseudocode for validationMiddleware.js

FUNCTION validateUserCreation(req, res, next):
    data = req.body
    IF NOT data.name OR data.name.length < 20 OR data.name.length > 60:
        RETURN res.status(400).json({ message: "Name must be between 20 and 60 characters." })
    IF NOT data.email OR NOT isValidEmail(data.email):
        RETURN res.status(400).json({ message: "Invalid email address." })
    IF NOT data.password OR data.password.length < 8 OR data.password.length > 16 OR NOT containsUppercase(data.password) OR NOT containsSpecialChar(data.password):
        RETURN res.status(400).json({ message: "Password must be 8-16 characters, contain 1 uppercase and 1 special character." })
    IF NOT data.address OR data.address.length > 400:
        RETURN res.status(400).json({ message: "Address must be max 400 characters." })
    next()

FUNCTION validateStoreCreation(req, res, next):
    data = req.body
    IF NOT data.name:
        RETURN res.status(400).json({ message: "Store name is required." })
    IF NOT data.email OR NOT isValidEmail(data.email):
        RETURN res.status(400).json({ message: "Invalid email address for store." })
    IF NOT data.address OR data.address.length > 400:
        RETURN res.status(400).json({ message: "Store address must be max 400 characters." })
    next()

FUNCTION validateRatingSubmission(req, res, next):
    data = req.body
    IF NOT data.ratingValue OR data.ratingValue < 1 OR data.ratingValue > 5:
        RETURN res.status(400).json({ message: "Rating must be between 1 and 5." })
    next()

EXPORT validateUserCreation, validateStoreCreation, validateRatingSubmission