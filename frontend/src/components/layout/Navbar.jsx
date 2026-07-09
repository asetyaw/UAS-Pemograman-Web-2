import { NavLink, useNavigate } from "react-router-dom";
import {
  Sword,
  ScrollText,
  PlusCircle,
  Briefcase,
  LogOut,
} from "lucide-react";

import { getUser, logout } from "@/utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 ${
      isActive
        ? "bg-amber-500 text-white shadow"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2">

            <Sword className="text-amber-500" />

            <h1 className="font-black text-2xl tracking-wide">
              QUEST
            </h1>

          </div>

          <nav className="flex gap-2">

            <NavLink
              to="/"
              className={linkClass}
            >
              <ScrollText size={18} />
              Guild Hall
            </NavLink>

            <NavLink
              to="/create-quest"
              className={linkClass}
            >
              <PlusCircle size={18} />
              Create Quest
            </NavLink>

            <NavLink
              to="/my-quests"
              className={linkClass}
            >
              <Briefcase size={18} />
              My Quests
            </NavLink>

          </nav>

        </div>

        <div className="flex items-center gap-4">

          <div className="text-right">

            <h2 className="font-semibold">
              {user?.name}
            </h2>

            <p className="text-xs text-slate-500">
              Adventurer
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-50 hover:bg-red-100 text-red-600 p-3 transition"
          >
            <LogOut size={18}/>
          </button>

        </div>

      </div>

    </header>
  );
}