import { useState } from "react";
import Header from "./components/Header";
// import logo from './assets/munamii.png'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import Footer from "./components/Footer";
// import './App.css'
import { Routes, Route, Link } from "react-router";

function App() {
  //  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState("home"); // Default to 'home' page

  return (
    <div className="flex flex-col min-h-screen bg-pink-100 bg-[url('../assets/bg.png')] bg-repeat">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
