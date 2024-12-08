import React from "react";
import "./OrderManagement.css";

const OrderManagement = () => {
  const orders = [
    {
      id: "674ebe265746f43ee32",
      amount: "132.5 INR",
      paymentStatus: "Paid",
      quantity: 1,
      purchasedOn: "26/11/2024",
      deliveryStatus: "Delivered",
    },
    {
      id: "6745deac4e14e87dfac5",
      amount: "201.2 INR",
      paymentStatus: "Paid",
      quantity: 1,
      purchasedOn: "26/11/2024",
      deliveryStatus: "Delivered",
    },
    {
      id: "6745dc1922fb7253e672",
      amount: "125.6 INR",
      paymentStatus: "Paid",
      quantity: 1,
      purchasedOn: "26/11/2024",
      deliveryStatus: "OutForDelivery",
    },
  ];

  return (
    <div className="order-management">
      <h1>Orders Management</h1>
      <div className="filters">
        <select id="payment-status">
          <option value="" disabled selected>
            Select Payment Status
          </option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
        <select id="delivery-status">
          <option value="" disabled selected>
            Select Delivery Status
          </option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="outfordelivery">Out for Delivery</option>
        </select>
        <input type="text" placeholder="Search order..." id="search-bar" />
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
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  className={`status ${
                    order.paymentStatus.toLowerCase() === "paid"
                      ? "status-paid"
                      : "status-unpaid"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </td>
              <td>{order.quantity}</td>
              <td>{order.purchasedOn}</td>
              <td>
                <span
                  className={`status ${
                    order.deliveryStatus.replaceAll(" ", "-").toLowerCase()
                  }`}
                >
                  {order.deliveryStatus}
                </span>
              </td>
              <td>
                <button className="view-btn">👁️ View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
