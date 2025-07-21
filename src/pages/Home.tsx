import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Search, Smartphone, ShoppingCart, Shield, Zap, Users, Star, CheckCircle } from 'lucide-react';
import heroImage from '../assets/hero-banner.jpg';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      link: '/services/web-development'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic',
      link: '/services/seo'
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      link: '/services/digital-marketing'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      link: '/services/software'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Shopify and WordPress e-commerce solutions',
      link: '/services/shopify'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Protect your business with advanced security measures',
      link: '/services/cybersecurity'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'GD Services transformed our online presence. Our website traffic increased by 300% in just 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Retail Plus',
      content: 'The e-commerce platform they built for us exceeded all expectations. Sales have doubled since launch.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency',
      content: 'Professional, reliable, and innovative. GD Services is our go-to partner for all IT solutions.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Professional IT services and digital solutions to elevate your business. 
              From web development to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="modern-button bg-gradient-primary text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="modern-button text-white border border-white/30 text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed to help your business succeed in the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="service-card hover-lift hover-glow group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose GD Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Skilled professionals with years of industry experience'
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising quality'
              },
              {
                icon: Shield,
                title: 'Secure Solutions',
                description: 'Enterprise-grade security in all our implementations'
              },
              {
                icon: CheckCircle,
                title: '24/7 Support',
                description: 'Round-the-clock support to keep your business running'
              },
              {
                icon: Star,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality control processes'
              },
              {
                icon: ArrowRight,
                title: 'Future-Ready',
                description: 'Scalable solutions that grow with your business'
              }
            ].map((feature, index) => (
              <div key={index} className="modern-card text-center hover-lift animate-slide-up">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="modern-card hover-lift animate-scale-in">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Let's discuss your project and create a solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="modern-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="modern-button border border-white/30 text-white text-lg px-8 py-4 hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;