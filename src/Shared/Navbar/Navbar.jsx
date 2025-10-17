import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import resume from "../../assets/RESUME.pdf";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        <li className="hover:text-cyan-400 transition">Home</li>
      </NavLink>
      <NavLink to="/aboutUs" onClick={() => setIsOpen(false)}>
        <li className="hover:text-cyan-400 transition">About Us</li>
      </NavLink>
      <NavLink to="/allProjects" onClick={() => setIsOpen(false)}>
        <li className="hover:text-cyan-400 transition">Projects</li>
      </NavLink>
      <NavLink to="/contact" onClick={() => setIsOpen(false)}>
        <li className="hover:text-cyan-400 transition">Contact Us</li>
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-950 via-blue-950 to-purple-950 shadow-lg z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-cyan-400">Ashik Khan</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">{links}</ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-start py-2 pl-4 pr-10 overflow-hidden font-semibold text-white transition-all duration-200 ease-in-out rounded hover:pl-8 hover:pr-6 bg-blue-600 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-200 ease-in-out bg-indigo-700 group-hover:h-full"></span>
            <span className="absolute right-0 pr-3 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Resume
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none mr-28"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-indigo-950 text-white transition-all duration-500 ease-in-out overflow-hidden mr-10 ${
          isOpen ? "opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-medium">
          {links}
        </ul>

        <div className="flex justify-center mt-4">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
