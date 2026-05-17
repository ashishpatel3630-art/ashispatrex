import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Chatbot from "./components/Chatbot";
import Home from "./pages/home";
import About from "./pages/About";
import Portfolio from "./pages/portfolio";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
 

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/services" element={<Services />} />
  <Route path="/Services" element={<Services />} />
  <Route path="/services/:slug" element={<ServiceDetail />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
