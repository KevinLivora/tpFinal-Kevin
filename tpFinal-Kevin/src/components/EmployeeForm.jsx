import React from 'react';
import useForm from '../hooks/useForm';
import styles from '../styles/EmployeeForm.module.css';

const EmployeeForm = ({ onSubmit, initialValues = {} }) => {
    const validateForm = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Name is required';
        if (!values.position) errors.position = 'Position is required';
        if (!values.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
        return errors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
        initialValues,
        validateForm
    );

    const onFormSubmit = () => {
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name || ''}
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
                    value={values.position || ''}
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
                    value={values.email || ''}
                    onChange={handleChange}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default EmployeeForm;