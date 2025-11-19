import React from "react";
import Navbar from "../../Navbar.jsx";
import Footer from "../../Footer.jsx";
import AccountPage from "./AccountPage.jsx";

export default function AccountApp(){
    return(
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white flex flex-col antialiased text-slate-800">
      <Navbar />
      <AccountPage/>
      <Footer />
    </div>
    )
}