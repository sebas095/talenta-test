import React, { useState, createContext } from 'react';

export const ErrorContext = createContext(null);

export const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
