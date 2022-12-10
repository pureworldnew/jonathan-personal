import React from "react";
import "./App.css";

import ReactGA from "react-ga";
import { useEffect } from "react";

import Section from "./components/section";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";

ReactGA.initialize("UA-191985965-1"); //init Google Analytics

function App() {
  useEffect(() => {
    //onload pageview count
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "#f7e7cd" }}>
      <span id="top"></span>
      <header className="App-header">
        <Profile />
        <Section />
        <Skills />
        <Experience />
      </header>
      <Footer />
    </div>
  );
}

export default App;
