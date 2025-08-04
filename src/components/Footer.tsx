import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 backdrop-blur-md bg-white/5 border-t border-white/10 w-full">
      <div className="w-full px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-purple-400"
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
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pixelcraft
              </h3>
              <p className="text-xs text-gray-400">AI Pixel Art Generator</p>
            </div>
          </Link>

          <div className="flex items-center space-x-6 text-sm">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pixelcraft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
