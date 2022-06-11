import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import About from "./Component/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [text, setText] = useState("Enter here");
  const [mode, setMode] = useState("light");
  const Toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const handle = (event) => {
    setText(event.target.value);
  };
  const typing = () => {
    if (text === "Enter here") setText("");
  };
  const lower = () => {
    setText(text.toLowerCase());
  };
  const upper = () => {
    setText(text.toUpperCase());
  };

  return (
    
      <Router>
        <Navbar Toggle={Toggle} />
        <div className="container my-3">
          <Routes>
          <Route exact path="#/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  lower={lower}
                  upper={upper}
                  heading="Enter Text"
                  handle={handle}
                  typing={typing}
                  text={text}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
