import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3001/login", user, {
        withCredentials: true,
      });

      if (res.data.login === true || res.data.user) {
        setMessage("Login successful");
        onLogin?.(res.data.user);
      } else {
        setMessage(res.data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.14),_transparent_30%),linear-gradient(135deg,_#fff7f7,_#ffffff_45%,_#fff1f2)] px-4 py-10 flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-16 h-48 w-48 rounded-full bg-red-200/50 blur-3xl" />
        <div className="absolute bottom-10 right-16 h-56 w-56 rounded-full bg-red-300/40 blur-3xl" />
      </div>
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-red-100 bg-white/90 shadow-[0_30px_80px_rgba(127,29,29,0.12)] backdrop-blur-sm md:flex">
        <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-10 text-white md:flex">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(255,255,255,0.06))]" />
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-red-100">EthioDelivery</p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight">
              Control your delivery business
            </h1>
          </div>
          <div className="relative z-10 space-y-5">
            <p className="text-lg text-red-50">
              Coordinates, orders, and service operations from one secure admin dashboard.
            </p>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-red-100">Secure access</p>
              <p className="mt-3 text-base text-red-50">
                Trusted login for fast order management and service control.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <div className="mb-1 text-xl">📦</div>
                Orders
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <div className="mb-1 text-xl">🚚</div>
                Fleet
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <div className="mb-1 text-xl">📊</div>
                Analytics
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-8 md:w-1/2 md:p-12">
          <div className="mb-8 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Admin login</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-500">Sign in to access your dashboard</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Admin email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your admin email"
                className="w-full rounded-xl border border-gray-200
                 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition 
                 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block 
              text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200
                 bg-gray-50 px-4 py-3 text-gray-900 outline-none 
                 transition focus:border-red-500 focus:bg-white 
                 focus:ring-4 focus:ring-red-100"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="h-4 w-4 rounded accent-red-600" />
                Remember me
              </label>
              <a href="#" className="font-medium text-red-600 hover:text-red-700">
                Forgot password?
              </a>
            </div>
            {message && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm ${message.includes("successful")
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                  }`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 
              py-3.5 text-base font-bold text-white shadow-lg 
              shadow-red-200 transition hover:from-red-700 hover:to-red-800 
              disabled:cursor-not-allowed disabled:from-red-300 disabled:to-red-400">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            Need an account? <button type="button" onClick={() => onSwitchTab && onSwitchTab("register")} className="font-semibold text-red-600 
            hover:text-red-700">Create one</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;