import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Metrics } from './components/sections/Metrics';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brutal-dark selection:bg-brutal-orange selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Metrics />
        <Blog />
        <Contact />
      </main>
      
      <footer className="bg-black text-white py-6 text-center border-t-4 border-white">
        <div className="container mx-auto">
          <p className="font-mono text-sm opacity-60">
            © {new Date().getFullYear()} Bruno Guimarães. Desenvolvido com <span className="text-red-500">♥</span> e React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;