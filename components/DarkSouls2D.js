// components/DarkSouls2D.js
import React, { useState, useEffect } from 'react';

const DarkSouls2D = () => {
  const [gameState, setGameState] = useState({
    screen: 'main_menu', // 'main_menu', 'game', 'game_over'
    player: {
      x: 100,
      y: 300,
      width: 50,
      height: 50,
      health: 100,
      stamina: 100,
      souls: 0,
      direction: 'right',
    },
  });

  // Simple main menu screen
  if (gameState.screen === 'main_menu') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-black">
        <h1 className="text-6xl font-bold text-gray-300 mb-12">DARK SOULS 2D</h1>
        <button 
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md w-64"
          onClick={() => setGameState(prev => ({...prev, screen: 'game'}))}
        >
          Start Game
        </button>
      </div>
    );
  }

  // Simple game screen
  return (
    <div className="w-full h-full relative bg-gray-900">
      {/* Player character */}
      <div 
        className="absolute bg-gray-600"
        style={{
          left: `${gameState.player.x}px`,
          top: `${gameState.player.y}px`,
          width: `${gameState.player.width}px`,
          height: `${gameState.player.height}px`,
        }}
      >
        {/* Simple player visual */}
        <div className="w-full h-full relative">
          <div className="absolute bottom-0 w-full h-3/4 bg-gray-700 rounded-t-md"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Simple UI */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 p-2 rounded-md text-white">
        <div>HP: {gameState.player.health}</div>
        <div>Souls: {gameState.player.souls}</div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-white text-sm">
        Press ESC to return to main menu
      </div>
    </div>
  );
};

export default DarkSouls2D;