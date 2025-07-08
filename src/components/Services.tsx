
import React from 'react';
import { Building2, Wrench, Hammer, HomeIcon, Factory, Route, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Modern office buildings, retail spaces, and commercial developments that drive business success.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments'],
      popular: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments crafted with precision and attention to detail.',
      features: ['Custom Homes', 'Renovations', 'Additions', 'Multi-Family Housing'],
      popular: false,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Heavy-duty industrial construction for manufacturing facilities and specialized structures.',
      features: ['Manufacturing Plants', 'Processing Facilities', 'Storage Solutions', 'Heavy Industry'],
      popular: false,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Route,
      title: 'Infrastructure',
      description: 'Critical infrastructure projects that connect communities and support economic growth.',
      features: ['Road Construction', 'Bridge Building', 'Utility Systems', 'Site Development'],
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Engineering Services',
      description: 'Comprehensive engineering solutions from concept to completion with innovative technology.',
      features: ['Structural Design', 'Project Planning', 'Site Analysis', 'Technical Consulting'],
      popular: false,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with expert renovation services that breathe new life into structures.',
      features: ['Building Restoration', 'Interior Remodeling', 'Structural Upgrades', 'Modernization'],
      popular: false,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 line-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} />
            <span>COMPREHENSIVE SERVICES</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">Our Construction Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive construction and engineering services 
            tailored to meet your specific project requirements with unmatched quality and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group card-hover relative overflow-hidden border-0 shadow-lg ${
                service.popular ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-lg">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="gradient-primary rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 border-2 border-white/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white/30 rounded-lg rotate-45"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/30 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Shield size={24} />
                <h3 className="text-3xl font-bold">Need a Custom Solution?</h3>
              </div>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution 
                that exceeds your expectations and delivers exceptional results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 shadow-lg">
                  Schedule Free Consultation
                </Button>
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available 24/7 • (555) 123-4567</span>
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
