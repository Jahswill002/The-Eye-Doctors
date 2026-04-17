// Footer component
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-content mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-6 h-6 text-teal" />
              <h3 className="font-serif text-xl font-bold">The Eye Doctors</h3>
            </div>
            <p className="text-teal/80 text-sm mb-4 max-w-xs">
              Trusted eye care across Lagos for over 20 years. Expert ophthalmology services for the whole family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-teal hover:text-amber transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-teal hover:text-amber transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-teal hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-teal hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-teal hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/booking" className="block text-teal hover:text-white transition-colors text-sm">
                Book Appointment
              </Link>
              <Link to="/contact" className="block text-teal hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <span className="text-teal/80">5 Lagos Locations</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <span className="text-teal/80">+234 XXX XXXX XXXX</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <span className="text-teal/80">info@theeyedoctors.ng</span>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <div className="text-teal/80">
                  <div>Mon-Fri: 9am-6pm</div>
                  <div>Wed: 9am-9pm</div>
                  <div>Sat: 10am-4pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wednesday Callout */}
        <div className="bg-amber/10 border border-amber rounded-card p-4 mb-8">
          <span className="inline-block bg-amber text-navy px-3 py-1 rounded text-xs font-semibold">
            Wednesday Evening Clinic Available
          </span>
          <p className="text-teal text-sm mt-2">Extended hours every Wednesday until 9pm</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal/20 py-6">
        <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-subtle-text text-xs">
          <p>&copy; 2025 The Eye Doctors. All rights reserved.</p>
          <p>Built with care in Lagos</p>
        </div>
      </div>
    </footer>
  );
}
