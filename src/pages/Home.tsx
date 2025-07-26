import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Search, Smartphone, ShoppingCart, Shield, Zap, Users, Star, CheckCircle, Brain, Cpu, Globe, Database, Lock, Rocket } from 'lucide-react';
import heroImage from '../assets/hero-banner.jpg';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'AI-Powered Web Development',
      description: 'Next-generation websites with AI integration and modern frameworks',
      link: '/services/web-development',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'AI Solutions & Automation',
      description: 'Intelligent automation and AI-driven business solutions',
      link: '/services/software',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Search,
      title: 'Advanced SEO & Analytics',
      description: 'Data-driven SEO strategies with AI-powered insights',
      link: '/services/seo',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: 'Digital Marketing 2.0',
      description: 'AI-enhanced marketing campaigns that deliver results',
      link: '/services/digital-marketing',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Cyber Security & AI Defense',
      description: 'Advanced security with AI-powered threat detection',
      link: '/services/cybersecurity',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: Cpu,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions with intelligent monitoring',
      link: '/services/software',
      gradient: 'from-cyan-500 to-blue-600'
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
    { number: '1000+', label: 'AI Solutions Deployed', gradient: 'from-blue-400 to-purple-500' },
    { number: '99.9%', label: 'Uptime Guarantee', gradient: 'from-green-400 to-blue-500' },
    { number: '150+', label: 'Expert AI Engineers', gradient: 'from-purple-400 to-pink-500' },
    { number: '24/7', label: 'Global Support', gradient: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 font-display">
              <Cpu className="w-4 h-4 mr-2 text-blue-400" />
              Powered by Advanced AI Technology
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 font-display leading-tight">
              <span className="text-gradient block mb-2">AI Agents</span>
              <span className="text-foreground">for the</span>
              <span className="text-gradient-secondary block">Enterprise</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-foreground/80 leading-relaxed max-w-4xl mx-auto font-medium">
              Make finance, compliance and operations teams smarter. 
              <br className="hidden md:block" />
              Outsource back office workflows to AI agents.
              <br className="hidden md:block" />
              <span className="text-primary font-semibold">Loved by IT and Transformation teams.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="modern-button text-white text-lg px-10 py-5 inline-flex items-center justify-center space-x-3 font-display font-semibold"
              >
                <span>Get a Demo</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="modern-button bg-white/10 backdrop-blur-sm border border-white/20 text-foreground text-lg px-10 py-5 hover:bg-white/20 transition-all duration-500 font-display font-semibold"
              >
                Try It Now
              </Link>
            </div>

            {/* Trusted by logos */}
            <div className="text-center">
              <p className="text-foreground/60 text-sm mb-8 font-medium">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Microsoft', 'Google', 'Amazon', 'Salesforce', 'Oracle'].map((company) => (
                  <div key={company} className="text-foreground/40 font-display font-medium text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-accent rounded-full opacity-25 animate-ping" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-background via-surface to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in group">
                <div className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-display`}>
                  {stat.number}
                </div>
                <div className="text-lg text-foreground/70 font-medium group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-br from-background via-surface/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 font-display font-medium">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 font-display">
              A Powerful Interface to
              <span className="text-gradient-secondary block">Deploy AI Agents</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation and AI-driven solutions 
              that scale with your enterprise needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="service-card hover-lift hover-glow group cursor-pointer relative"
              >
                <div className="text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-gradient transition-all duration-300 font-display">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center text-primary group-hover:translate-x-3 transition-all duration-300">
                    <span className="font-semibold font-display">Explore Solution</span>
                    <ArrowRight size={18} className="ml-3 group-hover:rotate-45 transition-transform duration-300" />
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