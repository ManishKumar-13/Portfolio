// App.jsxnpm install react-icons

import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  );
}

export default App;
