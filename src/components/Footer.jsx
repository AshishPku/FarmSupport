import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-green-500 font-bold text-2xl">
                FarmSupport
              </span>
              <p className="mt-2 text-gray-400">
                Smart Farming, Smarter Decisions
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#home"
                className="hover:text-green-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="#features"
                className="hover:text-green-500 transition duration-300"
              >
                Features
              </a>
              <a
                href="#about"
                className="hover:text-green-500 transition duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-green-500 transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-700">
            <div>
              <h3 className="text-lg font-medium text-green-500 mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-500" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-green-500" />
                  <span>support@FarmSupport.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-green-500 mt-1" />
                  <span>
                    123 Agriculture Road, Tech Park, Bengaluru - 560001
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-500 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300"
                  >
                    Soil Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300"
                  >
                    Market Trends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300"
                  >
                    Crop Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300"
                  >
                    Weather Forecast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300"
                  >
                    Disease Detection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-500 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                  />
                  <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} FarmSupport. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
