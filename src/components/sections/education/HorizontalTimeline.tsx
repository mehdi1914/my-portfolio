import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TimelineCard from './TimelineCard';
import { credentials } from './data';

export default function HorizontalTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Timeline line */}
      <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
      
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Timeline Content */}
      <div 
        ref={scrollRef}
        className={cn(
          "flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8",
          "scroll-smooth",
          "-mx-4 px-4" // Negative margin to allow cards to peek
        )}
      >
        {credentials.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}