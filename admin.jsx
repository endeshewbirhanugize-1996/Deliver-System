import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserLogin from "./UserLogin";
import UserReg from "./UserReg";
import Registorfood from "./Registorfood";

const Admin = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/admin/session", { withCredentials: true })
            .then((response) => setCurrentUser(response.data.user))
            .catch(() => setCurrentUser(null));
    }, []);

    const tabs = [
        { key: "login", label: "Sign In" },
        { key: "register", label: "Create Account" },
        ...(currentUser?.role === "admin"
            ? [
                { key: "staff", label: "Create Admin/Subadmin" },
            ]
            : []),
        ...(currentUser ? [{ key: "food", label: "Add Food" }] : []),
    ];

    const handleLogin = (user) => {
        setCurrentUser(user);
        setActiveTab(user.role === "admin" ? "staff" : "food");
    };

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });
        } finally {
            setCurrentUser(null);
            setActiveTab("login");
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "register":
                return <UserReg onSwitchTab={setActiveTab} />;
            case "food":
                return <Registorfood />;
            case "staff":
                return <UserReg adminMode onSwitchTab={setActiveTab} />;
            case "login":
            default:
                return <UserLogin onSwitchTab={setActiveTab} onLogin={handleLogin} />;
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 px-4 py-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-red-100 ring-1 ring-red-100">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                                Admin panel
                            </p>
                            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
                                EthioDelivery management
                            </h1>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {tabs.map(({ key, label }) => (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => setActiveTab(key)}
                                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${activeTab === key
                                        ? "bg-red-600 text-white shadow-lg shadow-red-200"
                                        : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-red-50"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        {currentUser && (
                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                                <p className="text-sm text-gray-600">
                                    Signed in as <span className="font-semibold text-gray-900">{currentUser.fullName}</span>
                                    <span className="ml-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-700">{currentUser.role}</span>
                                </p>
                                <button type="button" onClick={handleLogout} className="text-sm font-semibold text-red-600 hover:text-red-700">
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div>{renderTabContent()}</div>
            </div>
        </div>);
};
export default Admin;