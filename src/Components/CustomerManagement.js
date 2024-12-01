import React from 'react';
import './CustomerManagement.css';

const CustomerManagement = () => {
    return (
        <div className="customer-management">
            <h1>Customers Management</h1>
            <div className="filters">
                <div className="filter">
                    <label htmlFor="status">Select Status</label>
                    <select id="status">
                        <option>Select status</option>
                        <option>Active</option>
                        <option>Suspended</option>
                    </select>
                </div>
                <div className="filter">
                    <label htmlFor="search">Search field</label>
                    <input type="text" id="search" placeholder="Search..." />
                </div>
            </div>
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>@ScreamAcode</td>
                        <td>support@screamacode.com</td>
                        <td>9090909090</td>
                        <td>Male</td>
                        <td><span className="active">Active</span></td>
                        <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>@Ontegraph</td>
                        <td>ontegraph.standard@gmail.com</td>
                        <td>9090909091</td>
                        <td>Female</td>
                        <td><span className="active">Active</span></td>
                        <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>@Nikita</td>
                        <td>nikitajmk555@gmail.com</td>
                        <td>9090909092</td>
                        <td>Female</td>
                        <td><span className="active">Active</span></td>
                        <td><button className="action-btn">View</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomerManagement;
