import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
  index: number;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  organization,
  date,
  image,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{date}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-color mb-2">{title}</h3>
        <p className="text-secondary-color font-medium mb-3">{organization}</p>
        <p className="text-dark-gray">{description}</p>
      </div>
    </motion.div>
  );
};

const Awards: React.FC = () => {
  const awards = [
    {
    title: "Best Graduate Award",
    organization: "Universitas Muhammadiyah Yogyakarta (UMY)",
    date: "2027",
    image: "https://res.cloudinary.com/dg35lobhc/image/upload/v1748509030/GAMBAR_1_n5dk9v.jpg",
    description: "Selected as the best graduate from the Mechanical Engineering Department at UMY for outstanding academic performance, leadership contributions, and dedication to the university’s research and community programs."
  },
  {
    title: "Outstanding International Student Award",
    organization: "Chang Gung University (CGU), Taiwan",
    date: "2027",
    image: "https://res.cloudinary.com/dg35lobhc/image/upload/v1748509030/GAMBAR_3_oz0cdd.jpg",
    description: "Honored by CGU as one of the most outstanding international students for exceptional achievements in academic projects, cross-cultural collaboration, and active participation in international engineering forums."
  },
  {
    title: "1st Place – Mechanical Engineering Innovation Competition",
    organization: "Chang Gung University, Taiwan",
    date: "2026",
    image: "https://res.cloudinary.com/dg35lobhc/image/upload/v1748509034/GAMBAR_2_opprm3.jpg",
    description: "Won first place in an international innovation competition organized by Chang Gung University, Taiwan. The project showcased a novel mechanical solution integrating design efficiency, technical accuracy, and real-world application potential."
  }
]

  return (
    <section id="awards" className="section-padding bg-light-gray">
      <div className="section-container">
        <SectionHeading 
          title="Awards & Achievements" 
          subtitle="Recognition and milestones in my academic journey" 
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              {...award}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg text-secondary-color mb-6">
            <Trophy size={32} />
          </div>
          <p className="text-dark-gray max-w-2xl mx-auto">
            These awards represent my commitment to excellence and continuous growth in both academic and leadership roles.
            Each achievement has been a stepping stone towards my goals and aspirations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;