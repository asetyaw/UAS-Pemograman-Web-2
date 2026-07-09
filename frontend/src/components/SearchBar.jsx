import { Search } from "lucide-react";

export default function SearchBar({

  value,

  onChange,

}) {

  return (

    <div className="relative">

      <Search
        className="absolute left-4 top-4 text-slate-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-amber-400"
        placeholder="Search your next quest..."
      />

    </div>

  );

}