
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-blue-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold text-red-600 hover:text-red-700 transition"
            >
              Ethio<span className="text-gray-900">Delivery</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 font-medium hover:text-red-600 transition"
              >
                Services
                <span
                  className={`text-sm transition-transform ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {serviceOpen && (
                <div className="absolute left-0 top-full pt-3 w-56">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <Link
                      to="/services/ecommerce"
                      className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      🛒 E-commerce
                    </Link>
                    <Link
                      to="/services/delivery"
                      className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      🚚 Delivery
                    </Link>

                    <Link
                      to="/services/business"
                      className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      🏢 Business Delivery
                    </Link>

                    <Link
                      to="/services/tracking"
                      className="block px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      📍 Order Tracking
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Pricing
            </Link>
            <Link
              to="/partner"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Partner
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Contact
            </Link>
          </div>
          {/* Order Button */}
          <div className="hidden md:block">
            <Link
              to="/order"
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-600 text-white font-semibold
               shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300">
              Order Now
              <span className="ml-2">→</span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              About
            </Link>
            {/* Mobile Services */}
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg">
              Services
              <span>{serviceOpen ? "▲" : "▼"}</span>
            </button>
            {serviceOpen && (
              <div className="ml-4 border-l-2 border-red-100">
                <Link
                  to="/services/ecommerce"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-2 text-gray-600 hover:text-red-600"
                >
                  🛒 E-commerce
                </Link>
                <Link
                  to="/services/delivery"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-2 text-gray-600 hover:text-red-600"
                >
                  🚚 Delivery
                </Link>
                <Link
                  to="/services/business"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-2 text-gray-600 hover:text-red-600"
                >
                  🏢 Business Delivery
                </Link>
                <Link
                  to="/services/tracking"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-2 text-gray-600 hover:text-red-600"
                >
                  📍 Order Tracking
                </Link>
              </div>
            )}
            <Link
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Pricing
            </Link>
            <Link
              to="/partner"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Partner
            </Link>
            <Link
              to="/contact"
              onClick={() =>setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
              Contact
            </Link>
            <Link
              to="/order"
              onClick={() =>setMobileOpen(false)}
              className="block mt-3 text-center px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Order Now →
            </Link>
            <Link
              to="/admin"
              onClick={() =>setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 rounded-lg"
            >
             Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;

