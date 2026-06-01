import "./App.css";
import { createPortal } from "react-dom";
import { Routes, Route } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import BackgroundScene from "./components/BackgroundScene";
import Main from "./pages/main/Main";
import Header from "./pages/layout/Header";
import Dashboard from "./components/Dashboard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
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
     <ScrollToTop/>
      
        <Routes>
          <Route 
            path="/" 
            element={
              <div ref={mainRef} className="relative w-full">
                <Header visible={showHeader} />
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
