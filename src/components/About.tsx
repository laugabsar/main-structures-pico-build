
import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '150+', label: 'Expert Team Members' },
    { icon: Award, value: '500+', label: 'Successful Projects' },
    { icon: Clock, value: '25+', label: 'Years of Experience' },
    { icon: Shield, value: '100%', label: 'Safety Record' }
  ];

  const team = [
    {
      name: 'Michael Rodriguez',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description: 'Licensed Professional Engineer with 25+ years in construction management.'
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Engineering Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b193?w=300&h=300&fit=crop',
      description: 'Structural engineering expert specializing in complex commercial projects.'
    },
    {
      name: 'David Thompson',
      position: 'Project Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Construction management professional with expertise in large-scale developments.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Main Structures Engineering</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1999, Main Structures Engineering has grown from a small local contractor 
              to one of the region's most trusted construction and engineering firms. Our commitment 
              to quality, safety, and innovation has earned us a reputation for delivering exceptional 
              results on time and within budget.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in complex construction projects that require technical expertise, 
              careful planning, and precise execution. From high-rise buildings to industrial 
              facilities, we bring the same level of dedication and professionalism to every project.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  To build structures that enhance communities and stand the test of time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  To be the leading construction partner, known for innovation and excellence.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop" 
              alt="Construction team"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 construction-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Leadership Team</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals who guide our company's vision and ensure project success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
