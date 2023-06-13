import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starter from "./components/Starter";

function App() {
  const darkMode = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className={`bg-white ${darkMode ? "dark:bg-zinc-800 text-white" : "text-black"}`}>
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
