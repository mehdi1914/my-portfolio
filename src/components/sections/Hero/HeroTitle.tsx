import React from 'react';
import TypewriterText from './TypewriterText';

export default function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
      Hi, I'm <TypewriterText />
    </h1>
  );
}