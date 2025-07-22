// Pseudocode for PrivateRoute.js
IMPORT React from 'react'
IMPORT { Navigate } from 'react-router-dom'
IMPORT { useContext } from 'react'
IMPORT { AuthContext } from '../context/AuthContext.js'

FUNCTION PrivateRoute({ children, roles }):
    auth = useContext(AuthContext)

    IF auth.loading:
        RETURN <div>Loading...</div> // Or a spinner

    IF NOT auth.isAuthenticated:
        RETURN <Navigate to="/login" />

    IF roles AND NOT roles.includes(auth.user.role):
        RETURN <Navigate to="/unauthorized" /> // Or a custom unauthorized page

    RETURN children