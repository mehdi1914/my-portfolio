import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'purple' | 'blue';
  index: number;
}

export default function SkillCard({ title, description, icon: Icon, color, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group p-4 rounded-xl",
        "bg-gradient-to-r from-black/40 to-black/20",
        "border border-white/5 hover:border-purple-500/30",
        "transform transition-all duration-300",
        "hover:bg-black/60 hover:-translate-y-1"
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "p-3 rounded-lg transition-colors duration-300",
          color === 'purple' 
            ? "bg-purple-500/10 text-purple-300 group-hover:bg-purple-500/20" 
            : "bg-blue-500/10 text-blue-300 group-hover:bg-blue-500/20"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}