import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Fylla" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
