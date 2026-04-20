import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0e0e0e]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-xl tracking-widest text-[#d4af6e] uppercase select-none">
          Adrian<span className="text-white">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-sm tracking-[0.15em] uppercase text-[#a8a8a8] hover:text-[#d4af6e] transition-colors duration-300 group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af6e] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-4 px-5 py-2 border border-[#d4af6e] text-[#d4af6e] text-sm tracking-widest uppercase hover:bg-[#d4af6e] hover:text-[#0e0e0e] transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#d4af6e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4af6e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4af6e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#0e0e0e]/95 backdrop-blur-md ${
          menuOpen ? "max-h-64 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-[0.2em] uppercase text-[#a8a8a8] hover:text-[#d4af6e] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}