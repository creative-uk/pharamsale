import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

  return (
<header className="flex justify-between items-center mb-5 px-8 py-4 bg-white shadow-[1px_1px_3px_rgba(14,187,198,0.2)]">
{/* Left Side: Logo and PHARMSALE */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-[#0EBBC6] text-2xl font-bold">PHARMSALE</span>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/login"
          className={`relative text-gray-700 text-lg hover:text-[#0EBBC6] transition-colors duration-200 ${
            location.pathname === '/login' ? 'text-[#0EBBC6]' : ''
          }`}
        >
          Login
          {location.pathname === '/login' && (
            <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#0EBBC6]" />
          )}
        </Link>
        <Link
          to="/register"
          className={`relative text-gray-700 text-lg hover:text-[#0EBBC6] transition-colors duration-200 ${
            location.pathname === '/register' ? 'text-[#0EBBC6]' : ''
          }`}
        >
          Signup
          {location.pathname === '/register' && (
            <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#0EBBC6]" />
          )}
        </Link>
        <button className="px-4 py-2 bg-[#0EBBC6] text-white font-medium rounded hover:bg-[#0cb0b8] transition-colors">
          Become a Seller
        </button>
      </div>
    </header>
  );
};

export default Header;
