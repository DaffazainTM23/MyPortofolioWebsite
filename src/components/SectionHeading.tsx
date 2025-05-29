import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-5xl font-bold text-primary-color inline-block relative pb-3">
        {title}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-secondary-color to-primary-color rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-dark-gray mt-4 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
