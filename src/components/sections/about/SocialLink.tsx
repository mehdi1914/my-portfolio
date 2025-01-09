import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "p-3 rounded-lg",
        "bg-black/40 hover:bg-black/60",
        "border border-white/5 hover:border-purple-500/30",
        "text-gray-400 hover:text-white",
        "transform transition-all duration-300 hover:scale-110"
      )}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}