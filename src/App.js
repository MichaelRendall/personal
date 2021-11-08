import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="charades" element={""} />
        <Route path="paper-game" element={""} />
        <Route path="flags" element={""} />
        <Route path="contact" element={""} />
      </Routes>
    </div>
  );
};

export default App;
