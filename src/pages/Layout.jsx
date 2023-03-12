import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillMoonFill } from "react-icons/bs";

const Layout = () => {
  // Define a state variable for the dark mode state and a function to update it
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col h-screen">
          {/* Render the Navbar component */}
          <header className="h-16 bg-white text-black dark:bg-black dark:text-white flex justify-center items-center dark:border-b-2 dark:border-gray-700">
            <Navbar />

            {/* Render the MoonFill icon as a button */}
            <button>
              <BsFillMoonFill
                onClick={() => setDarkMode(!darkMode)}
                className="hover:scale-105 duration-300 cursor-pointer text-xl mr-10 active:scale-95"
              />
            </button>
          </header>

          {/* Render the Outlet component */}
          <main className="h-full w-full bg-gray-100 text-black dark:bg-black dark:text-white overflow-hidden">
            <Outlet />
          </main>

          {/* Render the Footer component */}
          <footer className="h-20 sticky bottom-0 bg-white dark:bg-black dark:text-white flex justify-center dark:border-t-2 dark:border-gray-700">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
