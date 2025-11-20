// src/pages/ProfilePage.jsx
import React from "react";
import { Edit2, ChevronDown } from "lucide-react";

const Profilepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">

      {/* Main content */}
      <main className="flex-1 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

        {/* OUTER CARD – full width */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden w-full">
          <div className="p-8 md:p-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
              <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium mt-4 md:mt-0">
                <Edit2 size={16} /> Edit
              </button>
            </div>

            {/* CONTENT ROW */}
            {/* Changed gap-16 to gap-24 for considerable gap */}
            {/* Used flex-row to handle side-by-side layout */}
            <div className="flex flex-col-reverse lg:flex-row items-start w-full gap-12 lg:gap-24">
              
              {/* DETAILS SECTION */}
              {/* Changed width from 88% to flex-1 so it takes up all available space remaining after the avatar */}
              <div className="w-full lg:flex-1">
                <div className="border border-gray-200 rounded-2xl bg-gray-50/70 p-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-5">

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        First Name
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        Roshani
                      </div>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Last Name
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        Shah
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Email ID
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        Roshani123@gmail
                      </div>
                    </div>

                    {/* Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Number
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        +91 9920587654
                      </div>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Gender
                      </label>
                      <div className="flex gap-5 mt-1">
                        <label className="flex items-center gap-2 cursor-pointer text-gray-500 text-sm">
                          <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                          <span>Male</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-gray-900 text-sm font-semibold">
                          <div className="w-4 h-4 rounded-full border-[5px] border-black bg-white"></div>
                          <span>Female</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-gray-500 text-sm">
                          <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                          <span>Other</span>
                        </label>
                      </div>
                    </div>

                    {/* DOB */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        DOB
                      </label>
                      <div className="flex gap-2 mt-1">
                        <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[3rem] text-center">
                          01
                        </div>
                        <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[3rem] text-center">
                          10
                        </div>
                        <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[4rem] text-center">
                          2000
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* AVATAR SECTION */}
              {/* Increased width to 320px (was 240px) to give it more prominence */}
              <div className="w-full lg:w-[320px] flex flex-col items-center flex-shrink-0">
                {/* Increased image container size from w-32 h-32 to w-48 h-48 */}
                <div className="w-48 h-48 rounded-full bg-orange-50 border-4 border-orange-100 p-1 mb-6 relative group cursor-pointer">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Roshani&backgroundColor=b6e3f4"
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover transform group-hover:scale-110 transition-transform"
                  />
                </div>

                <button className="w-full flex items-center justify-between px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-gray-700">
                  Change Profile Photo
                  <ChevronDown size={16} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Profilepage;