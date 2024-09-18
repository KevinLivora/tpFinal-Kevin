import React from 'react';
import styles from '../styles/ViewEmployee.module.css'; 

const EmployeeDetails = ({ employee }) => {
    return (
        <div className={styles.employeeDetails}>
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Email:</strong> {employee.email}</p>
        </div>
    );
};

export default EmployeeDetails;