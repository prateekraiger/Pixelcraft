import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="w-full px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.5l1.5-1.5 1.5 1.5m-1.5-1.5V12m0 0h8"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MosaicMind
              </h1>
              <p className="text-xs text-gray-300 font-medium">
                AI Pixel Art Generator
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 transition-colors duration-300 font-medium ${
                location.pathname === "/"
                  ? "text-white border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 transition-colors duration-300 font-medium ${
                location.pathname === "/about"
                  ? "text-white border-b-2 border-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
