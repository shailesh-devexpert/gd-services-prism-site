import React, { useState } from 'react';
import { Search, TrendingUp, Target, Users, BarChart3, MessageSquare, ArrowRight, CheckCircle, Globe, Eye, MousePointer, PieChart, Send, FileText, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEO = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', website: '', serviceType: '', budget: '', timeline: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'In-depth keyword analysis to target the right search terms for your business'
    },
    {
      icon: Globe,
      title: 'On-Page SEO',
      description: 'Optimize your website structure, content, and meta tags for better rankings'
    },
    {
      icon: Target,
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from crawling your site'
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Create SEO-optimized content that ranks and converts visitors'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track progress with detailed SEO performance reports'
    },
    {
      icon: Megaphone,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers'
    }
  ];

  const tools = [
    { name: 'Google Analytics', category: 'Analytics', description: 'Comprehensive website analytics' },
    { name: 'Google Search Console', category: 'Analytics', description: 'Search performance monitoring' },
    { name: 'SEMrush', category: 'Research', description: 'Keyword and competitor analysis' },
    { name: 'Ahrefs', category: 'Research', description: 'Backlink analysis and research' },
    { name: 'Screaming Frog', category: 'Technical', description: 'Technical SEO auditing' },
    { name: 'Moz Pro', category: 'Research', description: 'SEO toolkit and rank tracking' }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your goals',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute on-page, technical, and content optimizations',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Track results and continuously improve performance',
      icon: BarChart3
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
              SEO Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Boost your search rankings and drive organic traffic with data-driven SEO strategies
            </p>
            <Link
              to="/contact"
              className="modern-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get SEO Audit</span>
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
              Complete SEO Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical optimization to content strategy, we cover all aspects of SEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card hover-lift animate-scale-in">
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional SEO Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use industry-leading tools to deliver accurate insights and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="modern-card hover-lift">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-foreground mb-2">{tool.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{tool.category}</p>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our SEO Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to improving your search engine rankings
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
                Comprehensive SEO Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Everything you need to dominate search results and drive organic traffic.
              </p>

              <div className="space-y-4">
                {[
                  'Complete SEO Audit & Analysis',
                  'Keyword Research & Strategy',
                  'On-Page SEO Optimization',
                  'Technical SEO Implementation',
                  'Content Optimization',
                  'Local SEO & Google My Business',
                  'Link Building & Outreach',
                  'Competitor Analysis',
                  'Monthly Performance Reports',
                  '24/7 SEO Monitoring'
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
                Get Free SEO Audit
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
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website URL *"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select SEO Service</option>
                    <option value="audit">SEO Audit</option>
                    <option value="local">Local SEO</option>
                    <option value="ecommerce">E-commerce SEO</option>
                    <option value="ongoing">Ongoing SEO</option>
                    <option value="technical">Technical SEO</option>
                    <option value="content">Content SEO</option>
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Monthly Budget</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your SEO goals *"
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
                  <span>Get Free Audit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;