import React from "react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center bg-white shadow-sm px-6 py-4 border-b">
      {/* Left */}
      <div className="font-semibold text-lg text-gray-700">
        Dashboard Overview
      </div>

      {/* Center */}
      <div className="text-gray-500 text-sm">
        Welcome back, <span className="font-medium text-gray-700">Srinath</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-gray-600">All systems operational</span>
        <span className="text-green-600 font-medium">+414 options operational</span>
      </div>
    </div>
  );
}
