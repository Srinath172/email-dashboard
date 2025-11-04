import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-md flex items-center justify-between px-8 py-4">
      {/* Left: Dashboard Title */}
      <div className="text-lg font-semibold text-gray-800">
        Dashboard Overview
      </div>

      {/* Center: Welcome Message */}
      <div className="text-gray-600 text-md">
        Welcome back, <span className="font-medium text-gray-800">Srinath</span>
      </div>

      {/* Right: System Status */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm text-gray-700">All systems operational</span>
        </div>
        <div className="text-sm text-gray-500">+4 | 14 options operational</div>
      </div>
    </div>
  );
};

export default TopBar;
