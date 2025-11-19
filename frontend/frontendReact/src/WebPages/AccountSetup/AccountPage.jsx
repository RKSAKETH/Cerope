import React from 'react';
import { User, Calendar, ChevronDown, Sparkles } from 'lucide-react';

const AccountSetup = () => {
  // Common styling for inputs
  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm text-gray-700 placeholder-gray-400 transition-all shadow-sm";
  const labelClass = "text-xs font-bold text-gray-700 ml-1 uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-[#FFF8F9] font-sans p-4 lg:p-10 flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto w-full">
        
        {/* Main Grid Container */}
        <form className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN (Heading + Personal Details) --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Heading - Placed inside left column for top-alignment with image */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Set up your User account
            </h1>
            
            {/* First Name */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>First Name *</label>
              <input type="text" placeholder="Enter first name" className={inputClass} />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>Last Name</label>
              <input type="text" placeholder="Enter last name" className={inputClass} />
            </div>

            {/* Profile Picture */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>Profile Picture</label>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm">
                  <User size={24} />
                </div>
                <div className="relative flex-1">
                  <select className={`${inputClass} appearance-none cursor-pointer`}>
                    <option>Select Profile Picture</option>
                    <option>Upload Custom</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>Date of Birth*</label>
              <div className="relative">
                <input type="text" placeholder="Select DOB" className={inputClass} />
                <Calendar className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Style Preference */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>Style Preference*</label>
              <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                {['Men', 'Women', 'Both'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer px-2">
                    <input type="radio" name="style" className="w-4 h-4 accent-gray-900" />
                    <span className="text-sm font-medium text-gray-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-5">
              <label className={labelClass}>Phone Number</label>
              <input type="text" placeholder="Enter phone number" className={inputClass} />
            </div>

            {/* Submit Button */}
            <div className="pt-5">
              <button className="w-full bg-[#1A1A1A] text-white rounded-xl py-4 text-sm font-semibold shadow-xl hover:bg-black transition-all transform hover:-translate-y-0.5">
                Continue
              </button>
            </div>

          </div>


          {/* --- RIGHT COLUMN (Image + Location Details) --- */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Image Section: Reduced width (w-4/5) and Centered (mx-auto) */}
            <div className="w- mx-auto h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative group border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
                alt="Model" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                 <span className="font-bold text-sm text-gray-900">Cerope</span>
              </div>
            </div>

            {/* Location Details Wrapper: Aligned with the Image above (w-4/5 mx-auto) */}
            <div className="w-4/5 mx-auto flex flex-col gap-6">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 pb-2 w-max">
                    Location Details
                </div>

                {/* Country */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>Country *</label>
                    <input type="text" placeholder="Enter country" className={inputClass} />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                    <label className={labelClass}>City</label>
                    <div className="relative">
                        <select className={`${inputClass} appearance-none cursor-pointer`}>
                            <option>Select location</option>
                            <option>New York</option>
                            <option>Tokyo</option>
                            <option>London</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                </div>
            </div>

          </div>

        </form>
      </main>
    </div>
  );
};

export default AccountSetup;