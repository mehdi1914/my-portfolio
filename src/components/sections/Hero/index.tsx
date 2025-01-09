import React from 'react';
import Container from '@/components/ui/Container';
import HeroContent from './HeroContent';
import SplineViewer from './SplineViewer';
import BackgroundEffects from './BackgroundEffects';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <SplineViewer />
      <BackgroundEffects />
      
      <Container className="relative z-30 pt-32 pb-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)]">
          <HeroContent />
        </div>
      </Container>
    </div>
  );
}