import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const [cafeOpen, setCafeOpen] = useState(true);
  const [cafeNotice, setCafeNotice] = useState("");

  const updateStatus = () => {
    const storedStatus = localStorage.getItem("otc_cafe_open");
    if (storedStatus !== null) {
      setCafeOpen(storedStatus === "true");
    }
    const storedNotice = localStorage.getItem("otc_cafe_notice") || "";
    setCafeNotice(storedNotice);
  };

  useEffect(() => {
    updateStatus();
    window.addEventListener("storage", updateStatus);
    return () => window.removeEventListener("storage", updateStatus);
  }, []);
  return (
    <footer className="bg-(--color-wood-dark) text-(--color-cream) wood-texture">
      <div className="rope-divider" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col items-start gap-4">
          <img
            src={logo}
            alt="Old Town Cafe Logo"
            className="h-20 w-auto object-contain bg-(--color-cream) rounded-md p-1.5"
          />
          <p className="text-sm text-(--color-parchment)/80 leading-relaxed">
            Old Town Cafe — By The Nagendra. Saddle up for great brews, hearty
            bites, and a Wild West vibe right here in Jabalpur.
          </p>
          <div className="flex gap-4 mt-1">
            <a
              href="https://www.instagram.com/oldtowncafe.jbp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-mustard-light) hover:text-(--color-amber) transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="tel:+919109007796"
              className="text-(--color-mustard-light) hover:text-(--color-amber) transition-colors"
              aria-label="Call"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.32.57 3.55.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.43.57 3.55a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-(family-name:--font-display) text-(--color-mustard-light) text-xl mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Menu", path: "/menu" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="text-(--color-parchment)/80 hover:text-(--color-mustard-light) transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-(family-name:--font-display) text-(--color-mustard-light) text-xl mb-4">
            Saddle On Down
          </h4>
          <address className="text-sm text-(--color-parchment)/80 not-italic space-y-2">
            <p>Labour Chowk, Jabalpur, Madhya Pradesh</p>
            <p className="flex items-center gap-2 flex-wrap">
              <span>Open Daily: 4:00 PM – 12:00 AM</span>
              <span className="flex items-center gap-1.5 bg-(--color-wood)/50 px-2 py-0.5 rounded border border-(--color-mustard)/20">
                <span className={`inline-block w-2 h-2 rounded-full ${cafeOpen ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}></span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-(--color-parchment)">{cafeOpen ? "Open" : "Closed"}</span>
              </span>
            </p>
            <p>
              <a href="tel:+919109007796" className="hover:text-(--color-mustard-light)">
                +91 91090 07796
              </a>
            </p>
            {cafeNotice && (
              <p className="text-xs text-(--color-mustard-light) bg-(--color-wood)/50 border border-(--color-mustard)/20 rounded-lg p-2.5 mt-2 italic leading-relaxed">
                📢 {cafeNotice}
              </p>
            )}
          </address>
        </div>
      </div>

      <div className="border-t border-(--color-saddle)/40 py-5 text-center text-xs text-(--color-parchment)/60 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
        <span>© {new Date().getFullYear()} Old Town Cafe By The Nagendra. All Rights Reserved.</span>
        <span className="hidden sm:inline text-(--color-saddle)/60">|</span>
        <NavLink
          to="/admin"
          className="text-(--color-mustard-light) hover:text-(--color-amber) transition-colors font-medium flex items-center gap-1"
        >
          Owner Portal 🤠
        </NavLink>
      </div>
    </footer>
  );
}
