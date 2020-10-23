import React, { useState, createContext } from 'react';

export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: Array(9).fill(null),
    gameId: '',
    winner: '',
  });

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
