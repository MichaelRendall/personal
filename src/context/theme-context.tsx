import React, { useState } from "react";
import Theme from "../models/theme-enum";

interface ThemeContextObj {
  theme: Theme;
  changeTheme: (text: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextObj>({
  theme: Theme.DEFAULT,
  changeTheme: () => {},
});

const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useState(Theme.RED);

  const contextValue: ThemeContextObj = {
    theme: theme,
    changeTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
