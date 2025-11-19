import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInApp from "./WebPages/SignIn/SignInApp.jsx";
import SignUpApp from "./WebPages/SignUp/SignUpApp.jsx";
import AccountApp from "./WebPages/AccountSetup/AccountApp.jsx";
import ProfilePageApp from "./WebPages/ProfilePage/ProfilePageApp.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInApp />} />
        <Route path="/signup" element={<SignUpApp />} />
        <Route path="/setaccount" element={<AccountApp/>}></Route>
        <Route path="/profile" element={<ProfilePageApp />} />
        {/* Add more routes later... */}
      </Routes>
    </Router>
  );
}
