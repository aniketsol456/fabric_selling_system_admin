import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboardTitle">Dashboard</h1>
      <p className="dashboardSubtitle">Overview of inventory, orders, and sales data</p>

      <div className="dashboardCards">
        <div className="card inventoryCard">
          <h2>Inventory</h2>
          <p>120 Products Available</p>
        </div>
        <div className="card ordersCard">
          <h2>Orders</h2>
          <p>35 Orders Pending</p>
        </div>
        <div className="card salesCard">
          <h2>Sales</h2>
          <p>$12,540 Total Revenue</p>
        </div>
      </div>

      <div className="chartContainer">
        <h2>Sales Chart</h2>
        <div className="chartPlaceholder">[Chart Placeholder]</div>
      </div>
    </div>
  );
};

export default Dashboard;
