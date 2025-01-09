import React from 'react';
import { Code2, Palette, Dumbbell, Dribbble, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import SocialLink from './SocialLink';

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and performant web applications",
    color: "purple"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    color: "blue"
  },
  {
    icon: Dumbbell,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex challenges",
    color: "purple"
  }
] as const;

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://dribbble.com", icon: Dribbble, label: "Dribbble" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose prose-invert max-w-none"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate UX/UI Designer and Frontend Developer with over 5 years of experience
          crafting digital experiences. My approach combines creative design thinking with
          technical expertise to build solutions that are both beautiful and functional.
        </p>
      </motion.div>
      
      <div className="grid gap-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.title}
            {...skill}
            index={index}
          />
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-4 pt-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}