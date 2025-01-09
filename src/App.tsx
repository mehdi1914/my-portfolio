import React from 'react';
import { Layout } from '@/components/layout'; // Using alias
import { Hero, Education, About, Portfolio, Contact, Skills } from '@/components/sections'; // Using alias
import { Menu } from 'lucide-react'; // Correct import for lucide-react icons

export default function App() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/10 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Education />
          <Contact />
        </div>
      </div>
    </Layout>
  );
}