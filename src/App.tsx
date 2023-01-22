import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import SobreMi from "./components/SobreMi";
import PieDePag from "./components/PieDePag";
import Estudios from "./components/Estudios";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <SobreMi />

      <Estudios/>

      <Projects />

      <PieDePag />
    </div>
  );
}

export default App;
