import React from "react";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";
import Signup from "./SignUpPage.jsx";

export default function SignUpApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white flex flex-col antialiased text-slate-800">
      <Navbar />
      <Signup/>
      <Footer />
    </div>
  );
}
