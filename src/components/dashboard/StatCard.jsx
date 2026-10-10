import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";

// Icon mapper to convert string names to actual Lucide components
const iconMap = {
  DollarSign: DollarSign,
  Users: Users,
  ShoppingCart: ShoppingCart,
  Activity: Activity,
};

const StatCard = ({ title, value, change, isPositive, iconName }) => {
  const Icon = iconMap[iconName];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
          <Icon size={24} className="text-blue-600" />
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {change}
        </span>
      </div>

      <h3 className="text-sm text-slate-500 font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  );
};

export default StatCard;