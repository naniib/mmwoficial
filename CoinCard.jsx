// src/components/CoinCard.jsx

import React from 'react';

const CoinCard = ({ coin }) => {
  const isPositive = coin.change >= 0;

  return (
    // Esta es la clave: fondo semitransparente, desenfoque (blur), bordes y transición suave
    <div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700 rounded-2xl p-5 
                   transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/60">
      
      {/* --- Fila Superior: Info Principal --- */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xl font-bold text-white">{coin.name}</p>
          <p className="text-sm text-slate-400">{coin.symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-white">${coin.price}</p>
          <p className={`font-bold ${isPositive ? 'text-green-400' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{coin.change}%
          </p>
        </div>
      </div>

      {/* --- Fila Inferior: Info Secundaria --- */}
      <div className="flex justify-between items-center text-sm text-slate-300 border-t border-slate-700/50 pt-3">
        <div>
          <span className="text-slate-500">Network:</span>
          <span className="font-semibold ml-2 text-slate-200">{coin.network}</span>
        </div>
        <div>
          <span className="text-slate-500">Volume 24h:</span>
          <span className="font-semibold ml-2 text-slate-200">${coin.volume.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;