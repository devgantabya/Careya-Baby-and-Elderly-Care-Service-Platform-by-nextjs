"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <Link href="/" className="font-bold">
          Careya
        </Link>

        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/my-bookings">My Bookings</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
