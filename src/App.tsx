import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Charades from "./pages/Charades";
import PaperGame from "./pages/PaperGame";
import Flags from "./pages/Flags";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charades" element={<Charades />} />
          <Route path="/paper-game" element={<PaperGame />} />
          <Route path="/flags" element={<Flags />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
