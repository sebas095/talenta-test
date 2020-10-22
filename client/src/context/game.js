import React, { useState, createContext } from 'react';

export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({});

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
