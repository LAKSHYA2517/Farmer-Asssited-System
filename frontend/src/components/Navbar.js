import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 w-10 h-10 rounded flex items-center justify-center text-white text-xl font-bold">
            🌱
          </div>
          <div>
            <h1 className="text-xl font-bold text-green-700">Smart Crop</h1>
            <p className="text-xs text-gray-600 -mt-1">
              Intelligent Farming Assistant
            </p>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/input" className="hover:text-green-600">
            Soil Analysis
          </Link>
          <Link to="/ResultsPage" className="hover:text-green-600">
            Results
          </Link>
          <Link to="/crop-details" className="hover:text-green-600">
            Crop Guide
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-5 relative">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 text-sm hover:text-green-600"
            >
              🌐 <span>EN</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border rounded shadow-md">
                <button className="block w-full px-3 py-1 hover:bg-gray-100">
                  EN
                </button>
                <button className="block w-full px-3 py-1 hover:bg-gray-100">
                  HI
                </button>
              </div>
            )}
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/input"
            className="block text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Soil Analysis
          </Link>
          <Link
            to="/results"
            className="block text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Results
          </Link>
          <Link
            to="/crop-details"
            className="block text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Crop Guide
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-green-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
