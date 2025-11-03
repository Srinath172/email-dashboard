import React from "react";

const CentralAnalytics = () => {
  const campaigns = [
    { status: "Sent", recipients: "2,340", performance: "92%", revenue: "$1,240", date: "Oct 28, 2025", actions: "View" },
    { status: "Scheduled", recipients: "1,870", performance: "—", revenue: "$0", date: "Nov 05, 2025", actions: "Edit" },
    { status: "Draft", recipients: "980", performance: "—", revenue: "$0", date: "Nov 10, 2025", actions: "Continue" },
    { status: "Active", recipients: "3,210", performance: "76%", revenue: "$890", date: "Nov 02, 2025", actions: "Track" },
  ];

  return (
    <div className="p-8">
      {/* Section Header */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Campaigns</h2>
          <input
            type="text"
            placeholder="Search campaigns..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Campaigns Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-sm font-medium">Status</th>
                <th className="py-3 px-4 text-sm font-medium">Recipients</th>
                <th className="py-3 px-4 text-sm font-medium">Performance</th>
                <th className="py-3 px-4 text-sm font-medium">Revenue</th>
                <th className="py-3 px-4 text-sm font-medium">Date</th>
                <th className="py-3 px-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-800">{item.status}</td>
                  <td className="py-3 px-4 text-gray-600">{item.recipients}</td>
                  <td className="py-3 px-4 text-gray-600">{item.performance}</td>
                  <td className="py-3 px-4 text-gray-600">{item.revenue}</td>
                  <td className="py-3 px-4 text-gray-600">{item.date}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline text-sm">
                      {item.actions}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2 text-sm text-gray-600">
          <button className="px-3 py-1 rounded-md hover:bg-gray-100">Previous</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md">1</button>
          <button className="px-3 py-1 hover:bg-gray-100">2</button>
          <button className="px-3 py-1 hover:bg-gray-100">3</button>
          <span className="px-2">…</span>
          <button className="px-3 py-1 hover:bg-gray-100">10</button>
          <button className="px-3 py-1 rounded-md hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CentralAnalytics;
