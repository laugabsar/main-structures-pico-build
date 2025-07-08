
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-4567',
      subtitle: 'Available 24/7 for emergencies',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mainstructures.com',
      subtitle: 'We respond within 2 hours',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Construction Ave, Builder City, BC 12345',
      subtitle: 'Visit us Monday - Friday, 8AM - 6PM',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      subtitle: 'Emergency service available 24/7',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 line-pattern"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageSquare size={16} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">Let's Start Your Project</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Contact our team of experts today for a free consultation 
            and discover how we can bring your construction project to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className="text-center border-0 shadow-lg card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    <option>Select a project type</option>
                    <option>Commercial Construction</option>
                    <option>Residential Construction</option>
                    <option>Industrial Projects</option>
                    <option>Infrastructure</option>
                    <option>Renovation & Remodeling</option>
                    <option>Engineering Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button className="btn-primary w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Emergency Contact */}
            <Card className="border-0 shadow-lg gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">24/7 Emergency Service</h3>
                <p className="mb-6 opacity-90">
                  Construction emergencies don't wait for business hours. Our emergency response team 
                  is available around the clock to handle urgent situations.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone size={20} />
                  <span className="text-lg font-semibold">(555) 911-HELP</span>
                </div>
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Main Structures?</h3>
                <div className="space-y-4">
                  {[
                    'Free consultation and project estimates',
                    'Licensed, bonded, and fully insured',
                    'Experienced team with 25+ years expertise',
                    'Competitive pricing with transparent costs',
                    'Quality workmanship guarantee',
                    'On-time project delivery commitment'
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2hrs</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map/Location Section */}
        <div className="text-center">
          <Card className="border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground mb-6">
                Located in the heart of Builder City, our modern office and showroom are open to clients. 
                Schedule a visit to discuss your project in person.
              </p>
              <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl p-8 mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">Main Structures Engineering</div>
                <div className="text-muted-foreground">123 Construction Ave, Builder City, BC 12345</div>
              </div>
              <Button className="btn-primary">
                <MapPin size={18} className="mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
