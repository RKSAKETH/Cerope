// src/pages/SignInPage.jsx
import React from "react";
import { Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignInPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in…");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white flex flex-col">

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left section - Form */}
        <div className="max-w-md mx-auto w-full space-y-8">

          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back to Cerope</h1>
            <p className="text-gray-500 text-sm">Your personalized fashion journey awaits.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white 
                  focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-700"
                />
                <Mail className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white 
                  focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none"
                />
                <Lock className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs md:text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-black" />
                Remember me
              </label>
              <button className="text-blue-600 hover:underline">Forgot Password?</button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gray-900 text-white font-medium shadow-lg hover:bg-gray-800 transition-all"
            >
              Sign In
            </button>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs text-gray-500 bg-white px-3">or</div>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-medium flex 
                items-center justify-center gap-2 hover:bg-gray-50 transition-all"
            >
              <span className="font-bold text-lg">G</span> Continue with Google
            </button>
          </form>

          <p className="text-center text-xs md:text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:block h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-purple-900 relative">
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop"
            alt="Fashion Neon"
            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-8 right-8 text-white text-2xl font-bold">∞ Cerope</div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default SignInPage;
