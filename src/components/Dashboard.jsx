import React from "react";
import TopBar from "./topbar"; // ✅ Fixed case-sensitive import
import Sidebar from "./Sidebar";
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

        {/* Main Dashboard Placeholder */}
        <div className="p-8 text-gray-700">
          Main dashboard content here...
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
