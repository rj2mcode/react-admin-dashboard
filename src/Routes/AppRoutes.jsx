import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../Pages/Auth/login/Login'

const AppRoutes = () => {
    return(
        <Router>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </Router>
    );
}

export default AppRoutes
