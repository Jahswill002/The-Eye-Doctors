// Contact page
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContact } from '../utils/api';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Branches */}
      <Branches />
      
      {/* Contact Info */}
      <ContactInfo />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="relative w-full h-80 md:h-96 flex items-center justify-start bg-gradient-to-r from-navy/90 to-navy/50 bg-cover bg-center mt-20"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-112173e7d00b?w=1200&h=800&fit=crop)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 from-40% to-navy/30 to-100%"></div>
      
      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-white">Contact Us</h1>
        <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl">
          Reach us through any of our 5 locations across Lagos
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general-inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitContact(formData);
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general-inquiry',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
      console.error('Contact submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Send us a Message
        </h2>
        <p className="text-center text-body-text mb-12 max-w-2xl mx-auto">
          Have a question? Send us a message and we'll respond within 24 hours.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-navy mb-2">
              Message Sent!
            </h3>
            <p className="text-body-text mb-4">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            <p className="text-teal font-semibold">
              Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`bg-white rounded-card p-8 border border-light-gray shadow-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-sans font-medium text-navy mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-sans font-medium text-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-sans font-medium text-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                  placeholder="+234 XXX XXXX XXXX"
                />
              </div>
              <div>
                <label className="block font-sans font-medium text-navy mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                >
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="appointment">Appointment Related</option>
                  <option value="service-question">Service Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block font-sans font-medium text-navy mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50 resize-none"
                placeholder="Please tell us how we can help you..."
              ></textarea>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-card p-4 flex gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-4 rounded-btn font-semibold text-lg transition-all hover:shadow-lg ${
                loading
                  ? 'bg-amber/50 text-white cursor-not-allowed'
                  : 'bg-amber text-white hover:bg-yellow-600'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Branches() {
  const { ref, isVisible } = useScrollReveal();
  
  const branches = [
    {
      name: 'Victoria Island',
      area: 'VI',
      address: '123 Ahmadu Bello Way, V.I., Lagos',
      phone: '+234 XXX XXXX 001',
      email: 'vi@theeyedoctors.ng',
      hours: 'Mon-Fri: 9am-6pm | Wed: 9am-9pm | Sat: 10am-4pm',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: 'Lekki',
      area: 'East',
      address: '456 Lekki Phase 1, Lekki, Lagos',
      phone: '+234 XXX XXXX 002',
      email: 'lekki@theeyedoctors.ng',
      hours: 'Mon-Fri: 9am-6pm | Wed: 9am-9pm | Sat: 10am-4pm',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: 'Surulere',
      area: 'Central',
      address: '789 Babs Animashaun Road, Surulere, Lagos',
      phone: '+234 XXX XXXX 003',
      email: 'surulere@theeyedoctors.ng',
      hours: 'Mon-Fri: 9am-6pm | Wed: 9am-9pm | Sat: 10am-4pm',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: 'Ikoyi',
      area: 'South',
      address: '234 Adetokunbo Ademola Street, Ikoyi, Lagos',
      phone: '+234 XXX XXXX 004',
      email: 'ikoyi@theeyedoctors.ng',
      hours: 'Mon-Fri: 9am-6pm | Wed: 9am-9pm | Sat: 10am-4pm',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: 'Festac',
      area: 'West',
      address: '567 Festac Link Road, Festac Town, Lagos',
      phone: '+234 XXX XXXX 005',
      email: 'festac@theeyedoctors.ng',
      hours: 'Mon-Fri: 9am-6pm | Wed: 9am-9pm | Sat: 10am-4pm',
      mapUrl: 'https://maps.google.com',
    },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Our Locations
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto text-lg">
          Visit any of our 5 branches across Lagos
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-surface-off-white rounded-card p-8 border border-light-gray hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-2xl text-navy">
                  {branch.name}
                </h3>
                <span className="bg-amber/20 text-amber px-3 py-1 rounded text-xs font-semibold">
                  {branch.area}
                </span>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-teal flex-shrink-0 mt-0.5" />
                  <p className="text-body-text">{branch.address}</p>
                </div>
                
                <div className="flex gap-3">
                  <Phone size={18} className="text-teal flex-shrink-0 mt-0.5" />
                  <a href={`tel:${branch.phone}`} className="text-teal hover:text-amber transition-colors">
                    {branch.phone}
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Mail size={18} className="text-teal flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${branch.email}`} className="text-teal hover:text-amber transition-colors break-all">
                    {branch.email}
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Clock size={18} className="text-teal flex-shrink-0 mt-0.5" />
                  <p className="text-body-text text-xs">{branch.hours}</p>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-teal text-white px-4 py-2 rounded-btn font-semibold hover:bg-teal/90 transition-colors text-sm">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Other Ways to Reach Us
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Phone */}
          <div className="bg-white rounded-card p-8 border border-light-gray text-center">
            <div className="w-16 h-16 bg-amber/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-amber" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-2">Call Us</h3>
            <p className="text-body-text mb-4">Available during business hours</p>
            <a href="tel:+234" className="text-teal hover:text-amber font-semibold">
              +234 XXX XXXX XXXX
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-card p-8 border border-light-gray text-center">
            <div className="w-16 h-16 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-teal" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-2">Email Us</h3>
            <p className="text-body-text mb-4">We respond within 24 hours</p>
            <a href="mailto:info@theeyedoctors.ng" className="text-teal hover:text-amber font-semibold">
              info@theeyedoctors.ng
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-card p-8 border border-light-gray text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-serif text-xl text-navy mb-2">WhatsApp</h3>
            <p className="text-body-text mb-4">Chat with us directly</p>
            <a href="https://wa.me/234XXXXXXXXXX" className="text-green-500 hover:text-green-600 font-semibold">
              Start Chat
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl text-navy mb-6">Follow Us</h3>
          <div className="flex gap-6 justify-center">
            <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
