import { recentOrders } from "../../data/mockData";
import { ArrowUpRight } from "lucide-react";

const RecentOrders = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 ring-1 ring-green-600/20";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20";
      case "Failed":
        return "bg-red-50 text-red-700 ring-1 ring-red-600/20";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getAvatarGradient = (index) => {
    const gradients = [
      "from-blue-500 to-indigo-600",
      "from-purple-500 to-pink-600",
      "from-emerald-500 to-teal-600",
      "from-orange-500 to-red-600",
      "from-cyan-500 to-blue-600",
      "from-fuchsia-500 to-purple-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Recent Orders</h2>
          <p className="text-sm text-slate-500 mt-0.5">Latest customer transactions</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group">
          View All
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/70 border-b border-slate-100">
            <tr>
              <th className="px-6 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentOrders.map((order, index) => (
              <tr key={order.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-slate-800">{order.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${getAvatarGradient(index)} 
                                 flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0`}
                    >
                      {order.customer.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-800 truncate">{order.customer}</div>
                      <div className="text-xs text-slate-500 truncate">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${getStatusStyle(order.status)}`}
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