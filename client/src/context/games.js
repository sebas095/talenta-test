import React, { useState, createContext } from 'react';

export const GamesContext = createContext({});

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState({
    started: [],
    finished: {
      wons: [],
      tied: [],
    },
  });

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {children}
    </GamesContext.Provider>
  );
};
