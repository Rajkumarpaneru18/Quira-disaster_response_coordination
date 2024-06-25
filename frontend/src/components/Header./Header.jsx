import React from "react";
import logo from "../../assets/logo.png"; // Assuming you have a logo image in your assets folder

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-300 px-4 py-2 shadow-md h-32">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mx-12 w-48 rounded-full mr-2" />{" "}
        {/* Adjust size as needed */}
        <h1 className="text-lg font-bold"></h1>
      </div>
      {/* <nav className="flex space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Dashboard
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Reports
        </a>
        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
      </nav> */}
    </header>
  );
}

export default Header;
