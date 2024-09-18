import React from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/api';
import styles from '../styles/Employees.module.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteEmployee(id);
                setEmployees(employees.filter(emp => emp.id !== id));
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        }
    };

    return (
        <div className={styles.employeesContainer}>
            <h2>Employees</h2>
            <Link to="/employees/new" className={styles.addButton}>Add New Employee</Link>
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
                                <button onClick={() => handleDelete(employee.id)} className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;