import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 w-full">
      <div className="m-4">
        <Link to="/">
          <img
            src={Logo}
            alt="Jensen Logo"
            className="h-8 select-none active:scale-95 duration-300 hover:opacity-80"
          />
        </Link>
      </div>

      <div className="flex items-center flex-row-reverse">
        {/* Hamburger menu button */}
        <button onClick={toggleMenu} className="text-black pr-4 text-4xl">
          {menuOpen ? (
            <IoIosClose className="text-5xl mr-[-6px]" />
          ) : (
            <HiMenu />
          )}
        </button>

        {/* Navigation items */}
        <nav
          ref={menuRef}
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex gap-4 pr-4">
            <li className="hover:opacity-80 font-medium hover:scale-105 duration-300 pr-4 text-2xl active:scale-95">
              <Link to="/">
                <AiFillHome />
              </Link>
            </li>
            <li className="hover:opacity-80 font-medium hover:scale-105 duration-300 mr-1 text-2xl active:scale-95">
              <Link to="/contact">
                <MdEmail />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
