import { userProfile } from "../../data/mockData";
import { Mail, MapPin, MoreHorizontal, BadgeCheck } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_50%)]" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
        <button className="absolute top-3 right-3 p-1.5 bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg transition-colors">
          <MoreHorizontal size={16} className="text-white" />
        </button>
      </div>

      <div className="px-6 pb-6 -mt-12 relative">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg ring-2 ring-blue-100"
            />
            <span className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" />
          </div>

          <div className="mt-4 flex items-center gap-1.5">
            <h3 className="text-lg font-bold text-slate-900">{userProfile.name}</h3>
            <BadgeCheck size={16} className="text-blue-500 fill-blue-100" />
          </div>
          <p className="text-sm text-slate-500">{userProfile.role}</p>

          <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Mail size={12} />
              {userProfile.email}
            </span>
          </div>
          <span className="flex items-center gap-1 mt-1 text-xs text-slate-500">
            <MapPin size={12} />
            Hyderabad, India
          </span>

          <div className="grid grid-cols-3 gap-3 w-full mt-6 pt-6 border-t border-slate-100">
            <div className="text-center">
              <p className="text-xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                12
              </p>
              <p className="text-xs text-slate-500 font-semibold">Projects</p>
            </div>
            <div className="text-center border-x border-slate-100">
              <p className="text-xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                48
              </p>
              <p className="text-xs text-slate-500 font-semibold">Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                95%
              </p>
              <p className="text-xs text-slate-500 font-semibold">Score</p>
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30 text-white text-sm font-bold py-2.5 rounded-xl transition-all">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;