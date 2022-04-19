import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme-context";
import Theme from "../../models/theme-enum";

interface ThemeWrapperProps {
  title: string;
  theme: Theme;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = (props) => {
  document.title = `${props.title} | Michael Rendall`;

  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(props.theme);
  }, [themeCtx, props.theme]);

  return <>{props.children}</>;
};

export default ThemeWrapper;
