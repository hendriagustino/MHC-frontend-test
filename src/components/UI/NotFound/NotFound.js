import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

//presentational component for any Unknown pages the user visits
const notFound = () => (
    <div className={classes.NotFound}>
        <h1>Error 404. Page not found.</h1>
        <Link to="/">Return to Home Page</Link>
    </div>
);

export default notFound;





