import { useState } from "react";
import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { notifications, userProfile } from "../../data/mockData";

const TopNav = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 gap-4">
        {/* Left: Menu button (mobile) + Search */}
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-slate-600 hover:text-slate-900"
          >
            <Menu size={22} />
          </button>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm
                         focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                <div className="px-4 py-2 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-800 text-sm">Notifications</h3>
                </div>
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
                  >
                    <p className="text-sm text-slate-700">{notif.text}</p>
                    <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                  </div>
                ))}
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
              className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-9 h-9 rounded-full"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  {userProfile.name}
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  {userProfile.role}
                </p>
              </div>
              <ChevronDown size={16} className="hidden md:block text-slate-400" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-800">{userProfile.name}</p>
                  <p className="text-xs text-slate-500">{userProfile.email}</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  View Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;