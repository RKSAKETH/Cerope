import React, { useState } from "react";
import { User, Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountSetup = () => {
  const navigate = useNavigate();
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none text-sm text-gray-700 placeholder-gray-400 transition-all shadow-sm";
  const labelClass =
    "text-xs font-bold text-gray-700 ml-1 uppercase tracking-wide";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    profilePicture: "Select Profile Picture",
    dateOfBirth: "",
    stylePreference: "",
    phoneNumber: "",
    country: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setGeneralError("");
    setSuccessMessage("");
  };

  const handleStyleChange = (value) => {
    setForm((prev) => ({ ...prev, stylePreference: value }));
    setErrors((prev) => ({ ...prev, stylePreference: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }
    if (!form.stylePreference) {
      newErrors.stylePreference = "Please select a style preference";
    }
    if (!form.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (form.phoneNumber && !/^\d{10}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setGeneralError("");
  setSuccessMessage("");

  const isValid = validateForm();
  if (!isValid) return;

  const token = localStorage.getItem("token");
  if (!token) {
    setGeneralError("You must be logged in before setting up your profile.");
    return;
  }

  try {
    setIsSubmitting(true);

    const res = await fetch("http://localhost:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setGeneralError(data.error || "Failed to save profile. Try again.");
    } else {
      setSuccessMessage("Profile saved successfully! 🎉");

      // 👉 Navigate AFTER success, using ID from backend
      const userId = data.user?._id;

      if (!userId) {
        console.error("User ID missing in response:", data);
        return;
      }

      setTimeout(() => {
        navigate(`/profile/${userId}`);
      }, 2000);
    }
  } catch (err) {
    console.error(err);
    setGeneralError("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-[#FFF8F9] font-sans p-4 lg:p-10 flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto w-full">
        {/* Global messages */}
        {(generalError || successMessage) && (
          <div className="mb-4">
            {generalError && (
              <p className="text-sm text-red-500 font-medium">
                {generalError}
              </p>
            )}
            {successMessage && (
              <p className="text-sm text-green-600 font-medium">
                {successMessage}
              </p>
            )}
          </div>
        )}

        {/* Main Grid Container */}
        <form
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch"
          onSubmit={handleSubmit}
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Set up your User account
              </h1>

              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  className={inputClass}
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  className={inputClass}
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col gap-3">
                <label className={labelClass}>Profile Picture</label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm">
                    <User size={24} />
                  </div>
                  <div className="relative flex-1">
                    <select
                      name="profilePicture"
                      className={`${inputClass} appearance-none cursor-pointer`}
                      value={form.profilePicture}
                      onChange={handleChange}
                    >
                      <option>Select Profile Picture</option>
                      <option>Upload Custom</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Date of Birth*</label>
                <div className="relative">
                  <input
                    type="date"
                    name="dateOfBirth"
                    className={inputClass}
                    value={form.dateOfBirth}
                    onChange={handleChange}
                  />
                  <Calendar className="absolute right-4 top-3 text-gray-400 w-4 h-4" />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-xs text-red-500">{errors.dateOfBirth}</p>
                )}
              </div>

              {/* Style Preference */}
              <div className="flex flex-col gap-3">
                <label className={labelClass}>Style Preference*</label>
                <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                  {["Men", "Women", "Both"].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer px-2"
                    >
                      <input
                        type="radio"
                        name="stylePreference"
                        className="w-4 h-4 accent-gray-900"
                        checked={form.stylePreference === opt}
                        onChange={() => handleStyleChange(opt)}
                      />
                      <span className="text-sm font-medium text-gray-600">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.stylePreference && (
                  <p className="text-xs text-red-500">
                    {errors.stylePreference}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  className={inputClass}
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Button pinned to bottom of left column */}
            <div className="pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A1A1A] text-white rounded-xl py-4 text-sm font-semibold shadow-xl hover:bg-black transition-all transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Saving..." : "Continue"}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between gap-8">
            {/* Smaller Image */}
            <div className="w-full max-w-md mx-auto h-[380px] lg:h-[420px] rounded-[1.5rem] overflow-hidden shadow-2xl relative group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
                alt="Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="font-bold text-sm text-gray-900">Cerope</span>
              </div>
            </div>

            {/* Location Details */}
            <div className="w-full max-w-md mx-auto flex flex-col gap-6">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 pb-2 w-max">
                Location Details
              </div>

              {/* Country */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Country *</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  className={inputClass}
                  value={form.country}
                  onChange={handleChange}
                />
                {errors.country && (
                  <p className="text-xs text-red-500">{errors.country}</p>
                )}
              </div>

              {/* City */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>City</label>
                <div className="relative">
                  <select
                    name="city"
                    className={`${inputClass} appearance-none cursor-pointer`}
                    value={form.city}
                    onChange={handleChange}
                  >
                    <option value="">Select location</option>
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
