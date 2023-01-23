import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import PieDePag from "./components/PieDePag";
import Estudios from "./components/Estudios";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <AboutMe />

      <Estudios/>

      <Projects />

      <PieDePag />
    </div>
  );
}

export default App;
