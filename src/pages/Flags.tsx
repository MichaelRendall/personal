import React, { useContext, useEffect } from "react";
import GameSection from "../components/UI/GameSection";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  
  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);
  return <GameSection>Flag Quiz Coming Soon</GameSection>;
};

export default Flags;
