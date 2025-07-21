import React, { useState } from 'react';
import { Filter, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 112 },
    { id: 'web', label: 'Web Development', count: 15 },
    { id: 'mobile', label: 'Mobile Apps', count: 22 },
    { id: 'ecommerce', label: 'E-commerce', count: 20 },
    { id: 'marketing', label: 'Digital Marketing', count: 30 },
    { id: 'shopify', label: 'Shopify', count: 25 }
  ];

  // Portfolio projects data
  const projects = [
    // Web Development Projects
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `web-${i + 1}`,
      category: 'web',
      title: `Modern Web Application ${i + 1}`,
      description: 'Responsive web application built with React and modern technologies',
      image: `https://images.unsplash.com/photo-${1461749280684 + i}-dccba630e2f6?w=600&h=400&fit=crop`,
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#'
    })),
    // Mobile Apps
    ...Array.from({ length: 22 }, (_, i) => ({
      id: `mobile-${i + 1}`,
      category: 'mobile',
      title: `Mobile App ${i + 1}`,
      description: 'Cross-platform mobile application with native performance',
      image: `https://images.unsplash.com/photo-${1512941937669 + i}-64019b3057bc?w=600&h=400&fit=crop`,
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    })),
    // E-commerce Projects
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `ecommerce-${i + 1}`,
      category: 'ecommerce',
      title: `E-commerce Platform ${i + 1}`,
      description: 'Full-featured e-commerce solution with payment integration',
      image: `https://images.unsplash.com/photo-${1556742049 + i * 100}-5c6b4db7ce9c?w=600&h=400&fit=crop`,
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      github: '#'
    })),
    // Digital Marketing Projects
    ...Array.from({ length: 30 }, (_, i) => ({
      id: `marketing-${i + 1}`,
      category: 'marketing',
      title: `Marketing Campaign ${i + 1}`,
      description: 'Comprehensive digital marketing strategy and implementation',
      image: `https://images.unsplash.com/photo-${1460925895917 + i * 50}-afdab827c52f?w=600&h=400&fit=crop`,
      technologies: ['Google Ads', 'SEO', 'Social Media'],
      link: '#',
      github: '#'
    })),
    // Shopify Projects
    ...Array.from({ length: 25 }, (_, i) => ({
      id: `shopify-${i + 1}`,
      category: 'shopify',
      title: `Shopify Store ${i + 1}`,
      description: 'Custom Shopify store with enhanced functionality',
      image: `https://images.unsplash.com/photo-${1486312338219 + i * 75}-ce68d2c6f44d?w=600&h=400&fit=crop`,
      technologies: ['Shopify', 'Liquid', 'JavaScript'],
      link: '#',
      github: '#'
    }))
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Showcasing our expertise across diverse projects and industries
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`modern-button transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-white scale-105'
                    : 'text-foreground hover:bg-white/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <span>{filter.label}</span>
                  <span className="text-xs bg-white/20 rounded-full px-2 py-1">
                    {filter.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="modern-card hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-primary text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 12 && (
            <div className="text-center mt-12">
              <button className="modern-button bg-gradient-primary text-white px-8 py-3 hover:scale-105 transition-all duration-300">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's bring your vision to life with our expertise and innovation
            </p>
            <a
              href="/contact"
              className="modern-button bg-gradient-primary text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;