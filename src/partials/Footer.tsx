import React from "react";
import { Link } from "react-router-dom";
import Logo from  "../images/logo.svg"
function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" to="/official-website/" aria-label="Cruip">
                <img src={Logo} className="w-28 lg:w-40" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a
                className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                href="#0"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                href="#0"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Products
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Manage
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Analyse
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Launch
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Experimentation
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Channel Partners
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Compare
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Session Recording
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Feature Flags
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Heatmaps
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Correlation Analysis
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Company
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
