
import React from 'react';
import { Building2, Wrench, Hammer, HomeIcon, Factory, Road } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'From office buildings to retail spaces, we deliver commercial projects that meet your business needs and timeline.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments']
    },
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments built with quality craftsmanship and attention to detail.',
      features: ['Custom Homes', 'Renovations', 'Additions', 'Multi-Family Housing']
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Heavy-duty industrial construction for manufacturing facilities, plants, and specialized structures.',
      features: ['Manufacturing Plants', 'Processing Facilities', 'Storage Solutions', 'Heavy Industry']
    },
    {
      icon: Road,
      title: 'Infrastructure',
      description: 'Critical infrastructure projects including roads, bridges, and utility systems that serve communities.',
      features: ['Road Construction', 'Bridge Building', 'Utility Systems', 'Site Development']
    },
    {
      icon: Wrench,
      title: 'Engineering Services',
      description: 'Comprehensive engineering solutions from design to implementation with cutting-edge technology.',
      features: ['Structural Design', 'Project Planning', 'Site Analysis', 'Technical Consulting']
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our renovation expertise, breathing new life into old structures.',
      features: ['Building Restoration', 'Interior Remodeling', 'Structural Upgrades', 'Modernization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive construction and engineering services 
            tailored to meet your specific project requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 construction-gradient rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
