// Booking / Appointment Form page
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, Clock, Phone, MapPin, AlertCircle } from 'lucide-react';
import { submitAppointment } from '../utils/api';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    service: 'comprehensive-exam',
    preferredLocation: 'victoria-island',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await submitAppointment(formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          service: 'comprehensive-exam',
          preferredLocation: 'victoria-island',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to submit appointment. Please try again.');
      console.error('Appointment submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const { ref, isVisible } = useScrollReveal();

  return (
    <div>
      {/* Hero Section */}
      <BookingHero />
      
      {/* Form Section */}
      <section ref={ref} className="bg-white py-24 md:py-32 mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-2">
                Book Your Appointment
              </h2>
              <p className="text-body-text mb-8">
                Fill out the form below and we'll confirm your appointment shortly.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-navy mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="text-body-text mb-4">
                    We'll contact you shortly to confirm your appointment.
                  </p>
                  <p className="text-teal font-semibold">
                    Thank you for choosing The Eye Doctors.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans font-medium text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & DOB Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans font-medium text-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                        placeholder="+234 XXX XXXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block font-sans font-medium text-navy mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block font-sans font-medium text-navy mb-2">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                    >
                      <option value="comprehensive-exam">Comprehensive Eye Exam</option>
                      <option value="cataract-surgery">Cataract Surgery</option>
                      <option value="glaucoma">Glaucoma Management</option>
                      <option value="pediatric">Pediatric Eye Care</option>
                      <option value="other">Other (specify below)</option>
                    </select>
                  </div>

                  {/* Location & Date Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans font-medium text-navy mb-2">
                        Preferred Location *
                      </label>
                      <select
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                      >
                        <option value="victoria-island">Victoria Island</option>
                        <option value="lekki">Lekki</option>
                        <option value="surulere">Surulere</option>
                        <option value="ikoyi">Ikoyi</option>
                        <option value="festac">Festac</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans font-medium text-navy mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block font-sans font-medium text-navy mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans font-medium text-navy mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-light-gray rounded-input focus:outline-none focus:ring-2 focus:ring-teal/50 resize-none"
                      placeholder="Tell us about your eye concerns or questions..."
                    ></textarea>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-card p-4 flex gap-3">
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
                    {loading ? 'Submitting...' : 'Confirm Appointment'}
                  </button>
                </form>
              )}
            </div>

            {/* Trust Panel - Right Column */}
            <div className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="bg-surface-off-white rounded-card p-8 border border-light-gray">
                <h3 className="font-serif text-2xl text-navy mb-6">
                  Why Book With Us
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-navy mb-1">Quick Confirmation</p>
                      <p className="text-sm text-body-text">We confirm within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-navy mb-1">Expert Care</p>
                      <p className="text-sm text-body-text">Board-certified ophthalmologists</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-navy mb-1">Modern Technology</p>
                      <p className="text-sm text-body-text">State-of-the-art equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-navy mb-1">Transparent Pricing</p>
                      <p className="text-sm text-body-text">No hidden costs, clear estimates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-navy text-white rounded-card p-8">
                <h4 className="font-serif text-lg mb-6">Contact Us Directly</h4>
                
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Phone size={18} className="flex-shrink-0 mt-0.5" />
                    <span>+234 XXX XXXX XXXX</span>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div>Mon-Fri: 9am-6pm</div>
                      <div>Wed: 9am-9pm</div>
                      <div>Sat: 10am-4pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookingHero() {
  return (
    <section className="relative w-full h-80 md:h-96 flex items-center justify-start bg-gradient-to-r from-navy/90 to-navy/50 bg-cover bg-center mt-20"
      style={{ backgroundImage: 'url(/images/clinic_reception.png)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 from-40% to-navy/30 to-100%"></div>
      
      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-white">Book an Appointment</h1>
        <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl">
          Schedule your visit with one of our expert ophthalmologists
        </p>
      </div>
    </section>
  );
}
