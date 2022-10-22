import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
// npm install react-router-dom@6
export default App;
