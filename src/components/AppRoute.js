import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import ViewCart from "./ViewCart/ViewCart";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/home" element={<Welcome />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/viewcart" element={<ViewCart />} />
      
    </Routes>
  );
}
