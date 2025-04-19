import React, { useState } from 'react';
import { Code, User, Github, Linkedin, Youtube, Instagram, MessageSquare, ExternalLink, FileText, Briefcase, Award, Clock, Users } from 'lucide-react';
import { TikTokIcon } from './components/TikTokIcon';
import { ProjectCard } from './components/ProjectCard';
import { CertificateCard } from './components/CertificateCard';
import { TechStack } from './components/TechStack';
import { CommentSection } from './components/CommentSection';
import { ContactForm } from './components/ContactForm';
import { Navigation } from './components/Navigation';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient"
          >
            Senior Software Engineer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Transforming ideas into exceptional digital experiences
          </motion.p>
          
          <div className="flex gap-8 justify-center mb-12">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-purple-400 mb-2" />
              <span className="text-2xl font-bold text-white">4+</span>
              <span className="text-gray-400">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-12 h-12 text-blue-400 mb-2" />
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-gray-400">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-pink-400 mb-2" />
              <span className="text-2xl font-bold text-white">30+</span>
              <span className="text-gray-400">Happy Clients</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-card rounded-lg flex items-center gap-2"
            >
              <Award className="w-5 h-5" />
              View Achievements
            </motion.button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-[#0a051c]/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-8">Indrajith</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Seorang Senior Software Engineer dengan 4 tahun pengalaman dalam pengembangan aplikasi web modern. 
              Lulusan Teknik Perangkat Lunak Aplikasi dengan keahlian khusus dalam React, TypeScript, dan 
              arsitektur aplikasi skala enterprise. Memiliki track record yang kuat dalam memimpin tim 
              dan mengoptimasi performa aplikasi. Berhasil mengurangi waktu loading aplikasi hingga 60% 
              dan meningkatkan konversi pengguna sebesar 40% di berbagai proyek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Frontend Expertise</h3>
                <p className="text-gray-300">React, Vue, Angular dengan fokus pada performa dan aksesibilitas</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Team Leadership</h3>
                <p className="text-gray-300">Memimpin tim 5+ developer dalam proyek-proyek skala enterprise</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-pink-400">Problem Solving</h3>
                <p className="text-gray-300">Optimasi performa dan solusi teknis untuk aplikasi kompleks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-12 justify-center">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'projects' ? 'bg-purple-600' : 'glass-card'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'certificates' ? 'bg-purple-600' : 'glass-card'
              }`}
            >
              Certificates
            </button>
            <button 
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'tech' ? 'bg-purple-600' : 'glass-card'
              }`}
            >
              Tech Stack
            </button>
          </div>

          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Enterprise Dashboard"
                description="Led development of a high-performance analytics dashboard handling 1M+ daily users"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                index={0}
              />
              <ProjectCard
                title="E-commerce Platform"
                description="Built a scalable e-commerce solution with 99.9% uptime and 2s load time"
                image="https://images.unsplash.com/photo-1557821552-17105176677c"
                index={1}
              />
              <ProjectCard
                title="Aritmatika Solver"
                description="Mobile-first arithmetic problem solver with 100k+ monthly users"
                image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
                index={2}
              />
              <ProjectCard
                title="AutoChat-Discord"
                description="Automated Discord chat interface with advanced AI integration"
                image="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff"
                index={3}
              />
            </div>
          )}

          {activeTab === 'certificates' && <CertificateCard />}
          {activeTab === 'tech' && <TechStack />}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <div className="flex gap-6 justify-center mb-12">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <TikTokIcon className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
              <CommentSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;