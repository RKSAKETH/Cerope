import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInApp from "./WebPages/SignIn/SignInApp.jsx";
import SignUpApp from "./WebPages/SignUp/SignUpApp.jsx";
import AccountApp from "./WebPages/AccountSetup/AccountApp.jsx";
import ProfilePageApp from "./WebPages/ProfilePage/ProfilePageApp.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpApp />} />
        <Route path="/signin" element={<SignInApp/>}/>
        <Route path="/setaccount/:id" element={<ProtectedRoute><AccountApp/></ProtectedRoute>}></Route>
        <Route path="/profile/:id" element={<ProfilePageApp/>} />
        {/* Add more routes later... */}
      </Routes>
    </Router>
  );
}
