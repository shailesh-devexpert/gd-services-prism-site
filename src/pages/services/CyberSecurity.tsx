import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Database, Network, ArrowRight, CheckCircle, Wifi, Server, FileText, Users, Send, Scan, Bug, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    urgency: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', budget: '', urgency: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: Scan,
      title: 'Security Assessments',
      description: 'Comprehensive vulnerability assessments and penetration testing'
    },
    {
      icon: Shield,
      title: 'Firewall & Network Security',
      description: 'Advanced firewall configuration and network protection systems'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection services'
    },
    {
      icon: Key,
      title: 'Identity Management',
      description: 'Access control, authentication, and identity management solutions'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Data encryption, backup, and compliance solutions'
    },
    {
      icon: Bug,
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breach recovery'
    }
  ];

  const securityTools = [
    { name: 'Nessus', category: 'Vulnerability Scanner', description: 'Comprehensive vulnerability assessment' },
    { name: 'Metasploit', category: 'Penetration Testing', description: 'Advanced penetration testing framework' },
    { name: 'Wireshark', category: 'Network Analysis', description: 'Network protocol analyzer' },
    { name: 'Burp Suite', category: 'Web Security', description: 'Web application security testing' },
    { name: 'OSSEC', category: 'HIDS', description: 'Host-based intrusion detection' },
    { name: 'Splunk', category: 'SIEM', description: 'Security information and event management' }
  ];

  const complianceStandards = [
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'SOC 2', description: 'Service organization controls' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', description: 'Health information privacy' },
    { name: 'PCI DSS', description: 'Payment card industry standards' },
    { name: 'NIST', description: 'Cybersecurity framework' }
  ];

  const threatTypes = [
    { name: 'Malware', icon: Bug, description: 'Viruses, ransomware, and malicious software' },
    { name: 'Phishing', icon: AlertTriangle, description: 'Email and social engineering attacks' },
    { name: 'DDoS', icon: Network, description: 'Distributed denial of service attacks' },
    { name: 'Data Breaches', icon: Database, description: 'Unauthorized access to sensitive data' },
    { name: 'Insider Threats', icon: Users, description: 'Internal security risks and violations' },
    { name: 'Zero-Day', icon: Shield, description: 'Unknown vulnerabilities and exploits' }
  ];

  const process = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of current security posture',
      icon: Scan
    },
    {
      step: '02',
      title: 'Risk Analysis',
      description: 'Identify vulnerabilities and potential security risks',
      icon: AlertTriangle
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy security solutions and protective measures',
      icon: Shield
    },
    {
      step: '04',
      title: 'Monitoring & Support',
      description: 'Continuous monitoring and incident response',
      icon: Eye
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
              Cyber Security Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Protect your business with enterprise-grade cybersecurity solutions
            </p>
            <Link
              to="/contact"
              className="glass-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get Security Assessment</span>
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
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced cybersecurity services to protect your digital assets and infrastructure
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

      {/* Threat Protection */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Threats We Protect Against
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection against modern cyber threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="glass-card hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                    <threat.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{threat.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Compliance */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Security Tools */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Professional Security Tools
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Industry-leading tools for comprehensive security assessment and protection.
              </p>
              <div className="space-y-4">
                {securityTools.map((tool, index) => (
                  <div key={index} className="glass p-4 rounded-xl hover:bg-white/20 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tool.category}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Compliance Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We help you meet industry compliance requirements and security standards.
              </p>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="glass p-4 rounded-xl hover:bg-white/20 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">{standard.name}</h4>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Security Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to identifying, mitigating, and preventing security threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="glass-card text-center hover-lift animate-slide-up">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services List */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Complete Security Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                End-to-end cybersecurity solutions to protect your business from evolving threats.
              </p>

              <div className="space-y-4">
                {[
                  'Vulnerability Assessment & Penetration Testing',
                  'Security Audits & Compliance',
                  'Firewall Configuration & Management',
                  '24/7 Security Monitoring (SOC)',
                  'Incident Response & Recovery',
                  'Employee Security Training',
                  'Data Encryption & Protection',
                  'Network Security Implementation',
                  'Email Security Solutions',
                  'Endpoint Protection & Management'
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
                Security Consultation
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
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name *"
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
                    <option value="">Select Service Type</option>
                    <option value="assessment">Security Assessment</option>
                    <option value="monitoring">24/7 Monitoring</option>
                    <option value="compliance">Compliance Audit</option>
                    <option value="incident">Incident Response</option>
                    <option value="training">Security Training</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Urgency Level</option>
                    <option value="critical">Critical - Immediate</option>
                    <option value="high">High - Within 24 hours</option>
                    <option value="medium">Medium - Within a week</option>
                    <option value="low">Low - Planning phase</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your security concerns *"
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
                  <span>Request Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;