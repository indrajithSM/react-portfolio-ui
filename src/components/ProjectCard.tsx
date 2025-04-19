import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="project-card group"
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a051c] to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 shine-effect">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-4">
          <motion.button
            className="px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-purple-400 hover:text-purple-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.button>
          <motion.button
            className="px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-blue-400 hover:text-blue-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info className="w-4 h-4" />
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};