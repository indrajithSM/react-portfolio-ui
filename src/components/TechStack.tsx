import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'SweetAlert2', icon: 'https://sweetalert2.github.io/images/SweetAlert2.png' },
];

export const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={item}
          className="glass-card p-6 rounded-xl flex flex-col items-center group"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
          }}
        >
          <motion.img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-16 h-16 mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
            {tech.name}
          </h3>
        </motion.div>
      ))}
    </motion.div>
  );
};