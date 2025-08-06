import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ auth: {isAuthenticated, loading} }) => {
    // This code is different than the instructor's code, so here is a comment describing what happened
    // While authentication is being checked, we do not render anything
    if (loading) return null;

    // If there user is authenticated, render Outlet (placeholder for nested child routes such as dashboard)
    // If the user is not authenticated, redirect to the login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);