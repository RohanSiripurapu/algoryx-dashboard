import { DollarSign, Users, ShoppingCart, Activity, TrendingUp, TrendingDown } from "lucide-react";

const iconMap = { DollarSign, Users, ShoppingCart, Activity };

const colorMap = {
  DollarSign: {
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    ring: "group-hover:ring-emerald-500/20",
    blob: "bg-emerald-500",
  },
  Users: {
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    ring: "group-hover:ring-blue-500/20",
    blob: "bg-blue-500",
  },
  ShoppingCart: {
    gradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    ring: "group-hover:ring-purple-500/20",
    blob: "bg-purple-500",
  },
  Activity: {
    gradient: "from-orange-500 to-red-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    ring: "group-hover:ring-orange-500/20",
    blob: "bg-orange-500",
  },
};

const StatCard = ({ title, value, change, isPositive, iconName }) => {
  const Icon = iconMap[iconName];
  const colors = colorMap[iconName] || colorMap.Users;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${colors.blob} opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center 
                       group-hover:scale-110 transition-transform duration-300 ring-4 ring-transparent ${colors.ring}`}
          >
            <Icon size={24} className={colors.iconColor} />
          </div>

          <span
            className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full ${
              isPositive
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            <TrendIcon size={12} />
            {change}
          </span>
        </div>

        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{title}</p>
        <p className="text-3xl font-bold text-slate-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;