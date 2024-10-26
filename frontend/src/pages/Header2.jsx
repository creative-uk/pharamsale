// Header2.jsx
import React from 'react';
import logo from '../assets/logo.png';
import { FaUserCircle, FaShoppingCart, FaEnvelope, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { post } from '../services/ApiEndpoint.jsx';
import { SetUser } from '../redux/AuthSlice.jsx';

const Header2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await post('/api/auth/logout');
      if (response.data.success) {
        dispatch(SetUser(null)); // Clear user state
        toast.success("Logout successful!");
        navigate('/login'); // Redirect to login page after logout
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <header className="mb-5 px-8 py-4 bg-white w-full shadow-[1px_1px_3px_rgba(14,187,198,0.2)]">
      <div className="w-full px-8 flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="text-2xl font-bold text-[#0EBBC6]">PHARMSALE</span>
        </div>

        {/* Right side - Action Items */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0EBBC6] shadow-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-[#0EBBC6]">
            <a href="#messages" aria-label="Messages" className="hover:text-blue-500 transition">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="#profile" aria-label="Profile" className="hover:text-blue-500 transition">
              <FaUserCircle className="w-6 h-6" />
            </a>
            <a href="#cart" aria-label="Cart" className="hover:text-blue-500 transition">
              <FaShoppingCart className="w-6 h-6" />
            </a>
            {/* Logout Icon */}
            <button
              onClick={handleLogout}
              aria-label="Logout"
              className="hover:text-blue-500 transition"
            >
              <FaSignOutAlt className="w-6 h-6" />
            </button>
          </div>

          {/* Become a Seller Button */}
          <button className="px-4 py-2 bg-[#0EBBC6] text-white font-medium rounded hover:bg-[#0cb0b8] transition-colors">
            Become a Seller
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;
