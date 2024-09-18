import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../../styles/Layout.module.css';

const PublicLayout = () => {
    return (
        <div className={styles.publicLayout}>
            <header className={styles.header}>
                <h1>Employee Management System</h1>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 Your Company Name</p>
            </footer>
        </div>
    );
};

export default PublicLayout;