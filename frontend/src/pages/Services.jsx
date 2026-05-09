// Services page
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Main Services */}
      <MainServices />
      
      {/* Additional Services */}
      <AdditionalServices />
      
      {/* CTA */}
      <ServicesCTA />
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] flex items-center justify-start bg-gradient-to-r from-navy/90 to-navy/50 bg-cover bg-center mt-20"
      style={{ backgroundImage: 'url(/images/service_exam.png)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 from-40% to-navy/30 to-100%"></div>
      
      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-white">Our Services</h1>
        <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl">
          Comprehensive eye care for every patient and every need
        </p>
      </div>
    </section>
  );
}

function MainServices() {
  const { ref, isVisible } = useScrollReveal();
  
  const mainServices = [
    {
      icon: CheckCircle,
      title: 'Comprehensive Eye Exams',
      description: 'Complete vision assessment including eye pressure testing, visual field analysis, and retinal examination. Early detection of eye diseases.',
      features: ['Vision screening', 'Eye pressure testing', 'Retinal examination', 'Optical coherence tomography (OCT)'],
      image: 'https://images.pexels.com/photos/6749757/pexels-photo-6749757.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Award,
      title: 'Cataract Surgery',
      description: 'Advanced surgical procedures using state-of-the-art technology. Minimally invasive approach with rapid recovery.',
      features: ['Phacoemulsification', 'Premium IOL options', 'Astigmatism correction', 'Specialized anesthesia'],
      image: 'https://images.pexels.com/photos/7584491/pexels-photo-7584491.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Zap,
      title: 'Glaucoma Management',
      description: 'Early detection and comprehensive treatment to prevent vision loss. Medical and surgical options available.',
      features: ['Early detection screening', 'Medical therapy', 'Laser treatment', 'Surgical management'],
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Users,
      title: 'Pediatric Eye Care',
      description: 'Specialized eye care for children from infancy through adolescence. Comfortable, child-friendly environment.',
      features: ['Vision development screening', 'Amblyopia treatment', 'Glasses & contacts fitting', 'Strabismus management'],
      image: 'https://images.pexels.com/photos/7653112/pexels-photo-7653112.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Main Services
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto text-lg">
          Expert care across all specialties
        </p>
        
        <div className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {mainServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body-text text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-3">
                        <span className="text-amber font-bold mt-1">✓</span>
                        <span className="text-body-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`h-80 bg-gradient-to-br from-teal/20 to-amber/10 rounded-card overflow-hidden ${idx % 2 === 1 ? 'md:order-1' : ''}`}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AdditionalServices() {
  const { ref, isVisible } = useScrollReveal();
  
  const additionalServices = [
    'Refractive Surgery (LASIK)',
    'Contact Lens Fitting',
    'Dry Eye Treatment',
    'Diabetic Retinopathy Management',
    'Macular Degeneration Care',
    'Corneal Disease Management',
    'Optical Shop (Glasses & Frames)',
    'Vision Therapy',
  ];

  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Additional Services
        </h2>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {additionalServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 border border-light-gray hover:shadow-lg transition-shadow text-center">
              <p className="font-serif text-lg text-navy">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Ready to Improve Your Vision?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Book an appointment with one of our specialists today
        </p>
        <Link 
          to="/booking"
          className="inline-block bg-amber text-white px-8 py-4 rounded-btn font-semibold text-lg hover:bg-yellow-600 transition-all hover:shadow-lg hover:scale-105"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
