import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/Layout/PublicLayout';
import PrivateLayout from '../components/Layout/PrivateLayout';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Employees from '../pages/Employees';
import NewEmployee from '../pages/NewEmployee';
import ViewEmployee from '../pages/ViewEmployee';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<PrivateLayout />}>
                    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
                    <Route path="/employees/new" element={<PrivateRoute><NewEmployee /></PrivateRoute>} />
                    <Route path="/employees/:id" element={<PrivateRoute><ViewEmployee /></PrivateRoute>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;