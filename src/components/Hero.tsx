
import React from 'react';
import { ArrowRight, Shield, Award, Users, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 hero-overlay"></div>
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 construction-gradient rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block construction-gradient text-transparent bg-clip-text font-semibold text-lg mb-2">
                ✦ BUILDING EXCELLENCE SINCE 1999
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Building Tomorrow's
                <span className="block text-transparent bg-clip-text construction-gradient animate-pulse-glow">
                  Infrastructure
                </span>
              </h1>
            </div>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              With over 25 years of experience, Main Structures Engineering delivers 
              exceptional construction and engineering solutions that stand the test of time.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Licensed & Fully Insured',
                '24/7 Emergency Service',
                'Award-Winning Projects',
                '100% Client Satisfaction'
              ].map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                  <span className="text-gray-200 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-primary group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" className="btn-secondary group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Watch Our Story
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Projects Completed', icon: '🏗️' },
                { number: '25+', label: 'Years Experience', icon: '⏰' },
                { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Card */}
          <div className="animate-slide-in-right">
            <div className="glass-effect rounded-3xl p-8 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">AVAILABLE 24/7</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Main Structures?</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Licensed & Insured',
                    description: 'Fully licensed with comprehensive insurance coverage for your peace of mind',
                    color: 'text-blue-400'
                  },
                  {
                    icon: Award,
                    title: 'Award Winning',
                    description: 'Recognized industry leader with multiple excellence awards',
                    color: 'text-yellow-400'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Skilled professionals with decades of combined experience',
                    color: 'text-green-400'
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-4 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-14 h-14 construction-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-300 text-sm mb-3">Ready to start your project?</p>
                <div className="flex items-center space-x-4">
                  <Button className="btn-primary text-sm">Get Free Quote</Button>
                  <span className="text-white font-semibold">(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
