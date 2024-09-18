import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { createEmployee } from '../services/api';
import styles from '../styles/EmployeeForm.module.css';

const NewEmployee = () => {
    const navigate = useNavigate();

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name is required';
        if (!values.position) errors.position = 'Position is required';
        if (!values.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
        return errors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
        { name: '', position: '', email: '' },
        validateForm
    );

    const onSubmit = async () => {
        try {
            await createEmployee(values);
            navigate('/employees');
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add New Employee</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={values.position}
                        onChange={handleChange}
                    />
                    {errors.position && <span className={styles.error}>{errors.position}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Add Employee</button>
            </form>
        </div>
    );
};

export default NewEmployee;