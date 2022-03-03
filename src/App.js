import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Portraits from "./pages/ServicesF/Portraits";
import Weddings from "./pages/ServicesF/Weddings";
import Commercial from "./pages/ServicesF/Commercial";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services/portraits" element={<Portraits />} />
        <Route path="/services/weddings" element={<Weddings />} />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
