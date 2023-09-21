"use client"
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // State variables to store fetched data
  const [salesData, setSalesData] = useState(null);
  const [orderCount, setOrderCount] = useState(null);
  const [websiteTraffic, setWebsiteTraffic] = useState(null);

  // Simulate data fetching with useEffect
  useEffect(() => {
    // Replace this with your actual API or backend endpoint
    // Fetch sales data
    fetch("/api/sales")
      .then((response) => response.json())
      .then((data) => setSalesData(data.totalSales));

    // Fetch order count
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrderCount(data.totalOrders));

    // Fetch website traffic
    fetch("/api/traffic")
      .then((response) => response.json())
      .then((data) => setWebsiteTraffic(data.websiteTraffic));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-5 text-black">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Sales Data */}
        <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600 overflow-ellipsis" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            {salesData !== null ? salesData : "Loading..."}
          </p>
        </div>

        {/* Order Count */}
        <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-green-600 overflow-ellipsis" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            {orderCount !== null ? orderCount : "Loading..."}
          </p>
        </div>

        {/* Website Traffic */}
        <div className="bg-yellow-100 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Website Traffic</h3>
          <p className="text-2xl font-bold text-yellow-600 overflow-ellipsis" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            {websiteTraffic !== null ? websiteTraffic : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
