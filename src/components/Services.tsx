
import React from 'react';
import { Building2, Wrench, Hammer, HomeIcon, Factory, Route, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'From office buildings to retail spaces, we deliver commercial projects that meet your business needs and timeline.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments'],
      popular: true
    },
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments built with quality craftsmanship and attention to detail.',
      features: ['Custom Homes', 'Renovations', 'Additions', 'Multi-Family Housing'],
      popular: false
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Heavy-duty industrial construction for manufacturing facilities, plants, and specialized structures.',
      features: ['Manufacturing Plants', 'Processing Facilities', 'Storage Solutions', 'Heavy Industry'],
      popular: false
    },
    {
      icon: Route,
      title: 'Infrastructure',
      description: 'Critical infrastructure projects including roads, bridges, and utility systems that serve communities.',
      features: ['Road Construction', 'Bridge Building', 'Utility Systems', 'Site Development'],
      popular: true
    },
    {
      icon: Wrench,
      title: 'Engineering Services',
      description: 'Comprehensive engineering solutions from design to implementation with cutting-edge technology.',
      features: ['Structural Design', 'Project Planning', 'Site Analysis', 'Technical Consulting'],
      popular: false
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our renovation expertise, breathing new life into old structures.',
      features: ['Building Restoration', 'Interior Remodeling', 'Structural Upgrades', 'Modernization'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 construction-gradient rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 construction-gradient rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 construction-gradient text-transparent bg-clip-text font-semibold text-lg mb-4">
            <Star size={20} className="text-orange-500" />
            <span>COMPREHENSIVE SERVICES</span>
            <Star size={20} className="text-blue-500" />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Our Construction Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive construction and engineering services 
            tailored to meet your specific project requirements with unmatched quality and precision.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group card-hover animate-fade-in-up relative overflow-hidden ${
                service.popular ? 'ring-2 ring-orange-400/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-20 h-20 construction-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 construction-gradient rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:construction-gradient group-hover:text-white group-hover:border-transparent transition-all"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-lg rotate-45"></div>
              <div className="absolute bottom-6 left-12 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-16 w-5 h-5 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution 
                that exceeds your expectations and delivers exceptional results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Schedule Free Consultation
                </Button>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available 24/7 • (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
