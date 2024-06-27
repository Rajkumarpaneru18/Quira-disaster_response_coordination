import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"; // Assuming you have a logo image in your assets folder
import profilePhoto from "../../assets/flood.jpeg"; // Assuming you have a default profile photo in your assets folder

function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    console.log(user);
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <header className="flex justify-between items-center bg-gray-300 px-4 py-2 shadow-md h-32">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mx-12 w-48 rounded-full mr-2" />
      </div>
      <div className="flex items-center">
        {username && (
          <>
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-lg font-bold text-red-600">{username}</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
