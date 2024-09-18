import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Welcome to the Employee Management System</h1>
            <p>This is the home page. You can customize this content as needed.</p>
        </div>
    );
};

export default Home;