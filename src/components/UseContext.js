import React, { createContext, useContext } from 'react';

// Create the context
const ThemeContext = createContext('light');

const UseContext = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
        <h1>3.UseContext:-</h1>
      <ThemeDisplay />
    </div>
  );
};

const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
};

export default UseContext;
