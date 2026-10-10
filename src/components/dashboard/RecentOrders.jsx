import { recentOrders } from "../../data/mockData";

const RecentOrders = () => {
  // Helper to color the status badge
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700";
      case "Pending":
        return "bg-yellow-50 text-yellow-700";
      case "Failed":
        return "bg-red-50 text-red-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Recent Orders</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Latest customer transactions
          </p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          View All →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  {order.id}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-slate-800">
                    {order.customer}
                  </div>
                  <div className="text-xs text-slate-500">{order.email}</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                  {order.amount}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;