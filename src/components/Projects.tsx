
import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Filter, Grid, List, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Renovation'];

  const projects = [
    {
      title: 'Downtown Business Center',
      category: 'Commercial',
      location: 'City Center',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'Modern 15-story office complex with sustainable design features and state-of-the-art facilities.',
      value: '$12M',
      duration: '18 months',
      status: 'Completed'
    },
    {
      title: 'Riverside Luxury Homes',
      category: 'Residential',
      location: 'Riverside District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Premium residential development featuring 50 custom homes with modern amenities.',
      value: '$25M',
      duration: '24 months',
      status: 'Completed'
    },
    {
      title: 'Industrial Manufacturing Hub',
      category: 'Industrial',
      location: 'Industrial Park',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      description: 'Large-scale manufacturing facility designed for efficiency and environmental compliance.',
      value: '$8M',
      duration: '12 months',
      status: 'Completed'
    },
    {
      title: 'Metro Bridge Extension',
      category: 'Infrastructure',
      location: 'Metro Area',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      description: 'Critical infrastructure project connecting two major districts with modern bridge design.',
      value: '$15M',
      duration: '20 months',
      status: 'In Progress'
    },
    {
      title: 'Heritage Building Restoration',
      category: 'Renovation',
      location: 'Historic District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
      description: 'Careful restoration of a century-old building while preserving its historical character.',
      value: '$3M',
      duration: '8 months',
      status: 'Completed'
    },
    {
      title: 'Tech Campus Expansion',
      category: 'Commercial',
      location: 'Tech Valley',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Expansion of technology campus with innovative workspace design and green building features.',
      value: '$22M',
      duration: '16 months',
      status: 'In Progress'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-5 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-foreground mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our portfolio of successful construction projects that showcase our expertise 
            across various sectors and scales. Each project represents our commitment to excellence.
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`${filter === category ? 'gradient-primary text-white border-0' : 'hover:bg-primary hover:text-white border-border'} transition-all shadow-sm`}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                size="sm"
                className="p-2"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                size="sm" 
                className="p-2"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Display */}
        <div className={`${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'} mb-16`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group card-hover border-0 shadow-lg animate-scale-in ${
                viewMode === 'list' ? 'md:flex md:max-w-5xl md:mx-auto' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button className="bg-white text-foreground hover:scale-110 transition-transform shadow-lg">
                    <Eye size={18} className="mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className={`p-6 ${viewMode === 'list' ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{project.value}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-muted-foreground">Year: {project.year}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar size={14} />
                      <span>Duration: {project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <ExternalLink size={16} className="mr-2" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border shadow-xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have trusted us with their construction needs. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                View All Projects
              </Button>
              <Button size="lg" className="btn-secondary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
