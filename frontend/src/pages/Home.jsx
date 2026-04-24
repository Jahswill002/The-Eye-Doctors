// Home page
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  return (
    <div>
      {/* Section 1: Hero */}
      <HeroSection />
      
      {/* Section 2: Trust Bar (Animated Stats) */}
      <TrustBar />
      
      {/* Section 3: Services Overview */}
      <ServicesOverview />
      
      {/* Section 4: Why Choose Us */}
      <WhyChooseUs />
      
      {/* Section 5: Patient Testimonials */}
      <Testimonials />
      
      {/* Section 6: Branch Locator Preview */}
      <BranchLocator />
      
      {/* Section 7: WhatsApp CTA Banner */}
      <WhatsAppBanner />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start bg-gradient-to-r from-navy/90 to-navy/50 bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-112173e7d00b?w=1200&h=800&fit=crop)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 from-40% to-navy/30 to-100%"></div>
      
      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <div className="max-w-2xl ml-0 md:ml-12 pt-32">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight animate-fade-up">
            Seeing Clearly Starts Here.
          </h1>
          
          <p className="text-white/85 text-lg md:text-xl mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Expert eye care across 5 Lagos locations. Trusted by 85,000+ patients for over 20 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/booking"
              className="bg-amber text-white px-10 py-4 rounded-btn font-semibold text-lg hover:bg-yellow-600 transition-all hover:shadow-lg hover:scale-105"
            >
              Book an Appointment
            </Link>
            
            <a 
              href="https://wa.me/234XXXXXXXXXX"
              className="border-2 border-white text-white px-10 py-4 rounded-btn font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
}

// Trust Bar Section with Animated Counters
function TrustBar() {
  const stat1 = useCountUp(85000);
  const stat2 = useCountUp(20);
  const stat3 = useCountUp(5);
  
  return (
    <section className="bg-surface-off-white border-t-2 border-b-2 border-teal py-20">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {/* Stat 1 */}
          <StatCard ref={stat1.ref} count={stat1.count} suffix="+" label="Patients Treated" />
          
          {/* Divider - hidden on mobile */}
          <div className="hidden md:block h-20 border-l border-light-gray my-auto"></div>
          
          {/* Stat 2 */}
          <StatCard ref={stat2.ref} count={stat2.count} suffix="+" label="Years of Excellence" />
          
          {/* Divider - hidden on mobile */}
          <div className="hidden md:block h-20 border-l border-light-gray my-auto"></div>
          
          {/* Stat 3 */}
          <StatCard ref={stat3.ref} count={stat3.count} label="Lagos Locations" />
          
          {/* Divider - hidden on mobile */}
          <div className="hidden md:block h-20 border-l border-light-gray my-auto"></div>
          
          {/* Stat 4 */}
          <StatCard count="4.9" suffix="★" label="Patient Rating" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ count, suffix, label, ref }) {
  return (
    <div ref={ref} className="text-center md:text-left md:px-6">
      <div className="font-serif text-4xl md:text-5xl text-amber mb-2">
        {count}{suffix}
      </div>
      <div className="font-sans text-sm md:text-base text-navy font-medium">
        {label}
      </div>
    </div>
  );
}

// Services Overview Section
function ServicesOverview() {
  const { ref, isVisible } = useScrollReveal();
  
  const services = [
    {
      icon: '👁️',
      title: 'Comprehensive Eye Exams',
      description: 'Complete vision assessment and eye health screening for all ages.',
    },
    {
      icon: '🔬',
      title: 'Cataract Surgery',
      description: 'Advanced surgical procedures with latest technology and expertise.',
    },
    {
      icon: '⚕️',
      title: 'Glaucoma Management',
      description: 'Early detection and treatment to preserve your vision.',
    },
    {
      icon: '👧',
      title: 'Pediatric Eye Care',
      description: 'Specialized care for children\'s vision development.',
    },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Our Expertise
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto">
          Comprehensive eye care for every stage of life
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services"
            className="border-2 border-navy text-navy px-8 py-3 rounded-btn font-semibold hover:bg-navy/5 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-light-gray rounded-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
        {title}
      </h3>
      <p className="text-body-text mb-4">
        {description}
      </p>
      <a href="#" className="text-teal hover:text-amber font-semibold text-sm flex items-center gap-2">
        Learn more →
      </a>
    </div>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              Why Choose Us
            </h2>
            <div className="space-y-6">
              <p className="text-body-text text-lg leading-relaxed">
                With over 20 years of experience and 5 locations across Lagos, we're committed to providing world-class ophthalmology services.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber font-bold">✓</span>
                  <span className="text-body-text">Board-certified ophthalmologists</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber font-bold">✓</span>
                  <span className="text-body-text">State-of-the-art diagnostic equipment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber font-bold">✓</span>
                  <span className="text-body-text">Comfortable, welcoming environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber font-bold">✓</span>
                  <span className="text-body-text">Transparent pricing, no hidden costs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`h-96 bg-gradient-to-br from-teal/20 to-amber/10 rounded-card overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1631217314830-f6f24f3e0eff?w=600&h=600&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
}

// Patient Testimonials Section
function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  
  const testimonials = [
    {
      name: 'Chidi Okafor',
      quote: 'The Eye Doctors saved my sight. Professional, caring, and incredibly knowledgeable.',
      rating: 5,
    },
    {
      name: 'Zainab Hassan',
      quote: 'Best eye care experience I\'ve had. Clean facilities and friendly staff.',
      rating: 5,
    },
    {
      name: 'Tunde Balogun',
      quote: 'Highly recommended. Dr. Adeyemi is amazing and explains everything clearly.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          What Our Patients Say
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto">
          Real experiences from people who trusted us with their vision
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-surface-off-white rounded-card p-8 border border-light-gray">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber">★</span>
                ))}
              </div>
              <p className="text-body-text italic mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-navy">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Branch Locator Preview Section
function BranchLocator() {
  const { ref, isVisible } = useScrollReveal();
  
  const branches = [
    { name: 'Victoria Island', area: 'VI' },
    { name: 'Lekki', area: 'East' },
    { name: 'Surulere', area: 'Central' },
    { name: 'Ikoyi', area: 'South' },
    { name: 'Festac', area: 'West' },
  ];

  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Find Us Near You
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto">
          5 locations across Lagos to serve you better
        </p>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 border border-light-gray text-center hover:shadow-lg transition-shadow">
              <p className="text-teal font-semibold text-sm mb-2">{branch.area}</p>
              <p className="font-serif text-lg text-navy">{branch.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/contact"
            className="bg-amber text-white px-8 py-3 rounded-btn font-semibold hover:bg-yellow-600 transition-all"
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}

// WhatsApp CTA Banner
function WhatsAppBanner() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Have Questions?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Chat with us directly on WhatsApp for quick responses
        </p>
        <a 
          href="https://wa.me/2348086944210"
          className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-btn font-semibold text-lg hover:bg-green-600 transition-all hover:shadow-lg hover:scale-105"
        >
          <MessageCircle size={24} />
          Start Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
