import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="w-full py-4 bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Chat Traductor</h1>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Recherche..."
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none"
            />
          </div>
          <FaBell className="text-white cursor-pointer" />
          <FaUserCircle className="text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
