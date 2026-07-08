import { NavLink } from "react-router-dom";
import { getUser, logout } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import {
    Sword,
    ScrollText,
    PlusCircle,
    User
} from "lucide-react";

export default function Navbar() {

    const navigate = useNavigate();
    const user = getUser();

    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg transition
        ${isActive
            ? "bg-amber-500 text-white"
            : "hover:bg-slate-100"
        }`;

    return (

        <header className="border-b bg-white">

            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">

                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-2">

                        <Sword className="text-amber-500"/>

                        <h1 className="font-bold text-xl">
                            QUEST
                        </h1>

                    </div>

                    <nav className="flex gap-2">

                        <NavLink
                            to="/"
                            className={linkClass}
                        >

                            <ScrollText size={18}/>

                            Guild Hall

                        </NavLink>

                        <NavLink
                            to="/create-quest"
                            className={linkClass}
                        >

                            <PlusCircle size={18}/>

                            Create Quest

                        </NavLink>

                        <NavLink
                            to="/my-quests"
                            className={linkClass}
                        >

                            <Sword size={18}/>

                            My Quests

                        </NavLink>

                    </nav>

                </div>

                <div className="flex items-center gap-3">

                    <div className="text-right">

                        <p className="font-semibold">

                            {user?.name ?? "Guest"}

                        </p>

                        <p className="text-xs text-gray-500">

                            {user ? "Adventurer" : "Not Logged In"}

                        </p>

                    </div>

                    <User className="bg-slate-100 rounded-full p-2 w-10 h-10"/>

                    <button
                        onClick={() => {
                            logout();
                            navigate("/login");
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-lg transition-colors"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>

    );
    

}