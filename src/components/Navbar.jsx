import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/Logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 w-full">
      <div className="m-4">
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
            <li className="hover:opacity-80 font-medium duration-300 pr-4 text-lg active:scale-95">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:opacity-80 font-medium duration-300 text-lg active:scale-95">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
