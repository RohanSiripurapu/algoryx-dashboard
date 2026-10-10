import { CheckCircle2, UserPlus, Rocket, FileText } from "lucide-react";

const activities = [
  { id: 1, icon: CheckCircle2, color: "text-green-600 bg-green-50", text: "Order #ORD-005 completed", time: "2 min ago" },
  { id: 2, icon: UserPlus, color: "text-blue-600 bg-blue-50", text: "New user Sarah registered", time: "1 hour ago" },
  { id: 3, icon: Rocket, color: "text-purple-600 bg-purple-50", text: "Deployment to production", time: "3 hours ago" },
  { id: 4, icon: FileText, color: "text-orange-600 bg-orange-50", text: "Weekly report generated", time: "1 day ago" },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 leading-snug">{activity.text}</p>
                <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;