import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col h-screen">
          {/* Render the Navbar component */}
          <header className="h-16 bg-white text-black flex justify-center items-center">
            <Navbar />
          </header>

          {/* Render the Outlet component */}
          <main className="h-full w-full flex-1 bg-gray-100 text-black overflow-hidden">
            <Outlet />
          </main>

          {/* Render the Footer component */}
          <footer className="h-20 sticky bottom-0 bg-white flex justify-center">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
