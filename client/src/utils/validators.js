// Pseudocode for validators.js

FUNCTION isValidEmail(email):
    // Basic regex for email validation
    RETURN /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

FUNCTION containsUppercase(password):
    RETURN /[A-Z]/.test(password)

FUNCTION containsSpecialChar(password):
    RETURN /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

FUNCTION validateSignupForm(data): // For name, email, password, address
    errors = {}
    IF data.name.length < 20 OR data.name.length > 60:
        errors.name = "Name must be between 20 and 60 characters."
    IF NOT isValidEmail(data.email):
        errors.email = "Invalid email address."
    IF data.password.length < 8 OR data.password.length > 16:
        errors.password = "Password must be 8-16 characters."
    IF NOT containsUppercase(data.password):
        errors.password = (errors.password || "") + " Password must contain at least one uppercase letter."
    IF NOT containsSpecialChar(data.password):
        errors.password = (errors.password || "") + " Password must contain at least one special character."
    IF data.address.length > 400:
        errors.address = "Address must be max 400 characters."
    RETURN Object.keys(errors).length > 0 ? errors : null

FUNCTION validateRatingForm(ratingValue):
    IF ratingValue < 1 OR ratingValue > 5:
        RETURN "Rating must be between 1 and 5."
    RETURN null

EXPORT isValidEmail, containsUppercase, containsSpecialChar, validateSignupForm, validateRatingForm