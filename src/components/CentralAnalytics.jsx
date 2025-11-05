import React from "react";

const CentralAnalytics = () => {
  return (
    <div className="px-6 py-6 bg-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column (spans 2 cols on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaign Performance */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Campaign Performance</h3>
                <p className="text-sm text-gray-500 mt-1">Success metrics breakdown</p>
              </div>
              <div className="text-sm text-gray-500">Overall success</div>
            </div>

            {/* Visual success rate indicator (simple bar) */}
            <div className="mt-5">
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="h-3 rounded-full" style={{ width: "72%", background: "linear-gradient(90deg,#3b82f6,#93c5fd)" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0%</span>
                <span>72% Success</span>
                <span>100%</span>
              </div>
            </div>

            {/* Recent activities */}
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• New campaign “Winter Sale” launched successfully</li>
              <li>• 124 new subscribers joined this week</li>
              <li>• 6 campaigns improved click-through rate</li>
            </ul>
          </div>

          {/* Engagement Trends */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Engagement Trends</h3>
            <p className="text-sm text-gray-500 mt-1">User interaction metrics</p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">Email Opens</div>
                <div className="text-gray-600 mt-1">82%</div>
              </div>
              <div>
                <div className="font-medium">Link Clicks</div>
                <div className="text-gray-600 mt-1">64%</div>
              </div>
              <div>
                <div className="font-medium">Forwards</div>
                <div className="text-gray-600 mt-1">12%</div>
              </div>
              <div>
                <div className="font-medium">Unsubscribes</div>
                <div className="text-gray-600 mt-1">3%</div>
              </div>
            </div>

            <div className="mt-4 border-t pt-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">Overall performance rating</div>
              <div className="text-sm font-semibold text-green-600">A+</div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
            <p className="text-sm text-gray-500 mt-1">Jump into your most common tasks</p>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">⚡</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Create Campaign</div>
                    <div className="text-xs text-gray-500">Start a new email campaign</div>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Get started →</button>
              </div>

              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">⚡</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Browse Templates</div>
                    <div className="text-xs text-gray-500">Use a pre-built design</div>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Get started →</button>
              </div>

              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">⚡</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">View Analytics</div>
                    <div className="text-xs text-gray-500">Deep dive into results</div>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Get started →</button>
              </div>

              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">⚡</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Segment Lists</div>
                    <div className="text-xs text-gray-500">Create target segments</div>
                  </div>
                </div>
                <button className="text-sm text-blue-600">Get started →</button>
              </div>
            </div>
          </div>

          {/* Recent Campaigns */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Campaigns</h3>
            <p className="text-sm text-gray-500 mt-1">Monitor your campaign performance</p>

            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Summer Sale</div>
                    <div className="text-xs text-gray-500">Completed • 92% open rate</div>
                  </div>
                  <div className="text-sm text-gray-600">View</div>
                </div>
              </li>

              <li>
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Weekly Digest</div>
                    <div className="text-xs text-gray-500">Scheduled • Nov 05, 2025</div>
                  </div>
                  <div className="text-sm text-gray-600">Edit</div>
                </div>
              </li>

              <li>
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Automation Test</div>
                    <div className="text-xs text-gray-500">Draft • 980 recipients</div>
                  </div>
                  <div className="text-sm text-gray-600">Continue</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralAnalytics;
