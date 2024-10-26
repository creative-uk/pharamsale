import React from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaFacebookF, FaPinterestP, FaYoutube } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-[#AEEEEE]"> {/* Lighter blueish color */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* First Row */}
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-[#0EBBC6]">PHARMSALE</span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border rounded px-2 py-1 w-24"> {/* Adjusted width */}
              <option>Eng</option>
              <option>Other Language</option>
            </select>
            <select className="border rounded px-2 py-1 w-24"> {/* Adjusted width */}
              <option>GBP</option>
              <option>Other Currency</option>
            </select>
          </div>
        </div>

        {/* Second Row - Links and Button */}
        <div className="grid grid-cols-4 gap-4 mt-4 pb-4">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Returns & Refunds</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Trust & Safety</span>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Seller Support</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Buyer Protection</span>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col space-y-2">
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">FAQS</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">About us</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Contact us</span>
          </div>
          {/* Column 4 - Button */}
          <div className="flex items-center justify-center">
            <button className="flex items-center bg-white bg-opacity-80 text-[#0EBBC6] rounded px-4 py-2 shadow-lg hover:bg-opacity-100 transition">
              <AiOutlineMail className="mr-2" />
              Next Feature
            </button>
          </div>
        </div>

        {/* Dashed Line */}
        <hr className="border-dashed border-gray-400 my-4" />

        {/* Third Row */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Cookies Policy</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Custom Terms</span>
            <span className="text-gray-700 hover:text-[#0EBBC6] transition">Privacy Policy</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-4 text-[#0EBBC6]">
              <a href="#twitter" aria-label="Twitter" className="hover:text-blue-500 transition">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="hover:text-blue-500 transition">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#pinterest" aria-label="Pinterest" className="hover:text-blue-500 transition">
                <FaPinterestP className="w-6 h-6" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="hover:text-blue-500 transition">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
