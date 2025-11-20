import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link , useNavigate } from "react-router-dom";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset previous errors
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    let hasError = false;

    // simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email ID !");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Incorrect Password, try again.");
      hasError = true;
    }

    if (hasError) return;

    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // handle known backend errors
      if (res.status === 404) {
        setEmailError("This email is not registered.");
        return;
      }

      if (res.status === 400) {
        // backend sends "Wrong password"
        setPasswordError("Incorrect Password, try again.");
        return;
      }

      if (!res.ok) {
        setGeneralError("Something went wrong. Please try again.");
        return;
      }

      const data = await res.json();

      // store JWT + user id (optional but handy)
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("user", JSON.stringify(data));

      // redirect after successful login with /:id
      navigate(`/setaccount/${data._id}`);

    } catch (err) {
      console.error(err);
      setGeneralError("Unable to connect to server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left section - Form */}
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back to Cerope
            </h1>
            <p className="text-gray-500 text-sm">
              Your personalized fashion journey awaits.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);

                    // live validation: clear error when valid
                    if (emailError) {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (emailRegex.test(value)) {
                        setEmailError("");
                      }
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white 
                    focus:ring-2 focus:ring-purple-100 outline-none text-gray-700
                    ${
                      emailError
                        ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                        : "border-gray-200 focus:border-purple-400"
                    }`}
                />
                <Mail className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>

              {emailError && (
                <p className="text-xs text-red-600 font-semibold ml-1">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);

                    // clear password error when user edits
                    if (passwordError) {
                      setPasswordError("");
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white 
                    focus:ring-2 focus:ring-purple-100 outline-none
                    ${
                      passwordError
                        ? "border-red-500 focus:border-red-600 focus:ring-red-200"
                        : "border-gray-200 focus:border-purple-400"
                    }`}
                />
                <Lock className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>

              {passwordError && (
                <p className="text-xs text-red-600 font-semibold ml-1">
                  {passwordError}
                </p>
              )}
            </div>

            {/* General error (for unknown issues / server down) */}
            {generalError && (
              <p className="text-xs text-red-600 font-semibold ml-1">
                {generalError}
              </p>
            )}

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-xs md:text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-black"
                />
                Remember me
              </label>
              <button type="button" className="text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-full bg-gray-900 text-white font-medium shadow-lg transition-all
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-gray-800"
                }`}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 border-t-2 border-gray-300"></div>
              <span className="font-semibold text-gray-600 text-sm">or</span>
              <div className="flex-1 border-t-2 border-gray-300"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-40 h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-800
                         bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all mx-auto"
            >
              <span className="text-2xl font-bold">G</span>
              <span className="text-sm font-semibold">Google</span>
            </button>
          </form>

          <p className="text-center text-xs md:text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/auth">
              <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:block h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-purple-900 relative">
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop"
            alt="Fashion Neon"
            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-8 right-8 text-white text-2xl font-bold">
            ∞ Cerope
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default SignInPage;
