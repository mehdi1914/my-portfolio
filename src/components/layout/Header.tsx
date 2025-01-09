import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={cn(
          "max-w-5xl mx-auto px-4 py-2",
          "rounded-full border transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-black/40 backdrop-blur-md border-white/10 shadow-lg scale-[0.98]" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}