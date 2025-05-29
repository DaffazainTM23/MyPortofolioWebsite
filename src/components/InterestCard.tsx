import React from 'react';
import { motion } from 'framer-motion';

interface InterestCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  index: number;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, icon, description, index }) => {
  return (
    <motion.div
      className="interest-card bg-white rounded-lg shadow-md overflow-hidden h-64"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 h-full flex flex-col items-center justify-center text-center">
        <div className="text-secondary-color mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-primary-color">{title}</h3>
        <p className="text-dark-gray">{description}</p>
      </div>
      <div className="interest-overlay p-6">
        <div className="text-white text-center">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InterestCard;