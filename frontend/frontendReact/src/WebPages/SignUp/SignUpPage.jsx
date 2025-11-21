import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Reusable button
const Button = ({ children, className = "", ...props }) => {
  const baseStyle =
    "w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
  const variant =
    "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl";

  return (
    <button className={`${baseStyle} ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

const PasswordRule = ({ valid, text }) => (
  <div className="flex items-center gap-2">
    <span className={valid ? "text-green-500" : "text-red-500"}>
      {valid ? "✔" : "✖"}
    </span>
    <span className="text-gray-700">{text}</span>
  </div>
);

// Reusable input with right icon + conditional error (with Link)
const InputField = ({
  placeholder,
  type = "text",
  icon: Icon,
  name,
  value,
  onChange,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <div className="relative">
     <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border bg-transparent 
          focus:bg-transparent text-black
          focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none 
          transition-all placeholder-gray-500 placeholder:font-bold
          ${error ? "border-red-500" : "border-gray-200"}`}
     />

      {Icon && (
        <Icon className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
      )}
    </div>

    {/* Render errors */}
    {error &&
      (error === "EmailAlreadyExists" ? (
        <p className="text-xs text-red-600 font-semibold">
          Looks Like You Already Have An Account.&nbsp;
          <Link
            to="/signin"
            className="text-blue-600 underline font-semibold cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      ) : (
        <p className="text-xs text-red-600 font-semibold">{error}</p>
      ))}
  </div>
);

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle changes
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // Password requirements
  const password = form.password;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-]/.test(password);
  const showPasswordHints = password.length > 0;

  // Validation
  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: "",
    };

    // Name
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    else if (/\d/.test(form.name))
      newErrors.name = "Invalid Name! Please Do Not Enter Numerals.";

    // Email
    const email = form.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Please enter your email.";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid Email Address !";
    else if (email.toLowerCase().endsWith("@gmail.co"))
      newErrors.email = "Invalid Email Address !";

    // Password
    if (!form.password) newErrors.password = "Please enter a password.";
    else if (!(hasUpper && hasLower && hasNumber && hasSpecial))
      newErrors.password = "Please meet all password requirements.";

    // Confirm password
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords Don't Match.";

    // Terms
    if (!agree)
      newErrors.terms = "Please Tick The Checkbox To Agree To The Terms .";

    setErrors(newErrors);
    return !Object.values(newErrors).some((msg) => msg);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        let msg = data?.message || data?.error || "Signup failed";

        const lower = msg.toLowerCase();

        // Convert backend message → UI message
        if (
          lower.includes("already") ||
          lower.includes("email exists") ||
          lower.includes("duplicate") ||
          lower.includes("11000")
        ) {
          msg = "EmailAlreadyExists";
        }

        setErrors((prev) => ({ ...prev, email: msg }));
        return;
      }

      setMessage("Account created successfully! 🎉");

      setTimeout(() => navigate("/signin"), 800);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        flex-1 max-w-7xl mx-auto w-full 
        px-6 lg:px-12 py-10 
        grid lg:grid-cols-2 gap-12 
        items-stretch
      "
    >
      {/* LEFT COLUMN */}
      <div className="w-full relative flex flex-col justify-start lg:pr-10 rounded-3xl overflow-hidden">

        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
            alt="Background Texture"
            className="w-full h-full object-cover opacity-[0.08]"
          />
        </div>

        <div className="relative z-10 space-y-6 py-8">
          <div className="space-y-2 pl-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Set up Your Cerope Account
            </h1>

            {errors.terms && (
              <p className="text-sm text-red-600 font-semibold">{errors.terms}</p>
            )}
          </div>

          <form className="space-y-6 max-w-xl pl-6" onSubmit={handleSubmit}>
            <InputField
              name="name"
              placeholder="Name"
              icon={User}
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            <InputField
              name="email"
              placeholder="Email Address"
              type="email"
              icon={Mail}
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* PASSWORD */}
            <div className="space-y-2">
              <InputField
                name="password"
                placeholder="Password"
                type="password"
                icon={Lock}
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />

              {showPasswordHints && (
                <div className="mt-1 text-xs bg-white/90 border border-gray-200 rounded-lg p-3 shadow-sm max-w-sm">
                  <p className="font-semibold mb-1">
                    New Password must contain
                  </p>
                  <PasswordRule valid={hasUpper} text="An Upper Case letter" />
                  <PasswordRule valid={hasLower} text="A lower case letter" />
                  <PasswordRule valid={hasNumber} text="A number" />
                  <PasswordRule
                    valid={hasSpecial}
                    text="A special character (*, @, #)"
                  />
                </div>
              )}
            </div>

            <InputField
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              icon={Lock}
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            {/* TERMS */}
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer py-2">
              <input
                type="checkbox"
                className="mt-1 rounded border-gray-300 text-black focus:ring-0 cursor-pointer"
                checked={agree}
                onChange={(e) => {
                  setAgree(e.target.checked);
                  setErrors((prev) => ({ ...prev, terms: "" }));
                }}
              />
              <span>
                I agree to Cerope&apos;s Terms of Service & Privacy Policy.
              </span>
            </label>

            {message && (
              <p className="text-sm text-green-600 font-semibold">{message}</p>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>

          <p className="text-sm text-gray-600 pl-6">
            Already a member?{" "}
            <Link
              to="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:block h-full min-h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-blue-900 relative">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop"
          alt="Digital Fashion"
          className="
            w-full h-full
            object-cover 
            object-top
            scale-110
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
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
      </div>
    </main>
  );
};

export default Signup;
