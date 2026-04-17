// Header component - sticky navigation
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Eye } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 100);
  });

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-content mx-auto px-6 md:px-8 h-20 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Eye className="w-8 h-8 text-white" />
          <span className="text-white font-serif text-lg font-bold hidden sm:inline">The Eye Doctors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-teal transition-colors text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-teal transition-colors text-sm font-medium">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-teal transition-colors text-sm font-medium">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-teal transition-colors text-sm font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link 
          to="/booking"
          className="hidden md:block bg-amber text-white px-7 py-3 rounded-btn font-medium text-sm hover:bg-yellow-600 transition-colors"
        >
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-navy border-t border-teal/20">
          <div className="max-w-content mx-auto px-6 py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/about" className="block text-white hover:text-teal transition-colors">
              About
            </Link>
            <Link to="/services" className="block text-white hover:text-teal transition-colors">
              Services
            </Link>
            <Link to="/contact" className="block text-white hover:text-teal transition-colors">
              Contact
            </Link>
            <Link 
              to="/booking"
              className="block bg-amber text-white px-4 py-2 rounded-btn font-medium text-center"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
