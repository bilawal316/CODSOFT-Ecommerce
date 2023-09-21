import React from "react";
import Dashboard from "../components/Dashboard/dashboard";

const Admin = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow overflow-y-auto">
        {/* Ensure that the sidebar has a fixed height and allows vertical scrolling */}
        <div className="h-full overflow-y-auto">
          <Dashboard />
          {/* Other sidebar content goes here if needed */}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-5 overflow-y-auto">
        {/* Page content goes here */}
        <h1 className="text-2xl font-semibold"></h1>
        {/* Add your admin dashboard components here */}
      </main>
    </div>
  );
};

export default Admin;
