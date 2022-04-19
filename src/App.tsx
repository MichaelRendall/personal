import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/theme-context";
import Theme from "./models/theme-enum";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Charades from "./pages/Charades";
import PaperGame from "./pages/PaperGame";
import Flags from "./pages/Flags";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import ThemeWrapper from "./components/UI/ThemeWrapper";

const App = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div className={`App ${themeCtx.theme}`}>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeWrapper title="Home" theme={Theme.RED}>
                <Home />
              </ThemeWrapper>
            }
          />
          <Route
            path="/charades"
            element={
              <ThemeWrapper title="Charades" theme={Theme.RED}>
                <Charades />
              </ThemeWrapper>
            }
          />
          <Route
            path="/paper-game"
            element={
              <ThemeWrapper title="Paper Game" theme={Theme.YELLOW}>
                <PaperGame />
              </ThemeWrapper>
            }
          />
          <Route
            path="/flags"
            element={
              <ThemeWrapper title="Flags" theme={Theme.BLUE}>
                <Flags />
              </ThemeWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <ThemeWrapper title="Contact" theme={Theme.RED}>
                <Contact />
              </ThemeWrapper>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
