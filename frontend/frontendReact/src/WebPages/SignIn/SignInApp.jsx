// src/WebPages/SignIn/SignInApp.jsx
import React from "react";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";
import SignInPage from "./SignInPage.jsx"; // <-- relative file, not "SignIn.jsx"

export default function SignInApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white flex flex-col antialiased text-slate-800">
      <Navbar />
      <SignInPage />
      <Footer />
    </div>
  );
}
