import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // Логика для правильной высоты выпадающего меню на мобильных
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  // Логика для отслеживания ширины окна (чтобы на десктопе меню не ломалось)
  useEffect(() => {
    const showMenu = () => {
      if (window.innerWidth > 800) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };
    window.addEventListener("resize", showMenu);
    return () => window.removeEventListener("resize", showMenu);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2 style={{ color: "#49a6e9", margin: 0 }}>Coding Addict</h2>
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        
        <div className="links-container" ref={linksContainerRef}>
          <div ref={linksRef}>
            <Sidebar />
          </div>
        </div>

        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;