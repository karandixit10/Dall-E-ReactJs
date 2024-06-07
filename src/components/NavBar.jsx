import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import axios from "axios";
import { toast } from 'react-toastify';

const NavBar = () => {
  const naviagte = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Make a request to logout API endpoint
      await axios.post("/logout");
      localStorage.removeItem("auth");
      naviagte('/login');
      console.log("Logged out successfully");
      toast.success("User logged out successfully");
    } catch (error) {
      // Handle error
      console.error("Logout failed:", error.message);
    }
  };
  

  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="Your Brand Logo" className="w-28 object-contain" />
      </Link>
      <div className="flex items-center">
        <Link to="/create-post">
          <button className="bg-[#6469ff] px-4 py-2 rounded-md text-white font-inter font-medium mr-4">
            Create Post
          </button>
        </Link>
        {/* Call handleLogout function when logout button is clicked */}
        <button onClick={handleLogout} className="bg-[#dc3d3d] px-4 py-2 rounded-md text-white font-inter font-medium">
          Logout
        </button>
      </div>
    </header>
  );
};

export default NavBar;
