import { useState } from "react";
import { Plus, Download, Calendar, TrendingUp } from "lucide-react";
import Sidebar from "./components/layout/Sidebar";
import TopNav from "./components/layout/TopNav";
import StatCard from "./components/dashboard/StatCard";
import RecentOrders from "./components/dashboard/RecentOrders";
import ProfileCard from "./components/dashboard/ProfileCard";
import ActivityFeed from "./components/dashboard/ActivityFeed";
import { statsData } from "./data/mockData";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="lg:pl-64">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 md:p-6 lg:p-8 animate-fade-in">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Dashboard Overview
                </h1>
                <span className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp size={12} />
                  Live
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Welcome back, Rohan 👋 Here's what's happening today.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                <Calendar size={16} />
                <span className="hidden sm:inline">Last 30 days</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
                <Plus size={16} />
                <span className="hidden sm:inline">New Report</span>
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
            {statsData.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                isPositive={stat.isPositive}
                iconName={stat.iconName}
              />
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            <div className="space-y-6">
              <ProfileCard />
              <ActivityFeed />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-6 border-t border-slate-200/60 text-center text-xs text-slate-400">
            <p>© 2026 Algoryx Dashboard · Built with React + Tailwind CSS</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;