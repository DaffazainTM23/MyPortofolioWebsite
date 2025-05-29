import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  place: string;
  date: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  place,
  date,
  description,
  index,
}) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-primary-color">{title}</h3>
      <div className="flex flex-col md:flex-row md:items-center text-dark-gray text-sm md:space-x-2 mb-2">
        <span className="font-medium">{place}</span>
        <span className="hidden md:inline">•</span>
        <span>{date}</span>
      </div>
      <p className="text-text-color">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;