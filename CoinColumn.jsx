// src/components/CoinColumn.jsx

import React from 'react';

// Este componente recibe 'title', 'icon', y 'coins' para ser reutilizable
const CoinColumn = ({ title, icon, coins }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 w-full">
      {/* Título de la columna */}
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      
      {/* Lista de monedas */}
      <div className="flex flex-col space-y-2">
        {coins.map((coin, index) => (
          // Cada moneda es un elemento de la lista
          <div 
            key={coin.id} 
            className={`flex justify-between items-center py-3 ${index < coins.length - 1 ? 'border-b border-gray-700' : ''}`}
          >
            {/* Lado izquierdo: Nombre y Símbolo */}
            <div>
              <p className="font-bold text-lg">{coin.name}</p>
              <p className="text-gray-400 text-sm">{coin.symbol}</p>
            </div>
            {/* Lado derecho: Precio y Cambio */}
            <div className="text-right">
              <p className="font-semibold">${coin.price}</p>
              <p className={coin.change > 0 ? 'text-green-500' : 'text-red-500'}>
                {coin.change > 0 ? '+' : ''}{coin.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinColumn;