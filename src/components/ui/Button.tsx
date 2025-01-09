import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "relative group flex items-center justify-center gap-2",
    "rounded-lg font-medium transition-all duration-300",
    "hover:scale-105 active:scale-95"
  );
  
  const variants = {
    primary: cn(
      "bg-gradient-to-r from-purple-600 to-blue-600",
      "text-white shadow-lg shadow-purple-500/25",
      "hover:shadow-xl hover:shadow-purple-500/30",
      "after:absolute after:inset-0 after:rounded-lg",
      "after:bg-gradient-to-r after:from-purple-600 after:to-blue-600",
      "after:opacity-0 after:transition-opacity after:duration-300",
      "hover:after:opacity-100"
    ),
    secondary: cn(
      "border-2 border-purple-500/30 text-purple-300",
      "hover:bg-purple-500/10 hover:border-purple-500/50"
    ),
    outline: "border-2 border-current",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
}