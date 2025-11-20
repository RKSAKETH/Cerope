import React, { useEffect, useState } from "react";
import { Edit2, ChevronDown, ChevronUp } from "lucide-react";

const Profilepage = () => {
  const [profile, setProfile] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fatal load error (fetch profile)
  const [error, setError] = useState("");

  // Save-related UI state
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Avatar selection state
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [selectedAvatarSeed, setSelectedAvatarSeed] = useState("");

  // Avatar options (Micah style)
  const avatarOptions = [
    "Christopher",
    "Jack",
    "Jude",
    "Oliver",
    "Emery", // Men/Neutral
    "Annie",
    "Halo",
    "Sarah",
    "Mela",
    "Jessica", // Women
  ];

  // DiceBear Micah avatar URL
  const getAvatarUrl = (seed) =>
    `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(
      seed
    )}&backgroundColor=b6e3f4&backgroundType=gradientLinear&mouth=smile,smirk`;

  // Fetch profile on mount
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
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to load profile.");
        } else {
          setProfile(data.profile || {});
          setUserInfo(data.user || {});

          // Prefer saved avatar, then firstName, then name, then fallback
          const seed =
            data.profile?.profilePicture ||
            data.profile?.firstName ||
            data.user?.name ||
            "User";

          setSelectedAvatarSeed(seed);
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

  // Save handler – updates profilePicture (and other fields) in DB
  const handleSave = async () => {
    if (!profile) return;

    setSaveError("");
    setSuccessMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setSaveError("You must be logged in to update your profile.");
      return;
    }

    try {
      setIsSaving(true);

      const res = await fetch("http://localhost:3000/profile", {
        method: "POST", // same endpoint as AccountPage
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: profile.firstName,
          lastName: profile.lastName,
          profilePicture: selectedAvatarSeed, // 👈 updated avatar seed
          dateOfBirth: profile.dateOfBirth,
          stylePreference: profile.stylePreference,
          phoneNumber: profile.phoneNumber,
          country: profile.country,
          city: profile.city,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSaveError(data.error || "Failed to update profile.");
      } else {
        const updatedProfile = data.profile || data.user?.profile || profile;
        setProfile(updatedProfile);
        setSuccessMessage("Profile updated successfully ✅");
        setShowAvatarSelector(false);
      }
    } catch (err) {
      console.error(err);
      setSaveError("Something went wrong while saving. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Loading & fatal error states
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

  // Safely destructure profile once loaded
  const {
    firstName = "",
    lastName = "",
    phoneNumber = "",
    dateOfBirth,
    stylePreference,
  } = profile || {};

  const email = userInfo?.email || "";

  // DOB formatting
  let day = "",
    month = "",
    year = "";
  if (dateOfBirth) {
    const d = new Date(dateOfBirth);
    day = String(d.getDate()).padStart(2, "0");
    month = String(d.getMonth() + 1).padStart(2, "0");
    year = String(d.getFullYear());
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

        <div className="bg-white w-full min-h-[500px] rounded-3xl shadow-lg border border-gray-200 p-10">
          <div className="p-8 md:p-10">
            {/* Save / error messages */}
            {(saveError || successMessage) && (
              <div className="mb-4">
                {saveError && (
                  <p className="text-sm text-red-500 font-medium">
                    {saveError}
                  </p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-600 font-medium">
                    {successMessage}
                  </p>
                )}
              </div>
            )}

            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Details
              </h2>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-5 py-2 border border-white rounded-lg text-white bg-black hover:bg-gray-800 transition-colors text-sm font-medium mt-4 md:mt-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Edit2 size={16} />
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-start w-full gap-16 lg:gap-32">
              {/* DETAILS SECTION */}
              <div className="w-full lg:flex-1">
                <div className="border border-gray-200 rounded-2xl bg-gray-50/70 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
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

                    {/* Style Preference */}
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
              <div className="w-full lg:w-[320px] flex flex-col items-center flex-shrink-0 relative z-20">
                {/* Big avatar */}
                <div className="w-48 h-48 rounded-full bg-orange-50 border-4 border-orange-100 p-1 mb-6 relative group">
                  <img
                    src={getAvatarUrl(selectedAvatarSeed)}
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Button + dropdown */}
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() =>
                      setShowAvatarSelector((prev) => !prev)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                  >
                    Change Profile Picture
                    {showAvatarSelector ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {showAvatarSelector && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-600">
                          Choose Avatar
                        </span>
                      </div>

                      <div className="grid grid-cols-5 gap-3 mb-4">
                        {avatarOptions.map((seed) => (
                          <button
                            key={seed}
                            type="button"
                            onClick={() => setSelectedAvatarSeed(seed)}
                            className={`rounded-full p-0.5 transition-all ${
                              selectedAvatarSeed === seed
                                ? "ring-2 ring-black ring-offset-1"
                                : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                            }`}
                          >
                            <img
                              src={getAvatarUrl(seed)}
                              alt={seed}
                              className="w-10 h-10 rounded-full bg-gray-100"
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowAvatarSelector(false)}
                        className="w-full py-2 bg-white border border-black text-black rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Select
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* END AVATAR SECTION */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profilepage;
