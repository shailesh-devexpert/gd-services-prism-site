import React from 'react';
import { Users, Target, Eye, Award, Code, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'David Anderson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 10+ years in IT consulting'
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
      description: 'Technical expert specializing in cloud architecture'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack developer with expertise in modern frameworks'
    },
    {
      name: 'Emily Johnson',
      position: 'Design Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Creative designer focused on user experience'
    },
    {
      name: 'James Wilson',
      position: 'Security Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Cybersecurity expert protecting digital assets'
    },
    {
      name: 'Lisa Thompson',
      position: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      description: 'Digital marketing strategist driving growth'
    }
  ];

  const values = [
    {
      icon: Code,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients to achieve exceptional results'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality solutions that exceed expectations'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and honest communication'
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
              About GD Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Empowering businesses through innovative IT solutions and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="modern-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide innovative, reliable, and scalable IT solutions that help businesses 
                  achieve their digital transformation goals. We are committed to delivering 
                  exceptional value through cutting-edge technology and personalized service.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="modern-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                    <Eye size={24} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading IT services provider, recognized for our innovation, 
                  expertise, and commitment to client success. We envision a future where 
                  technology seamlessly empowers every business to reach its full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2019, GD Services began as a small team of passionate developers 
              and IT professionals with a shared vision: to bridge the gap between complex 
              technology and business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card text-center hover-lift animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2019 - The Beginning</h3>
              <p className="text-muted-foreground">
                Started with 3 developers and a vision to transform how businesses approach technology
              </p>
            </div>

            <div className="modern-card text-center hover-lift animate-slide-up">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2021 - Growth</h3>
              <p className="text-muted-foreground">
                Expanded to 25+ team members and served over 200 clients across various industries
              </p>
            </div>

            <div className="modern-card text-center hover-lift animate-slide-up">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2024 - Excellence</h3>
              <p className="text-muted-foreground">
                Recognized as a leading IT services provider with 500+ successful projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="modern-card text-center hover-lift animate-scale-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="modern-card text-center hover-lift animate-scale-in">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover shadow-material-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;