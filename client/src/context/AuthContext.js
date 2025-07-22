// Pseudocode for AuthContext.js
IMPORT React, useState, useEffect, createContext from 'react'
IMPORT api from '../utils/api.js'

AuthContext = createContext()

FUNCTION AuthProvider({ children }):
    state = useState({ user: null, token: null, isAuthenticated: false, loading: true })
    setUser, setToken, setIsAuthenticated, setLoading = state setters

    useEffect:
        // Check for token in localStorage on component mount
        token = localStorage.getItem('token')
        IF token:
            try:
                decoded = jwt.decode(token) // Decode token to get user info without server call
                setUser({ id: decoded.user.id, name: decoded.user.name, role: decoded.user.role })
                setToken(token)
                setIsAuthenticated(true)
                api.setAuthToken(token) // Set token for all future API requests
            CATCH error:
                localStorage.removeItem('token')
                setUser(null)
                setToken(null)
                setIsAuthenticated(false)
        setLoading(false)

    FUNCTION login(email, password):
        try:
            response = api.post('/auth/login', { email, password })
            localStorage.setItem('token', response.data.token)
            setUser(response.data.user)
            setToken(response.data.token)
            setIsAuthenticated(true)
            api.setAuthToken(response.data.token)
            RETURN true
        CATCH error:
            console.error(error)
            RETURN false

    FUNCTION logout():
        localStorage.removeItem('token')
        setUser(null)
        setToken(null)
        setIsAuthenticated(false)
        api.removeAuthToken()

    value = { user, token, isAuthenticated, loading, login, logout }
    RETURN <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

EXPORT AuthContext, AuthProvider