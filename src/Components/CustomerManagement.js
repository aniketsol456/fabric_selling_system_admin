import React, { useState, useEffect } from "react";
import axios from "axios"; // For API calls
import "./CustomerManagement.css";

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch customer data from the backend
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get("http://localhost:8009/user/all"); // Replace with your API endpoint
                console.log("API Response:", response.data); // Debug API response
                if (response.data && response.data.users) {
                    setCustomers(response.data.users); // Update only if customers are present
                } else {
                    setCustomers([]); // Fallback in case customers are missing
                }
            } catch (error) {
                console.error("Error fetching customer data:", error);
                setError("Failed to fetch customer data. Please try again later.");
            } finally {
                setLoading(false); // Hide loading spinner
            }
        };

        fetchCustomers();
    }, []);

    // Delete a customer
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8009/user/delete/${id}`);
            setCustomers(customers.filter((customer) => customer._id !== id));
        } catch (error) {
            console.error("Error deleting customer:", error);
            setError("Failed to delete customer. Please try again later.");
        }
    };

    return (
        <div className="customer-management">
            <h1>Customer Management</h1>

            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Loading Spinner */}
            {loading ? (
                <div className="loading-spinner">Loading customers...</div>
            ) : (
                <>
                    {/* Customer Table */}
                    <table className="customer-table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length > 0 ? (
                                customers.map((customer) => (
                                    <tr key={customer._id}>
                                        <td>{customer._id}</td>
                                        <td>{customer.fname}</td>
                                        <td>{customer.email}</td>
                                        <td>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(customer._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No customers found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default CustomerManagement;