import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Camera } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import InterestCard from '../components/InterestCard';

const Interests: React.FC = () => {
  const interests = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain size={36} />,
      description: 'Exploring the fascinating world of artificial intelligence, neural networks, and their applications in engineering.',
    },
    {
      title: 'Basic Programming',
      icon: <Code size={36} />,
      description: 'Developing coding skills in Python, MATLAB, and web technologies to solve engineering problems and automate tasks.',
    },
    {
      title: 'Photography & Videography',
      icon: <Camera size={36} />,
      description: 'Capturing moments, landscapes, and technical subjects through the lens, with a focus on composition and storytelling.',
    },
  ];

  return (
    <section id="interests" className="section-padding bg-light-gray">
      <div className="section-container">
        <SectionHeading 
          title="Interests" 
          subtitle="Topics and activities that fuel my passion and creativity" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <InterestCard
              key={index}
              title={interest.title}
              icon={interest.icon}
              description={interest.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;