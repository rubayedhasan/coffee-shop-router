import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      {/* navbar section component::Navbar  */}
      <Navbar></Navbar>

      {/* dynamic section container component::  */}
      <section className="h-[calc(100vh-136px)] w-11/12 md:w-4/5 py-10 lg:py-12 mx-auto">
        {/* dynamic section  */}
        <Outlet />
      </section>

      {/* footer section component::Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
