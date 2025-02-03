import React, { useState } from 'react'
import Register from './Register';
import AdminRegister from './AdminRegister';

const BothRegister = () => {
    const [activeTab, setActiveTab] = useState("user");

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center p-5">
            {/* Tab Buttons */}
            <div className="flex border-b-2 border-gray-300">
                <button
                    onClick={() => setActiveTab("user")}
                    className={`px-6 py-3 text-lg font-semibold ${
                        activeTab === "user"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-500"
                    }`}
                >
                    User
                </button>
                <button
                    onClick={() => setActiveTab("admin")}
                    className={`px-6 py-3 text-lg font-semibold ${
                        activeTab === "admin"
                            ? "border-b-4 border-blue-500 text-blue-500"
                            : "text-gray-500"
                    }`}
                >
                    Admin
                </button>
            </div>

            {/* Render Forms Based on Active Tab */}
            <div className="w-full">
                {activeTab === "user" ? <Register /> : <AdminRegister />}
            </div>
        </div>
    );
};

export default BothRegister