import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo() {
  return (
    <a 
      href="#" 
      className="group relative flex items-center gap-3"
      aria-label="Logo - Back to top"
    >
      {/* Logo Container */}
      <div className={cn(
        "relative w-10 h-10 rounded-xl overflow-hidden",
        "bg-gradient-to-br from-purple-600 to-blue-600",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-br before:from-purple-400 before:to-blue-400",
        "before:animate-pulse-slow before:opacity-75",
        "after:absolute after:inset-0",
        "after:bg-black/10",
        "group-hover:scale-110 transition-all duration-300"
      )}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:8px_8px]" />
          <div className="absolute h-20 w-20 -top-4 -left-4 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute h-20 w-20 -bottom-4 -right-4 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-300" />
        </div>
        
        {/* Logo Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white/75 absolute animate-ping" />
          <Code2 className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={cn(
          "text-lg font-bold tracking-wider",
          "bg-gradient-to-r from-purple-200 to-blue-200",
          "bg-clip-text text-transparent",
          "group-hover:from-purple-300 group-hover:to-blue-300",
          "transition-all duration-300"
        )}>
          MEHDI
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
          Developer & Designer
        </span>
      </div>
    </a>
  );
}