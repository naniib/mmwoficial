// src/components/WarningTicker.jsx

import React from 'react';

const WarningTicker = () => {
  return (
    <div className="bg-yellow-500 text-black overflow-hidden whitespace-nowrap py-2">
      <div className="animate-marquee">
        <span>⚠️ ADVERTENCIA: Invertir en memecoins es de alto riesgo. Nunca inviertas más de lo que estás dispuesto a perder. ⚠️</span>
      </div>
    </div>
  );
};

export default WarningTicker;