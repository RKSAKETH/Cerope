import React from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 cursor-pointer">
    <div className="w-8 h-8 text-black">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 4C7 4 2 8 2 12s5 8 10 8 10-4 10-8-5-8-10-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-6z"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity="0.5"/>
      </svg>
    </div>
    Cerope
  </div>
);

const NavbarProfile = () => {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      
      {/* Left Side: Logo + Explore More */}
      <div className="flex items-center gap-8">
        <Logo />
        <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-white shadow-sm text-sm font-bold text-gray-900 flex items-center gap-2 hover:shadow-md transition-all">
          Explore More <Sparkles size={15} className="text-purple-600 fill-purple-600" />
        </button>
      </div>

      {/* Right Side: Nav Links + Avatar */}
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-bold">
          <button className="hover:text-black transition-colors">Home</button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            Know My Vibe <ChevronDown size={18} strokeWidth={3} />
          </div>
          <button className="hover:text-black transition-colors">My Wardrobe</button>
          <button className="hover:text-black transition-colors">Ask AI Pal</button>
          <button className="hover:text-black transition-colors">Plan Outfit</button>
        </nav>

        <div className="w-11 h-11 rounded-full bg-indigo-100 p-1 border-2 border-indigo-200 cursor-pointer overflow-hidden hover:border-indigo-300 transition-colors">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

    </header>
  );
};

export default NavbarProfile;