// Pseudocode for Signup.js
IMPORT React, useState from 'react'
IMPORT { useNavigate } from 'react-router-dom'
IMPORT api from '../../utils/api.js'
IMPORT { validateSignupForm } from '../../utils/validators.js' // Client-side validation

FUNCTION Signup():
    state = useState({ name: '', email: '', password: '', address: '', error: null, loading: false })
    name, email, password, address, error, loading = state variables

    navigate = useNavigate()

    FUNCTION handleChange(e):
        setState({ [e.target.name]: e.target.value })

    FUNCTION handleSubmit(e):
        e.preventDefault()
        validationErrors = validateSignupForm({ name, email, password, address })
        IF validationErrors:
            setState({ error: validationErrors })
            RETURN

        setState({ loading: true, error: null })
        try:
            response = api.post('/auth/signup', { name, email, password, address })
            alert('Registration successful! Please login.')
            navigate('/login')
        CATCH error:
            setState({ error: error.response.data.message || 'Signup failed.' })
        FINALLY:
            setState({ loading: false })

    RETURN (
        <FORM onSubmit={handleSubmit}>
            <INPUT type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
            <INPUT type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
            <INPUT type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
            <TEXTAREA name="address" value={address} onChange={handleChange} placeholder="Address" />
            {error && <DIV style={{ color: 'red' }}>{error}</DIV>}
            <BUTTON type="submit" DISABLED={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</BUTTON>
        </FORM>
    )