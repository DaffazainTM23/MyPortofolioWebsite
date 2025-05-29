import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Undergraduate Researcher',
      place: 'UMY GRACE Program',
      date: 'February 2025 - September 2025',
      description: 'Conducted research on innovative mechanical engineering applications, focusing on sustainable energy solutions. Collaborated with faculty members and fellow researchers to develop and test prototypes.',
    },
    {
      title: 'Event Staff',
      place: 'Mesin Vaganza | Actual Discussion',
      date: 'February 2025 - April 2025',
      description: 'Managed logistics and coordination for a major departmental event. Assisted in planning, promoting, and executing engineering discussions and workshops for students and faculty.',
    },
    {
      title: 'Practicum Assistant - Structure and Material Properties',
      place: 'Universitas Muhammadiyah Yogyakarta',
      date: 'June 9, 2025 - June 30, 2025',
      description: 'Assisted professors in conducting laboratory sessions for structure and material properties courses. Helped students understand theoretical concepts through practical experiments and demonstrations.',
    },
    {
      title: 'Practicum Assistant - Mechanical Physics',
      place: 'Universitas Muhammadiyah Yogyakarta',
      date: 'December 2024 - January 2025',
      description: 'Assisted professors in conducting laboratory sessions for mechanical physics courses. Helped students understand theoretical concepts through practical experiments and demonstrations.',
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeading 
          title="Experience" 
          subtitle="My academic and professional journey so far" 
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
              <Briefcase size={28} />
            </div>
          </div>
          
          <div className="timeline-container">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                title={experience.title}
                place={experience.place}
                date={experience.date}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;