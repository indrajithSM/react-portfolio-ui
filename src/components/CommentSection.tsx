import React from 'react';
import { motion } from 'framer-motion';

const comments = [
  {
    name: 'Sarah Chen',
    role: 'Senior HR Manager at TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    message: 'Impressive portfolio! Your expertise in frontend optimization and team leadership stands out.',
  },
  {
    name: 'John Smith',
    role: 'Tech Lead at InnovateTech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    message: 'Outstanding work on the Enterprise Dashboard project. The performance metrics are remarkable.',
  },
  {
    name: 'Maria Garcia',
    role: 'Product Manager at DigitalFirst',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    message: 'Your attention to UX and technical excellence is exactly what we look for in senior developers.',
  },
];

export const CommentSection: React.FC = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold mb-6">Professional Recommendations</h3>
    {comments.map((comment, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        viewport={{ once: true }}
        className="glass-card rounded-xl p-6 flex gap-4"
      >
        <img
          src={comment.avatar}
          alt={comment.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold mb-1">{comment.name}</h4>
          <p className="text-sm text-purple-400 mb-2">{comment.role}</p>
          <p className="text-gray-300">{comment.message}</p>
        </div>
      </motion.div>
    ))}
  </div>
);