// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold border border-slate-500 px-3 py-1">
        <a href="/" className="hover:text-cyan-400 transition-colors">Meme Market Watch</a>
      </div>
      <nav className="flex items-center space-x-6 text-sm">
        <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Networks</a>
        <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Sign In</a>
        <a href="#" className="bg-cyan-500/80 hover:bg-cyan-500 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
export default Header;