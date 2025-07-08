
import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Tomorrow's
              <span className="text-transparent bg-clip-text construction-gradient"> Infrastructure</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              With over 25 years of experience, Main Structures Engineering delivers 
              exceptional construction and engineering solutions that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="construction-gradient text-white hover:scale-105 transition-transform">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 construction-gradient rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Licensed & Insured</h4>
                    <p className="text-gray-300 text-sm">Fully licensed with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 construction-gradient rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Award Winning</h4>
                    <p className="text-gray-300 text-sm">Recognized for excellence in construction</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 construction-gradient rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Skilled professionals with decades of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
