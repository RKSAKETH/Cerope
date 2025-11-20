import React, { useEffect, useState } from "react";
import { Edit2, ChevronDown } from "lucide-react";

const Profilepage = () => {
  const [profile, setProfile] = useState(null);
  const [userInfo, setUserInfo] = useState(null); // email, name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view your profile.");
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:3000/profile", {
        method: "GET", // explicitly GET
        headers: {
          Authorization: `Bearer ${token}`, // token is enough
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to load profile.");
      } else {
        setProfile(data.profile || {});
        setUserInfo(data.user || {});
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center">
        <p className="text-gray-600 text-sm">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center">
        <p className="text-red-500 text-sm font-medium">{error}</p>
      </div>
    );
  }

  const {
    firstName = "",
    lastName = "",
    phoneNumber = "",
    dateOfBirth,
    stylePreference,
    country,
    city,
  } = profile || {};

  const email = userInfo?.email || "";
  const displayName = firstName || userInfo?.name || "User";

  // DOB formatting (yyyy-mm-dd -> parts)
  let day = "", month = "", year = "";
  if (dateOfBirth) {
    const d = new Date(dateOfBirth);
    day = String(d.getDate()).padStart(2, "0");
    month = String(d.getMonth() + 1).padStart(2, "0");
    year = String(d.getFullYear());
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <main className="flex-1 max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden w-full">
          <div className="p-8 md:p-10">

            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Details
              </h2>
              <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium mt-4 md:mt-0">
                <Edit2 size={16} /> Edit
              </button>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-start w-full gap-12 lg:gap-24">
              
              {/* DETAILS SECTION */}
              <div className="w-full lg:flex-1">
                <div className="border border-gray-200 rounded-2xl bg-gray-50/70 p-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-5">

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        First Name
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        {firstName || "-"}
                      </div>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Last Name
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        {lastName || "-"}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Email ID
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        {email || "-"}
                      </div>
                    </div>

                    {/* Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Number
                      </label>
                      <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                        {phoneNumber || "-"}
                      </div>
                    </div>

                    {/* Style Preference as "Gender-ish" display */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        Style Preference
                      </label>
                      <div className="flex gap-5 mt-1">
                        {["Men", "Women", "Both"].map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-2 cursor-pointer text-sm ${
                              stylePreference === opt
                                ? "text-gray-900 font-semibold"
                                : "text-gray-500"
                            }`}
                          >
                            <div
                              className={
                                stylePreference === opt
                                  ? "w-4 h-4 rounded-full border-[5px] border-black bg-white"
                                  : "w-4 h-4 rounded-full border border-gray-300"
                              }
                            ></div>
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* DOB */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                        DOB
                      </label>
                      {dateOfBirth ? (
                        <div className="flex gap-2 mt-1">
                          <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[3rem] text-center">
                            {day}
                          </div>
                          <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[3rem] text-center">
                            {month}
                          </div>
                          <div className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white min-w-[4rem] text-center">
                            {year}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm">
                          -
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* AVATAR SECTION */}
              <div className="w-full lg:w-[320px] flex flex-col items-center flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-orange-50 border-4 border-orange-100 p-1 mb-6 relative group cursor-pointer">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                      displayName
                    )}&backgroundColor=b6e3f4`}
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
