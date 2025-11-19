import React from "react";
import { User, Mail, Lock } from "lucide-react";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

// Reusable button with your styling
const Button = ({ children, className = "", ...props }) => {
  const baseStyle =
    "w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variant =
    "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl";

  return (
    <button className={`${baseStyle} ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable input with right icon
const InputField = ({ placeholder, type = "text", icon: Icon }) => (
  <div className="flex flex-col gap-2">
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder-gray-400"
      />
      {Icon && (
        <Icon className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
      )}
    </div>
  </div>
);

const Signup = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-10 grid lg:grid-cols-2 gap-10 items-center">
      {/* LEFT: form card */}
      <div className="max-w-md mx-auto w-full space-y-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 px-8 py-10">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Set up Your Cerope Account
          </h1>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <InputField placeholder="Name" icon={User} />
          <InputField placeholder="Email Address" type="email" icon={Mail} />
          <InputField placeholder="Password" type="password" icon={Lock} />
          <InputField
            placeholder="Confirm Password"
            type="password"
            icon={Lock}
          />

          <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer py-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300 text-black focus:ring-0"
            />
            <span>
              I agree to Cerope&apos;s Terms of Service &amp; Privacy Policy.
            </span>
          </label>

          <Button type="submit">Sign Up</Button>
        </form>

        <p className="text-sm text-gray-600">
          Already a member?{" "}
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* RIGHT: hero image card */}
      <div className="hidden lg:block h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-blue-900 relative">
        {/* Replace src with your Cerope dress image */}
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop"
          alt="Digital Fashion"
          className="
            w-full h-full
            object-cover 
            object-top
            scale-125
            transition-transform
            duration-700
            mix-blend-overlay 
            opacity-90
          "
        />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40" />
        <div className="absolute top-8 right-8 text-white text-2xl font-bold">
          Cerope
        </div>
        {/* subtle wireframe texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
      </div>
    </main>
  );
};

export default Signup;
