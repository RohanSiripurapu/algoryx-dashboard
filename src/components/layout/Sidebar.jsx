import { LayoutDashboard, BarChart3, ShoppingBag, Users, Settings, LogOut, X, Sparkles, Zap } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Orders", icon: ShoppingBag, active: false },
    { name: "Customers", icon: Users, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200/80 z-40
          transform transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:fixed lg:z-30 shadow-sm`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Algoryx
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-slate-500 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <p className="px-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Menu</p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 relative
                  ${item.active
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                {item.active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full" />
                )}
                <Icon
                  size={20}
                  className={item.active ? "text-blue-600" : "group-hover:text-blue-600 transition-colors"}
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Pro Plan CTA */}
        <div className="p-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 text-white shadow-lg shadow-blue-500/30">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={14} className="fill-yellow-300 text-yellow-300" />
                <p className="text-xs font-bold uppercase tracking-wider">Pro Plan</p>
              </div>
              <p className="text-sm font-semibold leading-snug">Unlock advanced analytics</p>
              <button className="mt-3 w-full bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold py-2 rounded-lg transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100 flex-shrink-0">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;