// src/pages/ProfilePage.jsx
import React from "react";
import { Edit2, ChevronDown } from "lucide-react";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

const Profilepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
     
      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
              <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium mt-4 md:mt-0">
                <Edit2 size={16} /> Edit
              </button>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-12">
              {/* Details Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">First Name</label>
                  <div className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 text-gray-500 text-sm">
                    Roshani
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Last Name</label>
                  <div className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 text-gray-500 text-sm">
                    Shah
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Email ID</label>
                  <div className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 text-gray-500 text-sm">
                    Roshani123@gmail
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Number</label>
                  <div className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 text-gray-500 text-sm">
                    +91 9920587654
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">Gender</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                      <span className="text-sm">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="w-4 h-4 rounded-full border-4 border-black bg-white"></div>
                      <span className="text-sm font-semibold text-gray-800">Female</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-gray-400">
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                      <span className="text-sm">Other</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">DOB</label>
                  <div className="flex gap-3">
                    <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 text-sm bg-white">
                      01
                    </div>
                    <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 text-sm bg-white">
                      10
                    </div>
                    <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 text-sm bg-white">
                      2000
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatar Section */}
              <div className="lg:w-1/3 flex flex-col items-center justify-start pt-4">
                <div className="w-48 h-48 rounded-full bg-orange-50 border-4 border-orange-100 p-2 mb-6 relative group cursor-pointer">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent"
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover transform group-hover:scale-110 transition-transform"
                  />
                </div>

                <div className="w-full max-w-xs relative">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-100 transition-colors">
                    Change Profile Picture
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profilepage;
