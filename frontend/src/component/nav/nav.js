// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export  const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/exercises" style={styles.navLink}>Exercises</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: 'black',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    navList: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: 0,
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    }
};

export default Navbar;
