// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-20 py-12">
      <div className="container mx-auto px-4 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Meme Market Watch. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;