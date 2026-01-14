import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Careya</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Careya is a trusted platform for baby sitting, elderly care, and
            sick patient support. Making caregiving simple, safe, and
            accessible.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/service/baby-care" className="hover:text-white">
                Baby Care
              </Link>
            </li>
            <li>
              <Link href="/service/elderly-care" className="hover:text-white">
                Elderly Care
              </Link>
            </li>
            <li>
              <Link href="/service/sick-care" className="hover:text-white">
                Sick Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-white">
                Register
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="hover:text-white">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: support@care.xyz</p>
          <p className="text-sm mt-1">Phone: +880 1XXXXXXXXX</p>
          <p className="text-sm mt-1">Available 24/7</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Careya. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for caregiving</p>
        </div>
      </div>
    </footer>
  );
}
