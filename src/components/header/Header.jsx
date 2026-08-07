import React, { useState, useEffect } from "react";
import "./header.css";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../../data/profile";

const navItems = [
  { href: "#home", label: "Home", icon: "uil uil-estate" },
  { href: "#about", label: "About", icon: "uil uil-user" },
  { href: "#qualification", label: "Qualification", icon: "uil uil-scenery" },
  { href: "#skills", label: "Skills", icon: "uil uil-file-alt" },
  { href: "#project", label: "Projects", icon: "uil uil-apps" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Registered once. Previously this ran in the render body, adding a new
  // listener on every re-render and never removing them.
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("scroll-header", window.scrollY >= 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          {profile.shortName}
        </a>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map(({ href, label, icon }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={
                    activeNav === href ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className={`${icon} nav__icon`}></i> {label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setIsMenuOpen(false)}
          ></i>
        </div>

        <div className="nav__actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav__toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
