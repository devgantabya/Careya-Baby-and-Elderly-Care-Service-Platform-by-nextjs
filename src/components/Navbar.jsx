"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-xl font-bold">
            C
          </div>
          <span className="text-xl font-semibold text-gray-800">Careya</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/about"
            className="text-gray-600 hover:text-black transition"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-gray-600 hover:text-black transition"
          >
            Services
          </Link>

          <Link
            href="/how-it-works"
            className="text-gray-600 hover:text-black transition"
          >
            How It Works
          </Link>

          <Link
            href="/pricing"
            className="text-gray-600 hover:text-black transition"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 hover:text-black transition"
          >
            Contact
          </Link>
        </div>

        {/* Right Side Auth */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {user ? (
            <>
              <Link
                href="/my-bookings"
                className="text-gray-600 hover:text-black transition"
              >
                My Bookings
              </Link>

              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-600 hover:text-black transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
