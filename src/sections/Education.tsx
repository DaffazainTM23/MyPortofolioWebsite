import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';

const Education: React.FC = () => {
  const education = [
    {
      title: 'Dual Degree Program in Mechanical Engineering',
      place: 'Chang Gung University, Taiwan',
      date: '2025 - 2027',
      description: 'Pursuing specialized studies in mechanical engineering with focus on advanced manufacturing and robotics through the dual degree program partnership.',
    },
    {
      title: 'Bachelor of Engineering in Mechanical Engineering',
      place: 'Universitas Muhammadiyah Yogyakarta',
      date: '2023 - 2025',
      description: 'Completed first two years of mechanical engineering studies with focus on fundamental engineering principles and mechanical design.',
    },
    {
      title: 'High School Diploma, Science Major',
      place: 'SMA Negeri 1 Bantarsari',
      date: '2020 - 2023',
      description: 'Graduated with honors, focusing on Physics, Mathematics, and Chemistry. Participated in science competitions and STEM-related extracurricular activities.',
    },
  ];

  return (
    <section id="education" className="section-padding bg-light-gray">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and qualifications" 
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-color text-white p-4 rounded-full">
              <GraduationCap size={28} />
            </div>
          </div>
          
          <div className="timeline-container">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                place={item.place}
                date={item.date}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;