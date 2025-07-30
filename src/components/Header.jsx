import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/munamii.png";

const Header = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    // Only run IntersectionObserver on desktop
    if (window.innerWidth >= 768) {
      const observer = new window.IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0 }
      );
      if (topRef.current) observer.observe(topRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Products", page: "products" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <>
      {/* Invisible marker for IntersectionObserver (desktop only) */}
      <div ref={topRef} style={{ height: 1 }} className="hidden md:block" />
      <header
        className={`
          md:sticky top-0 z-50 bg-gradient-to-r from-teal-100 to-sky-300 text-white shadow-lg rounded-b-3xl lg:mx-6
          transition-all duration-300
          ${scrolled ? "md:py-2" : "md:py-4"}
          py-4
        `}
        style={{ overflow: "visible" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
          {/* Logo */}
          <div className="flex flex-col items-center w-full md:w-auto md:items-start ml-6">
            {/* Desktop logo: sticky and shrinks on scroll */}
            <Link
              to="/"
              onClick={() => setCurrentPage("home")}
              className={`
                hidden md:block transition-all duration-300
                ${scrolled ? "relative z-50" : ""}
              `}
              style={{
                position: scrolled ? "relative" : "static",
                top: scrolled ? "0" : "auto",
              }}
            >
              <img
                src={logo}
                alt="logo"
                className={`
                  rounded-full outline-3 outline-teal-500 shadow-md hover:scale-105 transition-transform duration-600 hover:shadow-lg
                  ${scrolled ? "h-20 w-20" : "h-24 w-24"}
                `}
                style={{
                  zIndex: 60,
                  marginBottom: scrolled ? "-40px" : "0",
                }}
              />
            </Link>
            {/* Mobile logo: always visible above menu */}
            <img
              src={logo}
              alt="logo"
              className={`
                md:hidden
                rounded-full outline-3 outline-teal-500 shadow-md transition-transform duration-300
                mx-auto h-20 w-20 mb-4
              `}
              style={{
                transition: "all 0.3s",
              }}
            />
          </div>
          {/* Navigation Links */}
          <nav className="w-full md:w-auto flex justify-center md:justify-end">
            <ul className="flex md:mr-2 justify-center gap-2 font-bold font-munamii md:gap-4 md:text-lg">
              {navItems.map((item) => (
                <li key={item.page}>
                  <Link
                    to={`/${item.page}`}
                    onClick={() => setCurrentPage(item.page)}
                    className={`px-2 md:px-4 py-2 rounded-full ring-1 transition-all duration-300 ease-in-out
                      ${
                        currentPage === item.page
                          ? "bg-white text-pink-500 shadow-md ring-white"
                          : "text-amber-900 hover:bg-teal-100 hover:text-teal-600 hover:shadow-lg hover:scale-105"
                      }
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/* Spacer for logo overlap on desktop */}
      <div
        className={`hidden md:block transition-all duration-300`}
        style={{
          height: scrolled ? "40px" : "0",
        }}
      />
    </>
  );
};

export default Header;

