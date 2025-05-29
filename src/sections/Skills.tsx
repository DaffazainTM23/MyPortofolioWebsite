import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileSpreadsheet, Brain, Gauge, Cog } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProgressBar from '../components/ProgressBar';

const Skills: React.FC = () => {
  const programmingSkills = [
    { skill: 'Python', percentage: 75, icon: <Code size={18} /> },
    { skill: 'HTML/CSS', percentage: 70, icon: <Code size={18} /> },
    { skill: 'MATLAB', percentage: 65, icon: <Code size={18} /> },
  ];

  const officeSkills = [
    { skill: 'Microsoft Word', percentage: 90, icon: <FileSpreadsheet size={18} /> },
    { skill: 'Microsoft Excel', percentage: 85, icon: <FileSpreadsheet size={18} /> },
    { skill: 'Microsoft PowerPoint', percentage: 88, icon: <FileSpreadsheet size={18} /> },
  ];

  const otherSkills = [
    { skill: 'Machine Learning Basics', percentage: 60, icon: <Brain size={18} /> },
    { skill: 'Data Analysis', percentage: 75, icon: <Gauge size={18} /> },
    { skill: 'CAD Software', percentage: 80, icon: <Cog size={18} /> },
    { skill: 'Mechatronics', percentage: 65, icon: <Cog size={18} /> },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical proficiencies and competencies" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-primary-color mb-6 flex items-center">
              <Code className="mr-2 text-secondary-color" size={20} />
              Programming
            </h3>
            <div>
              {programmingSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>

          {/* Office Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-primary-color mb-6 flex items-center">
              <FileSpreadsheet className="mr-2 text-secondary-color" size={20} />
              Microsoft Office
            </h3>
            <div>
              {officeSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card lg:col-span-1 md:col-span-2 lg:col-auto"
          >
            <h3 className="text-xl font-semibold text-primary-color mb-6 flex items-center">
              <Cog className="mr-2 text-secondary-color" size={20} />
              Technical Skills
            </h3>
            <div>
              {otherSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;