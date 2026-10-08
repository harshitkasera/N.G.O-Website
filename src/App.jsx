import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";
import Blog from "./Component/Blog";
import BlogDetail from "./Component/BlogDetail"
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const HomePage = () => (
  <>
    <Home />
    <Footer />
  </>
);
const AboutPage = () => (
  <>
    <About />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;