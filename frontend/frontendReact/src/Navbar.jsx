import React from "react";
import { Sparkles } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 cursor-pointer">
    <div className="w-8 h-8 text-black">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 4C7 4 2 8 2 12s5 8 10 8 10-4 10-8-5-8-10-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-6z"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity="0.5"/>
      </svg>
    </div>
    Cerope
  </div>
);

const Navbar = () => {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Logo />

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-white shadow-sm text-sm font-semibold flex items-center gap-2 hover:shadow-md transition-all">
          Explore More <Sparkles size={14} className="text-purple-500" />
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
          {/* replace this img with your user avatar if needed */}
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha"
            alt="User"
            className="w-full h-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
