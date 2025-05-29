import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

interface LanguageCardProps {
  language: string;
  level: string;
  flag: string;
  percentage: number;
  index: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, level, flag, percentage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card flex flex-col items-center text-center"
    >
      <div className="text-4xl mb-4">{flag}</div>
      <h3 className="text-xl font-semibold text-primary-color mb-2">{language}</h3>
      <p className="text-dark-gray mb-4">{level}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <motion.div 
          className="bg-secondary-color h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
          viewport={{ once: true }}
        />
      </div>
      <p className="text-secondary-color font-semibold">{percentage}%</p>
    </motion.div>
  );
};

const Languages: React.FC = () => {
  const languages = [
    {
      language: 'Bahasa Indonesia',
      level: 'Native',
      flag: '🇮🇩',
      percentage: 100,
    },
    {
      language: 'English',
      level: 'Advanced',
      flag: '🇬🇧',
      percentage: 85,
    },
  ];

  return (
    <section id="languages" className="section-padding">
      <div className="section-container">
        <SectionHeading 
          title="Languages" 
          subtitle="Languages I speak and their proficiency levels" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {languages.map((language, index) => (
            <LanguageCard
              key={index}
              language={language.language}
              level={language.level}
              flag={language.flag}
              percentage={language.percentage}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;