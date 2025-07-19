import React, { useState } from 'react';
import { Smartphone, Code, Database, Zap, Shield, Users, ArrowRight, CheckCircle, Monitor, Globe, Settings, Cloud, Send, Cpu, Layers, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    platform: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', projectType: '', platform: '', budget: '', timeline: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      description: 'Custom desktop software solutions for Windows, macOS, and Linux'
    },
    {
      icon: Cloud,
      title: 'Cloud Applications',
      description: 'Scalable cloud-based software solutions and SaaS platforms'
    },
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Large-scale enterprise applications and business management systems'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent software solutions powered by AI and ML algorithms'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Software',
      description: 'Security-focused applications and cybersecurity tools'
    }
  ];

  const mobileTech = [
    { name: 'React Native', description: 'Cross-platform mobile development' },
    { name: 'Flutter', description: 'Google\'s UI toolkit for mobile' },
    { name: 'Swift', description: 'Native iOS development' },
    { name: 'Kotlin', description: 'Modern Android development' },
    { name: 'Xamarin', description: 'Microsoft mobile platform' },
    { name: 'Ionic', description: 'Hybrid mobile app framework' }
  ];

  const backendTech = [
    { name: 'Node.js', description: 'JavaScript runtime for servers' },
    { name: 'Python', description: 'Versatile programming language' },
    { name: 'Java', description: 'Enterprise-grade development' },
    { name: 'C#/.NET', description: 'Microsoft development platform' },
    { name: 'Go', description: 'Fast and efficient backend language' },
    { name: 'Rust', description: 'Systems programming language' }
  ];

  const databaseTech = [
    { name: 'PostgreSQL', description: 'Advanced relational database' },
    { name: 'MongoDB', description: 'Document-oriented database' },
    { name: 'Redis', description: 'In-memory data store' },
    { name: 'Elasticsearch', description: 'Search and analytics engine' },
    { name: 'Cassandra', description: 'Distributed NoSQL database' },
    { name: 'InfluxDB', description: 'Time series database' }
  ];

  const cloudTech = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Microsoft Azure', description: 'Microsoft cloud platform' },
    { name: 'Google Cloud', description: 'Google cloud services' },
    { name: 'Kubernetes', description: 'Container orchestration' },
    { name: 'Docker', description: 'Containerization platform' },
    { name: 'Terraform', description: 'Infrastructure as code' }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Detailed analysis of your software requirements and business goals',
      icon: Users
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'System architecture and technical specification design',
      icon: Layers
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Production deployment and ongoing maintenance support',
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
              Software Development
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Custom software solutions that drive innovation and business growth
            </p>
            <Link
              to="/contact"
              className="glass-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
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
              Software Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From mobile apps to enterprise software, we build solutions that scale
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technologies We Excel In
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies for robust and scalable software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-primary" />
                Mobile Development
              </h3>
              <div className="space-y-3">
                {mobileTech.map((tech, index) => (
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
                Backend Technologies
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
                Databases
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

      {/* Development Process */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agile methodology ensuring quality delivery and client collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="glass-card text-center hover-lift animate-slide-up">
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
                Complete Software Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                End-to-end software development services for businesses of all sizes.
              </p>

              <div className="space-y-4">
                {[
                  'Custom Mobile App Development',
                  'Enterprise Software Solutions',
                  'Desktop Application Development',
                  'Cloud-Based Software Platforms',
                  'API Development & Integration',
                  'Legacy System Modernization',
                  'Software Testing & QA',
                  'DevOps & CI/CD Implementation',
                  'Performance Optimization',
                  'Ongoing Support & Maintenance'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="glass-card animate-scale-in">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Send className="w-6 h-6 mr-2 text-primary" />
                Project Enquiry
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
                    <option value="mobile">Mobile App</option>
                    <option value="web">Web Application</option>
                    <option value="desktop">Desktop Software</option>
                    <option value="enterprise">Enterprise Solution</option>
                    <option value="api">API Development</option>
                    <option value="modernization">System Modernization</option>
                  </select>
                </div>
                <div>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Target Platform</option>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="cross-platform">Cross-Platform</option>
                    <option value="web">Web</option>
                    <option value="desktop">Desktop</option>
                    <option value="cloud">Cloud</option>
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Budget Range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
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
                  className="w-full glass-button bg-gradient-primary text-white py-3 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
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

export default SoftwareDevelopment;