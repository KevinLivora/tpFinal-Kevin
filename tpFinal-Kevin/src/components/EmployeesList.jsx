import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Employees.module.css';

const EmployeeList = ({ employees, onDelete }) => {
    return (
        <table className={styles.employeesTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>{employee.email}</td>
                        <td>
                            <Link to={`/employees/${employee.id}`} className={styles.viewButton}>View</Link>
                            <button onClick={() => onDelete(employee.id)} className={styles.deleteButton}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeList;