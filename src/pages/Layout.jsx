import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="h-16 bg-gray-200 flex justify-center items-center">
          <Navbar />
        </header>

        <main className="h-screen w-screen bg-white overflow-hidden">
          <Outlet />
        </main>

        <footer className="h-20 sticky bottom-0 bg-gray-200 flex justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
