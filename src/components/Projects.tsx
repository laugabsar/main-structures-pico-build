
import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Downtown Business Center',
      category: 'Commercial',
      location: 'City Center',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Modern 15-story office complex with sustainable design features and state-of-the-art facilities.'
    },
    {
      title: 'Riverside Luxury Homes',
      category: 'Residential',
      location: 'Riverside District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      description: 'Premium residential development featuring 50 custom homes with modern amenities.'
    },
    {
      title: 'Industrial Manufacturing Hub',
      category: 'Industrial',
      location: 'Industrial Park',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: 'Large-scale manufacturing facility designed for efficiency and environmental compliance.'
    },
    {
      title: 'Metro Bridge Extension',
      category: 'Infrastructure',
      location: 'Metro Area',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Critical infrastructure project connecting two major districts with modern bridge design.'
    },
    {
      title: 'Heritage Building Restoration',
      category: 'Renovation',
      location: 'Historic District',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop',
      description: 'Careful restoration of a century-old building while preserving its historical character.'
    },
    {
      title: 'Tech Campus Expansion',
      category: 'Commercial',
      location: 'Tech Valley',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Expansion of technology campus with innovative workspace design and green building features.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects that showcase our expertise 
            across various sectors and scales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-slate-800 p-3 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
