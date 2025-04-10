import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {isLoading && <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      {!isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {isLoading && (
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      {isLoading && <Home />}
      {isLoading && <About />}
      {isLoading && <Projects />}
      {isLoading && <Contact />}
    </div>
  );
}

export default App;
