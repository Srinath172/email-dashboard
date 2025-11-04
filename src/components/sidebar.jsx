import React from "react";

export default function sidebar() {
  const menuItems = [
    "Dashboard",
    "Email Lists",
    "Email Accounts",
    "Email Campaign",
    "Analytics",
    "Master List",
  ];

  return (
    <div className="w-64 bg-white shadow-md h-screen flex flex-col fixed left-0 top-0">
      {/* Brand Name */}
      <div className="text-2xl font-bold text-blue-600 px-6 py-6 border-b border-gray-200">
        Mailify
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer ${
              item === "Dashboard"
                ? "bg-blue-100 text-blue-600 font-semibold"
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Footer (optional) */}
      <div className="text-xs text-gray-500 px-6 py-4 border-t border-gray-100">
        © 2025 Mailify
      </div>
    </div>
  );
}
