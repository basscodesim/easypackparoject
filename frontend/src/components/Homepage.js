import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';



const Homepage = () => {
    return (
        <div className="homepage-container">
            <button className="book-now-button">
                <Link to="/book">Book Now</Link>
            </button>
            <button className="view-park-button">
                <Link to="/availability">View Park</Link>
            </button>
            <div className="admin-link">
                <Link to="/admin">Admin Dashboard</Link> 
            </div>
        </div>

        
    );
};

export default Homepage;
