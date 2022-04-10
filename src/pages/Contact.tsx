import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";

import { Container, GameSection } from "../components/UI";
import GameHeading from "../components/GameHeading/GameHeading";
import Email from "../components/contact/Email";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  document.title = "Contact | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(Theme.RED);
  }, [themeCtx]);

  return (
    <GameSection>
      <GameHeading heading="GET IN TOUCH" />
      <Container>
        <Email />
        <ContactForm />
      </Container>
    </GameSection>
  );
};

export default Contact;
