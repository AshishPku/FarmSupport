import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link className="flex items-center" to={"/"}>
            <div className="flex-shrink-0 flex items-center">
              <span className="text-green-600 font-bold text-2xl">
                FarmSupport
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            >
              Contact
            </a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition duration-300">
              EXPLORE NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
          >
            Home
          </a>
          <a
            href="#features"
            className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
          >
            Contact
          </a>
          <button className="w-full text-left px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700">
            EXPLORE NOW
          </button>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Header;
