import React from 'react';
import Button from '@/components/ui/Button';

export default function HeroActions() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        variant="primary"
        size="lg"
        onClick={() => scrollToSection('portfolio')}
      >
        Explore My Work
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => scrollToSection('contact')}
      >
        Let's Connect
      </Button>
    </div>
  );
}