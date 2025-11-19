// src/App.jsx
import React from "react";
import NavbarProfile from "./NavbarProfile.jsx";
import Profilepage from "./Profilepage.jsx";
import Footer from "../../Footer.jsx";

export default function ProfilePageApp() {
  return (
    <>
        <NavbarProfile/>
        <Profilepage/>
        <Footer/>
    </>
  )
}
