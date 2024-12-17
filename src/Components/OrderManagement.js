import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderManagement.css";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]); // To store all fetched orders
  const [filteredOrders, setFilteredOrders] = useState([]); // To store filtered orders
  const [paymentStatus, setPaymentStatus] = useState(""); // Payment status filter
  const [deliveryStatus, setDeliveryStatus] = useState(""); // Delivery status filter
  const [searchTerm, setSearchTerm] = useState(""); // Search term for order ID

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8009/order/all"); // Adjust the URL if necessary
        setOrders(response.data.orders);
        setFilteredOrders(response.data.orders); // Initially, show all orders
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = orders;

    if (paymentStatus && paymentStatus !== "all") {
      filtered = filtered.filter(
        (order) =>
          order.paymentStatus && order.paymentStatus.toLowerCase() === paymentStatus.toLowerCase()
      );
    }

    if (deliveryStatus && deliveryStatus !== "all") {
      filtered = filtered.filter(
        (order) =>
          order.deliveryStatus && order.deliveryStatus.toLowerCase() === deliveryStatus.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((order) =>
        order._id.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
    }

    setFilteredOrders(filtered);
  }, [paymentStatus, deliveryStatus, searchTerm, orders]);

  return (
    <div className="order-management">
      <h1>Orders Management</h1>
      <div className="filters">
        <select
          id="payment-status"
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="failed">Failed</option>
        </select>
        <select
          id="delivery-status"
          value={deliveryStatus}
          onChange={(e) => setDeliveryStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="outfordelivery">Out for Delivery</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Search order..."
          id="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Quantity</th>
            <th>Purchased On</th>
            <th>Delivery Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td> 
                <td>{order.totalAmount}</td>
                <td>
                  <span
                    className={`status ${
                      order.paymentStatus ? order.paymentStatus.toLowerCase() : "unknown"
                    }`}
                  >
                    {order.paymentStatus || "Unknown"}
                  </span>
                </td>
                <td>
                  {order.items.reduce((acc, item) => acc + item.quantity, 0)}
                </td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td> 
                <td>
                  <span
                    className={`status ${
                      order.status
                        ? order.status.replaceAll(" ", "-").toLowerCase()
                        : "status-unknown"
                    }`}
                  >
                    {order.status || "Unknown"}
                  </span>
                </td>
                <td>
                  <button className="view-btn">👁️ View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
