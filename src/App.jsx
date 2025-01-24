import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import tw from "twin.macro";
import Home from "./app/containers/Home";
import Quote from "./app/containers/Quote";
import MobileService from "./app/containers/MobileService";
import WindshieldReplacement from "./app/containers/WindshieldReplacement";
import RockChipRepair from "./app/containers/RockChipRepair";
import PrivacyPolicy from "./app/containers/PrivacyPolicy";
import Contact from "./app/containers/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    overflow-x-hidden
  `}
`;

const ScrollToTopButton = styled.button`
  ${tw`
    fixed
    bottom-8
    right-8
    md:right-4
    w-12
    h-12
    bg-cBlue
    text-white
    text-lg
    flex
    items-center
    justify-center
    rounded-full
    shadow-lg
    hover:bg-blue-700
    transition-all
    duration-300
  `}
  z-index: 100; /* Ensure it appears above other elements */
`;

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll to show or hide the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="quote">
              <Route index element={<Quote />} />
            </Route>
            <Route path="windshield-replacement">
              <Route index element={<WindshieldReplacement />} />
            </Route>
            <Route path="mobile-service">
              <Route index element={<MobileService />} />
            </Route>
            <Route path="rock-chip-repair">
              <Route index element={<RockChipRepair />} />
            </Route>
            <Route path="privacy-policy">
              <Route index element={<PrivacyPolicy />} />
            </Route>
            <Route path="contact">
              <Route index element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Back to Top Button */}
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop} title="Scroll to top">
          ↑
        </ScrollToTopButton>
      )}
    </AppContainer>
  );
};

export default App;
