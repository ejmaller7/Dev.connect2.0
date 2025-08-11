import React from 'react';
import { Link } from 'react-router-dom';

// Actions in the dashboard the appear for a user when they are logged in. Links take you to different pages
const DashboardActions = () => {
  return (
    <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light"
            ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to="/add-experience" className="btn btn-light"
            ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link>
        <Link to="/add-education" className="btn btn-light"
            ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link>
    </div>
  )
};

export default DashboardActions;
