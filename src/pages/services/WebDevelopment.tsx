import React from 'react';
import { Code, Smartphone, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
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
    }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP',
    'Vue.js', 'Angular', 'Express', 'Django', 'Laravel', 'MongoDB',
    'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes for approval'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your application with rigorous testing at every stage'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your project and providing ongoing maintenance'
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
              className="glass-button bg-white/20 text-white text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
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
              <div key={index} className="glass-card text-center hover-lift animate-scale-in">
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
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging the latest technologies to build robust and scalable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="glass px-6 py-3 rounded-xl text-foreground font-medium hover:bg-gradient-primary hover:text-white transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
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
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach ensuring quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="glass-card text-center hover-lift animate-slide-up">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  'Web Application Development',
                  'CMS Development',
                  'API Development & Integration',
                  'Website Maintenance & Support',
                  'Performance Optimization',
                  'Security Implementation'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card animate-scale-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's discuss your web development project and create a solution that exceeds your expectations.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full glass-button bg-gradient-primary text-white text-center py-3 hover:scale-105 transition-all duration-300 block"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="w-full glass-button text-foreground border border-primary hover:bg-primary/10 text-center py-3 hover:scale-105 transition-all duration-300 block"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;