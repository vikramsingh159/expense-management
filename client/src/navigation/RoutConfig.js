import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './../pages/HomePage/HomePage';
import Register from './../pages/Register/Register';
import Login from './../pages/Login/Login';


const RoutConfig = () => {
    return (
        <Router>

            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <ProtectedRoutes>
                            <HomePage />
                        </ProtectedRoutes>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </Router>
    )
}


export function ProtectedRoutes(props) {
    if (localStorage.getItem("user")) {
        return props.children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default RoutConfig