import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Search, Smartphone, ShoppingCart, Shield, Zap, Users, Star, CheckCircle, Brain, Cpu, Globe, Database, Lock, Rocket, Clock, Award, Target, TrendingUp, Filter, Play, Github, Mail, Linkedin } from 'lucide-react';
import heroImage from '../assets/hero-banner.jpg';
import techCodeImage from '../assets/tech-code.jpg';
import aiRobotImage from '../assets/ai-robot.jpg';
import macbookCodeImage from '../assets/macbook-code.jpg';
import teamMember1Image from '../assets/team-member-1.jpg';
import teamMember2Image from '../assets/team-member-2.jpg';

const Home = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
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

  const coreServices = [
    { icon: Code, name: 'Web Development', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Brain, name: 'AI Solutions', gradient: 'from-purple-500 to-pink-500' },
    { icon: Search, name: 'SEO Optimization', gradient: 'from-green-500 to-emerald-500' },
    { icon: Rocket, name: 'Digital Marketing', gradient: 'from-orange-500 to-red-500' },
    { icon: Shield, name: 'Cyber Security', gradient: 'from-red-500 to-pink-500' },
    { icon: ShoppingCart, name: 'E-commerce', gradient: 'from-indigo-500 to-purple-500' },
    { icon: Smartphone, name: 'Mobile Apps', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Database, name: 'Cloud Solutions', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Globe, name: 'Web Hosting', gradient: 'from-amber-500 to-orange-500' },
    { icon: Cpu, name: 'AI Automation', gradient: 'from-violet-500 to-purple-500' },
    { icon: Lock, name: 'Data Security', gradient: 'from-rose-500 to-pink-500' },
    { icon: TrendingUp, name: 'Analytics', gradient: 'from-teal-500 to-cyan-500' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '10+ Years Experience',
      description: 'Proven track record of delivering exceptional digital solutions',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Award-Winning Team',
      description: 'Industry-recognized experts in AI and digital transformation',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: '99.9% Success Rate',
      description: 'Consistently delivering projects on time and within budget',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'ROI Focused',
      description: 'Every solution designed to maximize your return on investment',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: ShoppingCart, description: 'Online retail and marketplace solutions' },
    { name: 'Healthcare', icon: Shield, description: 'HIPAA-compliant health tech solutions' },
    { name: 'Real Estate', icon: Globe, description: 'Property management and listing platforms' },
    { name: 'Education', icon: Brain, description: 'E-learning and educational technology' },
    { name: 'Logistics', icon: Cpu, description: 'Supply chain and tracking systems' }
  ];

  const projects = [
    {
      title: 'AI-Powered E-commerce Platform',
      category: 'Web',
      image: macbookCodeImage,
      description: 'Revolutionary shopping experience with AI recommendations',
      tech: ['React', 'AI/ML', 'Node.js']
    },
    {
      title: 'Healthcare Analytics Dashboard',
      category: 'App',
      image: techCodeImage,
      description: 'Real-time patient data visualization and insights',
      tech: ['Vue.js', 'Python', 'AWS']
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      image: aiRobotImage,
      description: '300% ROI increase through AI-driven targeting',
      tech: ['Analytics', 'AI', 'Automation']
    }
  ];

  const techStack = [
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Node.js', icon: Database, category: 'Backend' },
    { name: 'Python', icon: Brain, category: 'AI/ML' },
    { name: 'AWS', icon: Globe, category: 'Cloud' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'Docker', icon: Cpu, category: 'DevOps' },
    { name: 'GitHub', icon: Github, category: 'Version Control' },
    { name: 'Kubernetes', icon: Shield, category: 'Orchestration' }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'AI Solutions Architect',
      image: teamMember1Image,
      funFact: 'Built his first AI model at age 16',
      social: { linkedin: '#', github: '#', email: '#' }
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Full-Stack Developer',
      image: teamMember2Image,
      funFact: 'Contributed to 50+ open-source projects',
      social: { linkedin: '#', github: '#', email: '#' }
    },
    {
      name: 'Marcus Johnson',
      role: 'Cybersecurity Expert',
      image: teamMember1Image,
      funFact: 'Former ethical hacker turned protector',
      social: { linkedin: '#', github: '#', email: '#' }
    },
    {
      name: 'Emily Davis',
      role: 'Digital Marketing Strategist',
      image: teamMember2Image,
      funFact: 'Generated $10M+ in client revenue',
      social: { linkedin: '#', github: '#', email: '#' }
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

      {/* What We Do - Core Services Overview */}
      <section className="py-32 bg-gradient-to-b from-background to-surface/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 font-display font-medium">
              <Code className="w-4 h-4 mr-2" />
              What We Do
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              Comprehensive
              <span className="text-gradient block">Digital Solutions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              From AI automation to cybersecurity, we provide end-to-end IT services that transform businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="modern-card hover-lift group cursor-pointer text-center p-8"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300 font-display">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GD Services - Key Benefits */}
      <section className="py-32 bg-gradient-to-br from-surface via-background to-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm mb-6 font-display font-medium">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              Experience That
              <span className="text-gradient-secondary block">Delivers Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="modern-card hover-lift group text-center p-10"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500`}>
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-6 font-display font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Industries We Serve
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              Specialized Solutions for
              <span className="text-gradient block">Every Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="modern-card hover-lift group cursor-pointer text-center p-8"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <industry.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {industry.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects / Case Studies */}
      <section className="py-32 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 font-display font-medium">
              <Rocket className="w-4 h-4 mr-2" />
              Our Work
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              Success Stories &
              <span className="text-gradient-secondary block">Case Studies</span>
            </h2>
            
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4 bg-white/50 backdrop-blur-sm rounded-2xl p-2">
                {['All', 'Web', 'App', 'Marketing'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-xl font-display font-semibold transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-gradient-primary text-white shadow-lg'
                        : 'text-foreground/70 hover:text-foreground hover:bg-white/50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="modern-card hover-lift group cursor-pointer overflow-hidden p-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="font-semibold font-display">View Details</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 bg-gradient-to-b from-surface/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-6 font-display font-medium">
              <Cpu className="w-4 h-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              Cutting-Edge
              <span className="text-gradient block">Technologies</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We use the latest and most reliable technologies to build scalable, secure solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="modern-card hover-lift group cursor-pointer text-center p-8"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <tech.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                  {tech.name}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm mb-6 font-display font-medium">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 font-display">
              The Minds Behind
              <span className="text-gradient-secondary block">Your Success</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A team of passionate experts dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="modern-card hover-lift group text-center p-8"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-foreground/70 text-sm mb-6 italic">
                  "{member.funFact}"
                </p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin size={14} className="text-white" />
                  </a>
                  <a href={member.social.github} className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={14} className="text-white" />
                  </a>
                  <a href={member.social.email} className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Mail size={14} className="text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;