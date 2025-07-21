import React, { useState } from 'react';
import { Code, Smartphone, Zap, Shield, Users, ArrowRight, CheckCircle, Database, Globe, Palette, Settings, Monitor, Cloud, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built with the latest technologies and best practices'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Websites that look perfect on all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and performance with modern frameworks'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust architecture'
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Seamless integration with various database systems'
    },
    {
      icon: Globe,
      title: 'SEO Optimized',
      description: 'Built-in SEO optimization for better search rankings'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces'
    },
    {
      icon: Settings,
      title: 'Easy Maintenance',
      description: 'Clean code structure for easy updates and maintenance'
    }
  ];

  const frontendTech = [
    { name: 'React', category: 'Frontend', description: 'Component-based UI library' },
    { name: 'Next.js', category: 'Frontend', description: 'React production framework' },
    { name: 'Vue.js', category: 'Frontend', description: 'Progressive JavaScript framework' },
    { name: 'Angular', category: 'Frontend', description: 'Platform for mobile and desktop' },
    { name: 'TypeScript', category: 'Frontend', description: 'Typed JavaScript superset' },
    { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first CSS framework' }
  ];

  const backendTech = [
    { name: 'Node.js', category: 'Backend', description: 'JavaScript runtime environment' },
    { name: 'Python', category: 'Backend', description: 'High-level programming language' },
    { name: 'PHP', category: 'Backend', description: 'Server-side scripting language' },
    { name: 'Express.js', category: 'Backend', description: 'Fast Node.js web framework' },
    { name: 'Django', category: 'Backend', description: 'Python web framework' },
    { name: 'Laravel', category: 'Backend', description: 'PHP web application framework' }
  ];

  const databaseTech = [
    { name: 'PostgreSQL', category: 'Database', description: 'Advanced open-source database' },
    { name: 'MySQL', category: 'Database', description: 'Popular relational database' },
    { name: 'MongoDB', category: 'Database', description: 'NoSQL document database' },
    { name: 'Redis', category: 'Database', description: 'In-memory data structure store' }
  ];

  const cloudTech = [
    { name: 'AWS', category: 'Cloud', description: 'Amazon Web Services' },
    { name: 'Google Cloud', category: 'Cloud', description: 'Google Cloud Platform' },
    { name: 'Vercel', category: 'Cloud', description: 'Frontend deployment platform' },
    { name: 'Docker', category: 'Cloud', description: 'Containerization platform' }
  ];

  const allTechnologies = [...frontendTech, ...backendTech, ...databaseTech, ...cloudTech];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes for approval',
      icon: Palette
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your application with rigorous testing at every stage',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your project and providing ongoing maintenance',
      icon: Cloud
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
              Web Development Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Custom web applications and websites built with cutting-edge technologies
            </p>
            <Link
              to="/contact"
              className="modern-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Web Development?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional web solutions that drive business growth and user engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="service-card text-center hover-lift animate-scale-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging the latest technologies to build robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Monitor className="w-6 h-6 mr-2 text-primary" />
                Frontend
              </h3>
              <div className="space-y-3">
                {frontendTech.map((tech, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-3">
                    <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-secondary" />
                Backend
              </h3>
              <div className="space-y-3">
                {backendTech.map((tech, index) => (
                  <div key={index} className="border-l-2 border-secondary/30 pl-3">
                    <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-accent" />
                Database
              </h3>
              <div className="space-y-3">
                {databaseTech.map((tech, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-3">
                    <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Cloud className="w-6 h-6 mr-2 text-primary" />
                Cloud & DevOps
              </h3>
              <div className="space-y-3">
                {cloudTech.map((tech, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-3">
                    <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach ensuring quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="modern-card text-center hover-lift animate-slide-up">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Quick Enquiry */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services List */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Comprehensive Web Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From simple websites to complex web applications, we provide end-to-end development services.
              </p>

              <div className="space-y-4">
                {[
                  'Custom Website Development',
                  'E-commerce Platforms',
                  'Progressive Web Apps (PWA)',
                  'Content Management Systems',
                  'API Development & Integration',
                  'Website Maintenance & Support',
                  'Performance Optimization',
                  'Security Implementation',
                  'Mobile-First Design',
                  'SEO-Friendly Architecture'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="modern-card animate-scale-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Send className="w-6 h-6 mr-2 text-primary" />
                Quick Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="webapp">Web Application</option>
                    <option value="cms">CMS Development</option>
                    <option value="api">API Development</option>
                    <option value="maintenance">Website Maintenance</option>
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Preferred Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 Months</option>
                    <option value="3-6months">3-6 Months</option>
                    <option value="6months+">6+ Months</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Project Description *"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full modern-button bg-gradient-primary text-white py-3 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Enquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;