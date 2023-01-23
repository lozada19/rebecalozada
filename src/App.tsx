import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Studies from "./components/Studies";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <AboutMe />

      <Studies/>

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
