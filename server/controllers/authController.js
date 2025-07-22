// Pseudocode for authController.js

IMPORT User from '../models/User.js'
IMPORT bcryptjs
IMPORT jwt
IMPORT config from '../config/env.js'

FUNCTION signup(req, res):
    data = req.body (name, email, password, address)
    try:
        CHECK if User with email already exists
        IF EXISTS:
            RETURN res.status(400).json({ message: "User already exists with this email." })

        hashedPassword = bcryptjs.hash(data.password, 10)
        newUser = User.create({ name: data.name, email: data.email, password: hashedPassword, address: data.address, role: 'Normal User' })
        RETURN res.status(201).json({ message: "User registered successfully." })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION login(req, res):
    data = req.body (email, password)
    try:
        user = User.findByEmail(data.email)
        IF NOT user:
            RETURN res.status(400).json({ message: "Invalid credentials." })

        isMatch = bcryptjs.compare(data.password, user.password)
        IF NOT isMatch:
            RETURN res.status(400).json({ message: "Invalid credentials." })

        token = jwt.sign({ user: { id: user.id, role: user.role } }, config.JWT_SECRET, { expiresIn: '1h' })
        RETURN res.status(200).json({ token: token, user: { id: user.id, name: user.name, role: user.role } })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

FUNCTION changePassword(req, res):
    userId = req.user.id
    newPassword = req.body.newPassword
    try:
        // Apply validation for newPassword (min/max length, special char, uppercase)
        IF NOT newPassword OR newPassword.length < 8 OR newPassword.length > 16 OR NOT containsUppercase(newPassword) OR NOT containsSpecialChar(newPassword):
             RETURN res.status(400).json({ message: "New password must be 8-16 characters, contain 1 uppercase and 1 special character." })

        hashedNewPassword = bcryptjs.hash(newPassword, 10)
        UPDATE User SET password = hashedNewPassword WHERE id = userId
        RETURN res.status(200).json({ message: "Password updated successfully." })
    CATCH error:
        RETURN res.status(500).json({ message: "Server error", error: error.message })

EXPORT signup, login, changePassword