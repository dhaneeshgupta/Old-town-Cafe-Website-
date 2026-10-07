import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [navLinks]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-wood-dark)/95 shadow-lg backdrop-blur-sm"
          : "bg-(--color-wood-dark)/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Old Town Cafe Logo"
              className="h-14 w-auto object-contain bg-(--color-cream) rounded-md p-1"
            />
            <span className="hidden sm:block font-(family-name:--font-display) text-(--color-cream) text-xl tracking-wide">
              Old Town Cafe
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium tracking-wide text-sm uppercase transition-colors duration-200 pb-1 ${
                    isActive
                      ? "text-(--color-mustard-light)"
                      : "text-(--color-cream) hover:text-(--color-mustard-light)"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-(--color-mustard) transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-(--color-mustard) hover:bg-(--color-amber) text-(--color-wood-dark) font-semibold text-sm uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors duration-200 shadow-md"
            >
              Visit Us
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-7 bg-(--color-cream) transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-(--color-cream) transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-(--color-cream) transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-(--color-wood-dark) overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-medium tracking-wide text-base uppercase py-2 border-b border-(--color-saddle)/50 ${
                  isActive ? "text-(--color-mustard-light)" : "text-(--color-cream)"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-(--color-mustard) text-(--color-wood-dark) text-center font-semibold text-sm uppercase tracking-wide px-5 py-3 rounded-full mt-2"
          >
            Visit Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
