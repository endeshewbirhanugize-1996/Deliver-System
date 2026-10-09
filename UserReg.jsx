
import React, { useState } from "react";
import axios from "axios";
const initialUser = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "customer",
};
const UserReg = ({ onSwitchTab, adminMode = false }) => {
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setSuccess(false);

    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (user.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        fullName: user.fullName.trim(),
        phone: user.phone.trim(),
        email: user.email.trim().toLowerCase(),
        password: user.password,
        role: adminMode ? "staff" : user.role,
      };

      const endpoint = adminMode
        ? "http://localhost:3001/admin/users"
        : "http://localhost:3001/user";

      const response = await axios.post(endpoint, payload, {
        withCredentials: true,
      });

      setSuccess(true);
      setMessage(response.data.message || "Registration successful!");

      setUser(initialUser);
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response?.status === 401 ||
          error.response?.status === 403) {
        setMessage(
          "Admin authorization failed. Please log in with an authorized admin account."
        );
      } else {
        setMessage(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-red-100 flex flex-col md:flex-row">

        {/* Left panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-red-600 to-red-800 p-10 text-white flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-100">
              EthioDelivery
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight">
              {adminMode
                ? "Create a staff account"
                : "Create your account"}
            </h1>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-red-100">
              Join now
            </p>

            <p className="mt-3 text-lg text-red-50">
              Sign up to manage deliveries, track orders, and stay
              connected with your service updates.
            </p>
          </div>
        </div>

        {/* Registration form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Register
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              {adminMode ? "Create staff account" : "Sign up"}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="+251 9XX XXX XXX"
                autoComplete="tel"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                autoComplete="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Account type */}
            {!adminMode && (
              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Account Type
                </label>

                <select
                  id="role"
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                >
                  <option value="customer">Customer</option>
                  <option value="business">Business</option>
                </select>
              </div>
            )}

            {adminMode && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Account Role
                </label>

                <input
                  type="text"
                  value="Staff"
                  readOnly
                  className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-gray-600"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                autoComplete="new-password"
                minLength={8}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Message */}
            {message && (
              <div
                role="alert"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  success
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            {/* Terms */}
            {!adminMode && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 accent-red-600"
                  required
                />

                <label htmlFor="terms">
                  I agree to the terms and conditions.
                </label>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
            >
              {loading
                ? "Creating account..."
                : adminMode
                ? "Create staff account"
                : "Create account"}
            </button>

            {/* Login link */}
            {!adminMode && (
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() =>
                    onSwitchTab?.("login")
                  }
                  className="font-semibold text-red-600 hover:text-red-700"
                >
                  Sign in
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserReg;