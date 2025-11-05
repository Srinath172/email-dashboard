import React from "react";
import Sidebar from "./sidebar";
import TopBar from "./topbar";
import KPISection from "./KPISection";
import CentralAnalytics from "./CentralAnalytics";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Top Bar */}
        <TopBar />

        {/* KPI Cards Section */}
        <KPISection />
        <CentralAnalytics />
        {/* ---- Central Analytics Section ---- */}
<div className="px-6 mt-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Central Analytics</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-gray-500 text-sm font-medium">Total Messages Sent</h3>
      <p className="text-3xl font-bold mt-2">145,230</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-gray-500 text-sm font-medium">Total Campaigns</h3>
      <p className="text-3xl font-bold mt-2">76</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-gray-500 text-sm font-medium">Overall Engagement</h3>
      <p className="text-3xl font-bold mt-2">72%</p>
    </div>
  </div>
</div>


        {/* Main Dashboard Placeholder */}
        <div className="p-8 text-gray-700">
          Main dashboard content here...
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
