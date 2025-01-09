import React from 'react';
import useTypewriter from '@/lib/hooks/useTypewriter';

export default function TypewriterText() {
  const text = useTypewriter({
    words: ["Mehdi Khatiri", "a Frontend Developer", "a UI/UX Designer", "a Problem Solver"],
    loop: true,
    delayBetweenWords: 2000,
  });

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}