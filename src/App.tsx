import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import PieDePag from "./components/PieDePag";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <SobreMi />

      <Proyectos />

      <PieDePag />
    </div>
  );
}

export default App;
