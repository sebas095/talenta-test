import React, { useState, createContext } from 'react';

export const Stats = createContext({});

export const StatsContextProvider = ({ children }) => {
  const [stats, setStats] = useState({});

  return (
    <Stats.Provider value={{ stats, setStats }}>{children}</Stats.Provider>
  );
};
