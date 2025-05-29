import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-color text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'experience', 'education', 'skills', 'interests', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:text-secondary-color cursor-pointer transition-colors duration-300 capitalize flex items-center"
                  >
                    <ArrowUp className="w-4 h-4 mr-2 rotate-45" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary-color" />
                <a 
                  href="mailto:zaindaffa2005@gmail.com" 
                  className="hover:text-secondary-color transition-colors duration-300"
                >
                  zaindaffa2005@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary-color" />
                <a 
                  href="tel:+6281220010205" 
                  className="hover:text-secondary-color transition-colors duration-300"
                >
                  +62 812 2001 0205
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ananda-nur-daffa-zain-381307289" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#0077B5] hover:bg-opacity-80"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://t.me/+6281220010205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#0088cc] hover:bg-opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2l-19 19"></path><path d="M21.5 2L14 22l-5-11-6-5z"></path></svg>
                </a>
                <a 
                  href="https://instagram.com/daffazain_28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon bg-[#E1306C] hover:bg-opacity-80"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ananda Nur Daffa Zain</h3>
            <p className="mb-4">Dual Degree Program Student at Universitas Muhammadiyah Yogyakarta and Chang Gung University, specializing in Microsoft Office, Machine Learning, Website Design, and Basic Programming.</p>
            <p>Kedungborang Street, Sidamulya, Cilacap</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Ananda Nur Daffa Zain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;