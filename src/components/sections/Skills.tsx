import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { skillsData } from './skills/data';

export default function Skills() {
  return (
    <Section className="bg-gradient-to-b from-black via-purple-950/10 to-black" id="skills">
      <SectionHeading 
        title="Skills & Expertise" 
        subtitle="Technologies and tools I work with"
      />
      
      <div className="relative min-h-[400px] overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        
        {/* Floating logos */}
        {skillsData.map((row, rowIndex) => (
          <div 
            key={rowIndex}
            className="absolute w-full"
            style={{ top: `${rowIndex * 20}%` }}
          >
            <motion.div
              animate={{
                x: [0, -100, 0],
                transition: {
                  duration: 20 + rowIndex * 5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex gap-16 items-center"
            >
              {row.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="group relative flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/30 transition-colors">
                    <skill.icon className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors" />
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-white text-center">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}