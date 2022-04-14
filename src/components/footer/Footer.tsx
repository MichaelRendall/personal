import React from "react";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={`${classes.footer} width100`}>
      <p>Designed and Developed by Michael Rendall</p>
    </footer>
  );
};

export default Footer;
