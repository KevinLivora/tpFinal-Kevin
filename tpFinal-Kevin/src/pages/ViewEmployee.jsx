import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEmployee } from '../services/api';
import styles from '../styles/ViewEmployee.module.css';

const ViewEmployee = () => {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    const fetchEmployee = async () => {
        try {
            const data = await getEmployee(id);
            setEmployee(data);
        } catch (error) {
            console.error('Error fetching employee:', error);
        }
    };

    if (!employee) return <div>Loading...</div>;

    return (
        <div className={styles.viewEmployeeContainer}>
            <h2>Employee Details</h2>
            <div className={styles.employeeDetails}>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Position:</strong> {employee.position}</p>
                <p><strong>Email:</strong> {employee.email}</p>
            </div>
            <Link to="/employees" className={styles.backButton}>Back to Employees</Link>
        </div>
    );
};

export default ViewEmployee;