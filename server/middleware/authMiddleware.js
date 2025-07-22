// Pseudocode for authMiddleware.js

IMPORT jwt
IMPORT config from '../config/env.js' // Assuming JWT secret is in env config

FUNCTION protect(req, res, next):
    token = req.headers.authorization
    IF NOT token OR NOT token.startsWith('Bearer '):
        RETURN res.status(401).json({ message: "Not authorized, no token" })

    try:
        token = token.split(' ')[1]
        decoded = jwt.verify(token, config.JWT_SECRET)
        req.user = decoded.user // Attach user info (id, role) to request
        next()
    CATCH error:
        RETURN res.status(401).json({ message: "Not authorized, token failed" })

FUNCTION authorizeRoles(roles): // roles is an array, e.g., ['System Admin', 'Store Owner']
    RETURN (req, res, next) => {
        IF NOT roles.includes(req.user.role):
            RETURN res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` })
        next()
    }

EXPORT protect, authorizeRoles