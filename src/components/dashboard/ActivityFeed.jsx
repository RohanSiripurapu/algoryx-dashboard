import { CheckCircle2, UserPlus, Rocket, FileText, ArrowRight } from "lucide-react";

const activities = [
  { id: 1, icon: CheckCircle2, gradient: "from-green-500 to-emerald-600", text: "Order #ORD-005 completed", time: "2 min ago" },
  { id: 2, icon: UserPlus, gradient: "from-blue-500 to-indigo-600", text: "New user Sarah registered", time: "1 hour ago" },
  { id: 3, icon: Rocket, gradient: "from-purple-500 to-pink-600", text: "Deployment to production", time: "3 hours ago" },
  { id: 4, icon: FileText, gradient: "from-orange-500 to-red-600", text: "Weekly report generated", time: "1 day ago" },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
          Today
        </span>
      </div>

      <div className="relative space-y-5">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent" />

        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3 relative group cursor-pointer">
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activity.gradient} 
                           flex items-center justify-center flex-shrink-0 shadow-sm 
                           ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <p className="text-sm text-slate-700 leading-snug font-semibold group-hover:text-slate-900 transition-colors">
                  {activity.text}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-5 w-full flex items-center justify-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 py-2 border-t border-slate-100 pt-4 transition-colors group">
        View All Activity
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};

export default ActivityFeed;