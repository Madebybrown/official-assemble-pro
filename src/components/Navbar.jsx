import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/Logo.png";

// This component displays the navigation bar at the top of the page
export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 w-full">
      <div className="m-4">
        {/* The logo links to the home page */}
        <Link to="/">
          <img
            src={Logo}
            alt="Jensen Logo"
            className="h-10 select-none active:scale-95 duration-300 hover:opacity-80"
          />
        </Link>
      </div>

      <div>
        <nav>
          <ul className="flex text-lg uppercase">
            {/* Home and Contact links */}
            <li className="hover:opacity-80 font-light hover:scale-105 duration-300 pr-4 text-xl active:scale-95">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:opacity-80 font-light hover:scale-105 duration-300 mr-1 text-xl active:scale-95">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
