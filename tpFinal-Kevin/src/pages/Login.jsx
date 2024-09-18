import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const validateForm = (values) => {
        const errors = {};
        if (!values.username) errors.username = 'Username is required';
        if (!values.password) errors.password = 'Password is required';
        return errors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
        { username: '', password: '' },
        validateForm
    );

    const onSubmit = () => {
        // Aquí iría la lógica de autenticación real
        console.log('Login attempt:', values);
        login();
        navigate('/');
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <span className={styles.error}>{errors.username}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
};

export default Login;