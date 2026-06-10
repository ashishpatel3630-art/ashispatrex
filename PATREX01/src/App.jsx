import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import ShowCash from "./page/ShowCash";
import Services from "./page/Services";
import AllServices from "./page/AllServices";
import PremiumPortfolioSection from "./page/Portfolio";
import PremiumFaqStack from "./page/FQAs";
import Footer from "./components/Footer";
import Clients from "./page/Clients";
import PremiumTechStack from "./page/TechStac";
import PremiumPreFooterShowcase from "./page/PreFooter";
import Work from "./page/work";
import Contact from "./page/contact";
import AboutAndTeam from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0B0B0B",
          color: "white",
        }}
      >
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ShowCash />
                <Services />
                <PremiumPortfolioSection />
                <Clients />
                
                <PremiumTechStack />
                <PremiumFaqStack />
                <PremiumPreFooterShowcase />
                <Footer />
              </>
            }
          />

          <Route
            path="/work"
            element={
              <>
                <Work />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutAndTeam/>
                <Footer />
              </>
            }
          />

          <Route
            path="/all-services"
            element={<AllServices />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;