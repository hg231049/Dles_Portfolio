import "./App.css";
import { createPortal } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import BackgroundScene from "./components/BackgroundScene";
import Main from "./pages/main/Main";
import Header from "./pages/layout/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const mainRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header visible={showHeader} />
        <Routes>
          <Route 
            path="/" 
            element={
              <div ref={mainRef} className="relative w-full">
                <BackgroundScene scrollContainer={mainRef} />
                <Main />
              </div>
            } 
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App;
