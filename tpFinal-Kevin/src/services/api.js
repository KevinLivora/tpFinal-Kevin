const API_URL = 'http://localhost:3001';

export const getEmployees = async () => {
    const response = await fetch(`${API_URL}/employees`);
    if (!response.ok) throw new Error('Failed to fetch employees');
    return response.json();
};

export const getEmployee = async (id) => {
    const response = await fetch(`${API_URL}/employees/${id}`);
    if (!response.ok) throw new Error('Failed to fetch employee');
    return response.json();
};

export const createEmployee = async (employee) => {
    const response = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
    });
    if (!response.ok) throw new Error('Failed to create employee');
    return response.json();
};

export const deleteEmployee = async (id) => {
    const response = await fetch(`${API_URL}/employees/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete employee');
    return response.json();
};