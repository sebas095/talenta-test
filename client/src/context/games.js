import React, { useState, createContext } from 'react';

export const GamesContext = createContext({});

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState({});

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {children}
    </GamesContext.Provider>
  );
};
