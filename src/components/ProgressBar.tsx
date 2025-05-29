import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  icon?: React.ReactNode;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon && <span className="mr-2 text-primary-color">{icon}</span>}
          <span className="font-medium">{skill}</span>
        </div>
        <span className="text-sm font-semibold text-secondary-color">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-value"
          initial={{ width: '0%' }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;