import { NavLink, useNavigate } from "react-router-dom";

import {
  Sword,
  ScrollText,
  PlusCircle,
  User,
  LogOut,
  Star,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  getUser,
  logout,
} from "@/utils/auth";

import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();

  const user = getUser();

  const { theme, toggleTheme } = useTheme();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all
    ${
      isActive
        ? "bg-amber-500 text-foreground shadow"
        : "text-foreground hover:bg-muted"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur border-b">

      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">

        {/* LEFT */}

        <div className="flex items-center gap-10">

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >

            <div className="bg-amber-500 text-white p-3 rounded-xl">

              <Sword size={22} />

            </div>

            <div>

              <h1 className="font-black text-2xl">

                QUEST

              </h1>

              <p className="text-xs text-slate-500">

                Guild Marketplace

              </p>

            </div>

          </div>

          <nav className="flex gap-3">

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
              <Sword size={18} />

              My Quests

            </NavLink>

          </nav>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

            <button
                onClick={toggleTheme}
                className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-border
                    bg-card
                    text-foreground
                    hover:bg-accent
                    transition
                "
            >
                {theme === "light"
                    ? <Moon size={18}/>
                    : <Sun size={18}/>
                }
            </button>

          <div className="text-right">

            <p className="font-bold">

              {user?.name}

            </p>

            <div className="flex items-center justify-end gap-1 text-amber-600 text-sm">

              <Star size={14} fill="currentColor" />

              Reputation {user?.reputationScore ?? 0}

            </div>

          </div>

          <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">

            {user?.name?.charAt(0)}

          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
          >

            <LogOut size={18} />

          </Button>

        </div>

      </div>

    </header>
  );
}