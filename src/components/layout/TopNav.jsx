import { useState } from "react";
import { Menu, Search, Bell, ChevronDown, Command } from "lucide-react";
import { notifications, userProfile } from "../../data/mockData";

const TopNav = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-20 glass border-b border-slate-200/60">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 gap-4">

        {/* Left: Menu + Search */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-lg flex-shrink-0"
          >
            <Menu size={22} />
          </button>

          <div className="relative w-full max-w-sm lg:max-w-md">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-11 pr-16 py-2.5 bg-slate-100/70 border border-transparent rounded-xl text-sm
                         focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                         focus:outline-none transition-all placeholder:text-slate-400"
            />
            <kbd className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-xs text-slate-500 font-mono">
              <Command size={10} />K
            </kbd>
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="relative p-2.5 text-slate-600 hover:bg-slate-100 hover:text-blue-600 rounded-xl transition-all"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md shadow-red-500/40 animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 py-2 animate-slide-in overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm">Notifications</h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {unreadCount} new
                  </span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notif.unread ? "bg-blue-500" : "bg-slate-300"}`} />
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug font-medium">{notif.text}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2.5 p-1.5 pr-3 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <div className="relative">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-800 leading-tight">{userProfile.name}</p>
                <p className="text-xs text-slate-500 leading-tight">{userProfile.role}</p>
              </div>
              <ChevronDown size={16} className="hidden md:block text-slate-400" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 py-2 animate-slide-in overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
                  <p className="text-sm font-semibold text-slate-800">{userProfile.name}</p>
                  <p className="text-xs text-slate-500">{userProfile.email}</p>
                </div>
                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 font-medium">
                  View Profile
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 font-medium">
                  Settings
                </button>
                <div className="border-t border-slate-100 mt-1">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-semibold">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;