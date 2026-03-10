import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Adrian Adora. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="hover:text-gray-400">GitHub</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
          <a href="#" className="hover:text-gray-400">Email</a>
        </div>

      </div>
    </footer>
  );
}