import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better, my background, and what drives me" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-primary-color mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Date of Birth</h4>
                  <p className="text-dark-gray">February 28, 2005</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-dark-gray">Kedungborang Street, Sidamulya, Cilacap</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-dark-gray">
                    <a href="tel:+6281220010205" className="hover:text-secondary-color transition-colors duration-300">
                      +62 812 2001 0205
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-dark-gray">
                    <a href="mailto:zaindaffa2005@gmail.com" className="hover:text-secondary-color transition-colors duration-300">
                      zaindaffa2005@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Connect with me:</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/ananda-nur-daffa-zain-381307289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#0077B5] hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/DaffazainTM23" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#333] hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/daffazain_28/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#E1306C] hover:scale-110"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* About Me Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-primary-color mb-6">Biography</h3>
            
            <div className="space-y-4 text-text-color">
              <p>
                Hello! I'm Ananda Nur Daffa Zain, an undergraduate Mechanical Engineering student at Universitas 
                Muhammadiyah Yogyakarta with a passion for innovation and problem-solving.
              </p>
              
              <p>
                My academic journey is driven by a deep curiosity about how things work and how they can be improved. 
                I'm particularly fascinated by the intersection of mechanical engineering with artificial intelligence 
                and robotics, which I believe will shape the future of our industry.
              </p>
              
              <p>
                Beyond the classroom, I actively engage in research opportunities and practical applications of 
                engineering principles. My goal is to develop solutions that can make a positive impact on society 
                and contribute to technological advancement.
              </p>
              
              <p>
                I'm a dedicated lifelong learner who believes in continuously expanding my knowledge and skills. 
                When I'm not studying or working on projects, you might find me exploring photography, coding, 
                or learning about the latest developments in AI and machine learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;