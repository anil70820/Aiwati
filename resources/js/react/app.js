import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AdminRegister from "./components/AdminRegister";
import Sidebar from "./components/common/Sidebar";
import VerifyOtp from "./components/VerifyOtp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const app = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Sidebar />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/admin-register" element={<AdminRegister />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
                <Route
                    path="/admin-register/verify-otp"
                    element={<VerifyOtp />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </div>
    );
};

export default app;
