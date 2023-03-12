import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/Logo.png";
import {AiFillHome} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

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
            className="h-8 select-none active:scale-95 duration-300 hover:opacity-80"
          />
        </Link>
      </div>

      <div>
        <nav>
          <ul className="flex gap-4 pr-4">
            {/* Home and Contact links */}
            <li className="hover:opacity-80 font-medium hover:scale-105 duration-300 pr-4 text-2xl active:scale-95">
              <Link to="/"><AiFillHome /></Link>
            </li>
            <li className="hover:opacity-80 font-medium hover:scale-105 duration-300 mr-1 text-2xl active:scale-95">
              <Link to="/contact"><MdEmail /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
