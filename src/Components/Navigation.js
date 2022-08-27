
import React, { useState, useEffect } from "react";
import {
  Button
} from 'react-bootstrap'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./Navigation.css";


export default function Navigation() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={require("../Assets/logo.jpeg")} className="Logo" alt="logo" />
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to='/'>
            <a href="#">Home</a>
          </Link>
          <Link to='/Company'>
            <a href="/">About</a>
          </Link>
          <Link to='/Contact'>
            <a href="/">Contact</a>
          </Link>
          <Link to="/Signup">
            <button>Registration</button>
          </Link>
          <Link to="/login">
            <button>Logout</button>
          </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🔳</button>
    </header>
  );
}
