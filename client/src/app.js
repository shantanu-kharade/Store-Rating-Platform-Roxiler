// Pseudocode for App.js
IMPORT React
IMPORT BrowserRouter, Routes, Route from 'react-router-dom'
IMPORT { AuthProvider } from './context/AuthContext.js'
IMPORT PrivateRoute from './components/PrivateRoute.js'
IMPORT Login from './pages/Auth/Login.js'
IMPORT Signup from './pages/Auth/Signup.js'
IMPORT ChangePassword from './pages/Auth/ChangePassword.js'
IMPORT AdminDashboard from './pages/Admin/AdminDashboard.js'
IMPORT UserManagement from './pages/Admin/UserManagement.js'
IMPORT StoreManagement from './pages/Admin/StoreManagement.js'
IMPORT StoreList from './pages/User/StoreList.js'
IMPORT StoreOwnerDashboard from './pages/StoreOwner/StoreOwnerDashboard.js'
IMPORT Header from './components/Header.js'
IMPORT Footer from './components/Footer.js'
IMPORT NotFound from './pages/NotFound.js'

FUNCTION App():
    RETURN (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Login />} /> {/* Default route */}

                    {/* Private Routes - based on role */}
                    <Route
                        path="/admin/dashboard"
                        element={<PrivateRoute roles={['System Admin']}><AdminDashboard /></PrivateRoute>}
                    />
                    <Route
                        path="/admin/users"
                        element={<PrivateRoute roles={['System Admin']}><UserManagement /></PrivateRoute>}
                    />
                    <Route
                        path="/admin/stores"
                        element={<PrivateRoute roles={['System Admin']}><StoreManagement /></PrivateRoute>}
                    />

                    <Route
                        path="/user/stores"
                        element={<PrivateRoute roles={['Normal User']}><StoreList /></PrivateRoute>}
                    />
                    <Route
                        path="/change-password"
                        element={<PrivateRoute roles={['System Admin', 'Normal User', 'Store Owner']}><ChangePassword /></PrivateRoute>}
                    />

                    <Route
                        path="/store-owner/dashboard"
                        element={<PrivateRoute roles={['Store Owner']}><StoreOwnerDashboard /></PrivateRoute>}
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    )