import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./../assets/shared/logo.svg";
import menu from "./../assets/menu.svg";
import close from "./../assets/close.svg";

const MOBILE_BREAKPOINT = 675;

const navItems = [
  { to: "/", label: "Home", span: "00" },
  { to: "destination", label: "Destination", span: "01" },
  { to: "crew", label: "Crew", span: "02" },
  { to: "technology", label: "Technology", span: "03" },
];

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth >= MOBILE_BREAKPOINT);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsNavOpen(newWidth >= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [handleResize]);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  return (
    <header className="primary-header flex">
      <div className="logo-container">
        <img
          onClick={() => navigate("home")}
          src={logo}
          alt="logo"
          className="logo pointer"
        />
      </div>
      <button className="hide-drop pointer" onClick={toggleNav}>
        <img src={menu} alt="menu-icon" />
      </button>
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ x: isMobile ? "100vw" : 0, opacity: isMobile ? 0.5 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0.5, x: "100vw" }}
            transition={{ duration: isMobile ? 0.5 : 0, type: "tween" }}
            className={`${isMobile ? "sidebar" : ""} ${isNavOpen ? "show" : ""}`}
          >
            {isMobile && (
              <button id="close" className="pointer" onClick={toggleNav}>
                <img src={close} alt="close-icon" />
              </button>
            )}
            <ul className="primary-navigation underline-indicators flex">
              {navItems.map(({ to, label, span }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    state={{ page: label.toLowerCase() }}
                    className={({ isActive }) =>
                      `ff-sans-cond uppercase text-white letter-spacing-2 ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    <span>{span}</span>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default Header;