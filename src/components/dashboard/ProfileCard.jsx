import { userProfile } from "../../data/mockData";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex flex-col items-center text-center">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="w-20 h-20 rounded-full border-4 border-blue-50"
        />
        <h3 className="mt-4 text-lg font-semibold text-slate-800">
          {userProfile.name}
        </h3>
        <p className="text-sm text-slate-500">{userProfile.role}</p>
        <p className="text-xs text-slate-400 mt-1">{userProfile.email}</p>

        <div className="grid grid-cols-3 gap-4 w-full mt-6 pt-6 border-t border-slate-100">
          <div>
            <p className="text-lg font-bold text-slate-800">12</p>
            <p className="text-xs text-slate-500">Projects</p>
          </div>
          <div>
            <p className="text-lg font-bold text-slate-800">48</p>
            <p className="text-xs text-slate-500">Tasks</p>
          </div>
          <div>
            <p className="text-lg font-bold text-slate-800">95%</p>
            <p className="text-xs text-slate-500">Score</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
          View Full Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;