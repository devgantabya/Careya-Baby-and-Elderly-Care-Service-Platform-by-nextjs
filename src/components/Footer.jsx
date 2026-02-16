import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-xl font-bold text-lg">
              C
            </div>
            <h2 className="text-2xl font-bold text-white">Careya</h2>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Careya is a trusted platform for baby sitting, elderly care, and
            patient support. We make caregiving simple, safe, and accessible for
            every family.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 hover:bg-white hover:text-black transition rounded-lg flex items-center justify-center"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 hover:bg-white hover:text-black transition rounded-lg flex items-center justify-center"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 hover:bg-white hover:text-black transition rounded-lg flex items-center justify-center"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/service/baby-care"
                className="hover:text-white transition"
              >
                Baby Care
              </Link>
            </li>
            <li>
              <Link
                href="/service/elderly-care"
                className="hover:text-white transition"
              >
                Elderly Care
              </Link>
            </li>
            <li>
              <Link
                href="/service/sick-care"
                className="hover:text-white transition"
              >
                Sick Patient Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-white transition">
                Register
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="hover:text-white transition">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@careya.com</p>
          <p className="text-sm mt-2 text-gray-400">Phone: +880 1XXXXXXXXX</p>
          <p className="text-sm mt-2 text-gray-400">Available 24/7 Support</p>

          <div className="mt-4 text-sm text-gray-500">Dhaka, Bangladesh</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Careya. All rights reserved.</p>

          <p className="mt-3 md:mt-0">
            Built with <span className="text-red-500">❤</span> for caregiving
          </p>
        </div>
      </div>
    </footer>
  );
}
