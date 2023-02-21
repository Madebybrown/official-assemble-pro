import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillMoonFill } from "react-icons/bs";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col h-screen">
          <header className="h-16 bg-gray-100 dark:bg-gray-900 dark:text-white flex justify-center items-center">
            <Navbar />
            <button>
              <BsFillMoonFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl mr-10"
              />
            </button>
          </header>

          <main className="h-full w-full bg-white dark:bg-gray-800 dark:text-white overflow-hidden">
            <Outlet />
          </main>

          <footer className="h-20 sticky bottom-0 bg-gray-100 dark:bg-gray-900 dark:text-white flex justify-center">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
