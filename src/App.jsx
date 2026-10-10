import { useState } from "react";
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

      <div className="lg:ml-64">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 md:p-6 animate-fade-in">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Welcome back, here's what's happening today.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
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

          {/* Main Grid: Table (left) + Profile & Activity (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            <div className="space-y-6">
              <ProfileCard />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;