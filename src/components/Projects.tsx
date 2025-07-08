
import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Filter, Grid, List } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Modern 15-story office complex with sustainable design features and state-of-the-art facilities.',
      value: '$12M',
      duration: '18 months'
    },
    {
      title: 'Riverside Luxury Homes',
      category: 'Residential',
      location: 'Riverside District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      description: 'Premium residential development featuring 50 custom homes with modern amenities.',
      value: '$25M',
      duration: '24 months'
    },
    {
      title: 'Industrial Manufacturing Hub',
      category: 'Industrial',
      location: 'Industrial Park',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Large-scale manufacturing facility designed for efficiency and environmental compliance.',
      value: '$8M',
      duration: '12 months'
    },
    {
      title: 'Metro Bridge Extension',
      category: 'Infrastructure',
      location: 'Metro Area',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Critical infrastructure project connecting two major districts with modern bridge design.',
      value: '$15M',
      duration: '20 months'
    },
    {
      title: 'Heritage Building Restoration',
      category: 'Renovation',
      location: 'Historic District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop',
      description: 'Careful restoration of a century-old building while preserving its historical character.',
      value: '$3M',
      duration: '8 months'
    },
    {
      title: 'Tech Campus Expansion',
      category: 'Commercial',
      location: 'Tech Valley',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Expansion of technology campus with innovative workspace design and green building features.',
      value: '$22M',
      duration: '16 months'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Explore our portfolio of successful construction projects that showcase our expertise 
            across various sectors and scales. Each project represents our commitment to excellence.
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`${filter === category ? 'construction-gradient text-white' : 'hover:construction-gradient hover:text-white'} transition-all`}
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

        {/* Projects Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'} mb-16`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group card-hover animate-scale-in overflow-hidden ${
                viewMode === 'list' ? 'md:flex md:max-w-4xl md:mx-auto' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-slate-800 hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>
              
              <CardContent className={`p-6 ${viewMode === 'list' ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <span className="font-semibold text-green-600">{project.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                    <span className="text-gray-500">Completed {project.year}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:construction-gradient group-hover:text-white transition-all">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their construction needs. 
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="construction-gradient text-white">
              View All Projects
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
