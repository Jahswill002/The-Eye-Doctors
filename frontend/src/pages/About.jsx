// About Us page
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Heart, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <AboutHero />
      
      {/* Our Story */}
      <OurStory />
      
      {/* Our Values */}
      <OurValues />
      
      {/* Our Team */}
      <OurTeam />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] flex items-center justify-start bg-gradient-to-r from-navy/90 to-navy/50 bg-cover bg-center mt-20"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-112173e7d00b?w=1200&h=800&fit=crop)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 from-40% to-navy/30 to-100%"></div>
      
      <div className="relative max-w-content mx-auto px-6 md:px-8 w-full">
        <h1 className="font-serif text-5xl md:text-6xl text-white">About Us</h1>
        <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl">
          20+ years of trusted eye care in Lagos
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`h-96 bg-gradient-to-br from-teal/20 to-amber/10 rounded-card overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1631217314830-f6f24f3e0eff?w=600&h=600&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
          
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-body-text text-lg leading-relaxed">
              <p>
                Founded over 20 years ago, The Eye Doctors began with a simple mission: to bring world-class ophthalmology to Lagos and make expert eye care accessible to every patient who needs it.
              </p>
              <p>
                What started as a single clinic has grown to 5 locations across Lagos, serving over 85,000 patients and counting. Our growth is built on trust, expertise, and an unwavering commitment to our patients' vision and well-being.
              </p>
              <p>
                Today, we're proud to be one of Lagos' leading eye care centers. But we never forget our roots: we're still driven by the same passion to care, to listen, and to deliver the best possible outcomes for every patient who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  const { ref, isVisible } = useScrollReveal();
  
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every decision we make is guided by what\'s best for our patients\' vision and comfort.',
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'We invest in the latest technology and continuous training for our team.',
    },
    {
      icon: Users,
      title: 'Integrity & Transparency',
      description: 'We communicate clearly, charge fairly, and stand behind our work.',
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Quality eye care should be available to everyone, regardless of location or background.',
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'We embrace new techniques and technology to improve patient outcomes.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re part of Lagos. We give back and support the communities we serve.',
    },
  ];

  return (
    <section ref={ref} className="bg-surface-off-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Our Values
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto text-lg">
          These principles guide everything we do
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="bg-white rounded-card p-8 border border-light-gray hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  const { ref, isVisible } = useScrollReveal();
  
  const team = [
    {
      name: 'Dr. Kolade Adeyemi',
      title: 'Chief Ophthalmologist',
      bio: 'Over 20 years in eye care. Specializes in cataract and refractive surgery.',
    },
    {
      name: 'Dr. Chiamaka Okonkwo',
      title: 'Pediatric Ophthalmologist',
      bio: 'Specialist in children\'s eye health and development. Compassionate care expert.',
    },
    {
      name: 'Dr. Hassan Al-Rashid',
      title: 'Glaucoma Specialist',
      bio: 'Expert in early detection and management. Dedicated to vision preservation.',
    },
    {
      name: 'Dr. Folake Johnson',
      title: 'General Ophthalmologist',
      bio: 'Comprehensive eye exams and general eye health. Patient education advocate.',
    },
  ];

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-body-text mb-16 max-w-2xl mx-auto text-lg">
          Expert ophthalmologists dedicated to your care
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {team.map((doctor, idx) => (
            <div key={idx} className="bg-surface-off-white rounded-card overflow-hidden border border-light-gray hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal/20 to-amber/10"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1612349317150-e539c59dc506?w=400&h=400&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-navy mb-1">{doctor.name}</h3>
                <p className="text-teal font-semibold text-sm mb-3">{doctor.title}</p>
                <p className="text-body-text text-sm leading-relaxed">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
