import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";

const Contact = () => {
  document.title = "Contact | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(Theme.DEFAULT);
  }, [themeCtx]);

  return <div>Contact Coming Soon</div>;
};

export default Contact;
