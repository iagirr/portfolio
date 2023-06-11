import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starter from "./components/Starter";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className={`bg-white ${darkMode ? "dark:bg-black text-white" : "text-black"}`}>
        <Starter />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
