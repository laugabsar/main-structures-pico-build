
import React from 'react';
import { ArrowRight, Shield, Award, Users, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 dot-pattern"></div>
      <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star size={16} />
                <span>BUILDING EXCELLENCE SINCE 1999</span>
              </div>
              
              <h1 className="heading-primary mb-6">
                Building Tomorrow's
                <span className="block text-gradient">
                  Infrastructure
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Transform your vision into reality with Main Structures Engineering. 
              We deliver exceptional construction and engineering solutions that exceed expectations.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Licensed & Fully Insured',
                '24/7 Emergency Service', 
                'Award-Winning Projects',
                '100% Client Satisfaction'
              ].map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-primary group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button className="btn-secondary group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Projects Completed', icon: '🏗️' },
                { number: '25+', label: 'Years Experience', icon: '⏰' },
                { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold text-sm">AVAILABLE 24/7</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Why Choose Main Structures?</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Licensed & Insured',
                    description: 'Comprehensive coverage and full licensing for your complete peace of mind'
                  },
                  {
                    icon: Award,
                    title: 'Award Winning',
                    description: 'Industry-recognized excellence with multiple awards and certifications'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Skilled professionals with decades of combined construction experience'
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-4 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <p className="text-muted-foreground text-sm mb-4">Ready to start your project?</p>
                <div className="flex items-center justify-between">
                  <Button className="btn-primary text-sm">Get Free Quote</Button>
                  <span className="font-semibold text-lg">(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
