import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xs">EU</span>
              </div>
              <span className="font-bold">Eastern Utah CPAs</span>
            </div>
            <p className="text-white/70 text-sm">
              Professional accounting and auditing services for governmental and non-profit organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:4357890960" className="hover:text-white transition">
                  435-789-0960
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  134 West Main, Suite 101
                  <br />
                  Vernal, Utah 84078
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Tue & Thu:</strong> 8 AM - 5 PM
                  <br />
                  <strong>Mon, Wed, Fri:</strong> By Appointment
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            © {currentYear} Eastern Utah CPA's, PLLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
