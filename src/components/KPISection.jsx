import React from "react";

const metrics = [
  { title: "Active Subscribers", value: "12,450", change: "+5%" },
  { title: "Revenue Generated", value: "$24,300", change: "+8%" },
  { title: "Text Campaigns", value: "37", change: "+2%" },
  { title: "Average Open Rate", value: "68%", change: "+3%" },
  { title: "Bounce Rate", value: "1.8%", change: "-0.4%" },
];

const KPISection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 px-6 py-4 bg-gray-100">
      {metrics.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-center items-start hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-gray-500 text-sm font-medium">{item.title}</h2>
          <div className="text-2xl font-bold mt-2">{item.value}</div>
          <span
            className={`text-sm font-semibold mt-1 ${
              item.change.includes("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default KPISection;
