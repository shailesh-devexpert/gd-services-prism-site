import React from 'react';
import { TrendingUp, Target, Users, BarChart3, Search, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your organic search rankings and drive qualified traffic'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience across platforms'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Targeted advertising campaigns with measurable ROI'
    },
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your target audience'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed insights'
    },
    {
      icon: Users,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with effective email campaigns'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Drive growth with data-driven digital marketing strategies that deliver results
            </p>
            <Link
              to="/contact"
              className="glass-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Growing Today</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card hover-lift animate-scale-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Online Presence?</h2>
          <p className="text-xl mb-8">Let's create a marketing strategy that drives real results</p>
          <Link
            to="/contact"
            className="glass-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;