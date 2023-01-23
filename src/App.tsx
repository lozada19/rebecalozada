import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import PieDePag from "./components/PieDePag";
import Studies from "./components/Studies";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <AboutMe />

      <Studies/>

      <Projects />

      <PieDePag />
    </div>
  );
}

export default App;
