
import React from 'react';
import { Shield, Award, Users, TrendingUp, CheckCircle, Star, Building, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Building },
    { number: '25+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Team Members', icon: Users }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every project, maintaining the highest industry standards and zero-accident records.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality craftsmanship ensures every project exceeds expectations and stands the test of time.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative construction methods to deliver superior results.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build lasting relationships through transparent communication and collaborative project management.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Founded Main Structures Engineering' },
    { year: '2005', event: 'Completed first major commercial project' },
    { year: '2010', event: 'Expanded to industrial construction' },
    { year: '2015', event: 'Achieved ISO 9001 certification' },
    { year: '2020', event: 'Launched sustainable building initiatives' },
    { year: '2024', event: 'Celebrating 25 years of excellence' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern"></div>
      <div className="absolute top-20 left-0 w-80 h-80 gradient-primary rounded-full opacity-5 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} />
            <span>ABOUT MAIN STRUCTURES</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">Building Excellence for 25+ Years</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 1999, Main Structures Engineering has been at the forefront of construction innovation, 
            delivering exceptional projects that shape communities and exceed client expectations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center border-0 shadow-lg card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Company Story */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1999 by a team of passionate engineers and construction professionals, 
                Main Structures Engineering has grown from a small local contractor to a leading 
                construction and engineering firm serving clients across multiple sectors.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                and a deep understanding of our clients' needs. We've successfully completed over 500 
                projects, ranging from residential developments to large-scale industrial complexes.
              </p>
              <p>
                Today, we're proud to be recognized as industry leaders, known for our technical expertise, 
                safety record, and ability to deliver complex projects on time and within budget.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'ISO 9001 Certified',
                  'OSHA Safety Compliant',
                  'LEED Accredited',
                  'Licensed & Bonded'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <CheckCircle className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground mb-6">Key Milestones</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 pt-3">
                    <div className="text-lg font-semibold text-foreground">{milestone.year}</div>
                    <div className="text-muted-foreground">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center border-0 shadow-lg card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="gradient-primary rounded-3xl p-12 shadow-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how Main Structures Engineering can bring your vision to life with our 
              25+ years of expertise and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8">
                Start Your Project
              </Button>
              <Button size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30 font-semibold px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
