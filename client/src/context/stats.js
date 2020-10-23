import React, { useState, createContext } from 'react';

export const StatsContext = createContext({});

export const StatsContextProvider = ({ children }) => {
  const [stats, setStats] = useState({ playerOne: 0, playerTwo: 0 });

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
};
