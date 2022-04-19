import { memo } from "react";

import { Container, GameSection } from "../components/UI";
import GameHeading from "../components/GameHeading/GameHeading";
import Email from "../components/contact/Email";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
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

export default memo(Contact);
