import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Story from "./pages/Story";

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Story />
      <Footer />
    </>
  );
};

export default App;
