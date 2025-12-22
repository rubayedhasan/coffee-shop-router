import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      {/* react hot toast container  */}
      <Toaster />

      {/* navbar section component::Navbar  */}
      <Navbar></Navbar>

      {/* dynamic section container component::  */}
      <section className="min-h-[calc(100vh-144px)] w-11/12 md:w-4/5 py-10 lg:py-12 mx-auto">
        {/* dynamic section  */}
        <Outlet />
      </section>

      {/* footer section component::Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
