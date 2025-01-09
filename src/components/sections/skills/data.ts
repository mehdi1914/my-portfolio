import { 
  Code2, Palette, Database, Globe, Terminal, Cpu, 
  Figma, Github, React as ReactIcon, Boxes, 
  Laptop, Cloud, Server, Layout, Smartphone, Brush
} from 'lucide-react';

export const skillsData = [
  // Frontend & Design
  [
    { icon: ReactIcon, name: 'React' },
    { icon: Code2, name: 'TypeScript' },
    { icon: Layout, name: 'Next.js' },
    { icon: Palette, name: 'UI/UX' },
    { icon: Figma, name: 'Figma' },
    { icon: Brush, name: 'Tailwind' },
  ],
  // Backend & Database
  [
    { icon: Server, name: 'Node.js' },
    { icon: Database, name: 'SQL' },
    { icon: Cloud, name: 'AWS' },
    { icon: Globe, name: 'APIs' },
    { icon: Terminal, name: 'DevOps' },
    { icon: Boxes, name: 'Docker' },
  ],
  // Tools & Technologies
  [
    { icon: Github, name: 'Git' },
    { icon: Cpu, name: 'System Design' },
    { icon: Laptop, name: 'VS Code' },
    { icon: Smartphone, name: 'Mobile Dev' },
    { icon: Terminal, name: 'CLI' },
    { icon: Globe, name: 'Web3' },
  ],
].map(row => [...row, ...row]); // Duplicate icons for infinite scroll