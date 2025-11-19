// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-20 mt-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-4 text-white">
            <span className="text-3xl">∞</span> Cerope
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Revolutionizing fashion with AI-powered styling solutions.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Contact Us</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Features</li>
            <li className="hover:text-white">FAQ's</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm">Products</h4>
          <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
            <li className="hover:text-white cursor-pointer">
              User Styling
              <span className="block text-[10px] text-gray-500 mt-1">~ Launching Soon</span>
            </li>
            <li className="hover:text-white cursor-pointer">Price Comparison</li>
            <li className="hover:text-white cursor-pointer">Creator Space</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm">Policies</h4>
          <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Copyright Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Terms and Conditions</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-[11px]">
        ©2025 Cerope. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
