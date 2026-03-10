import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-10 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
        Adrian<span className="text-blue-400">.dev</span>
        </h1>

        {/* Navigation */}
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}