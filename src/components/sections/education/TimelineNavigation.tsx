import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineNavigationProps {
  onScroll: (direction: 'left' | 'right') => void;
}

export default function TimelineNavigation({ onScroll }: TimelineNavigationProps) {
  return (
    <>
      <button
        onClick={() => onScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => onScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-500/20"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}