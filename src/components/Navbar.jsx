import { useState } from "react";
import { Link, NavLink } from "react-router";
import { RxCross2 } from "react-icons/rx";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
  // state:: for toggle the hamburger conditionally
  const [showHamburger, setShowHamburger] = useState(false);

  // function:: handler for toggle the hamburger
  const handlerShowHamburger = () => {
    // toggle the hamburger
    setShowHamburger((s) => !s);
  };

  return (
    <nav className=" bg-base-300 shadow-sm h-20">
      <div className="navbar w-11/12 md:w-4/5 mx-auto h-full">
        <div className="navbar-start flex-1 items-center">
          {/* dropdown menu with hamburger icons for small devices  */}
          <div className="dropdown" onClick={handlerShowHamburger}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden cursor-pointer"
            >
              {showHamburger ? (
                <RxCross2 size={20} />
              ) : (
                <RiMenuUnfoldLine size={20} />
              )}
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base transition-all duration-500 ${
                    isActive ? "cf-text-primary font-bold " : "font-medium"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/coffees"
                className={({ isActive }) =>
                  `text-base transition-all duration-500 ${
                    isActive ? "cf-text-primary font-bold " : "font-medium"
                  }`
                }
              >
                Coffees
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-base transition-all duration-500 ${
                    isActive ? "cf-text-primary font-bold " : "font-medium"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>

          {/* Brand name  */}
          <Link to="/" className=" text-lg lg:text-xl font-bold">
            Hot Coffees
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition-all duration-500 ${
                  isActive ? "cf-text-primary font-bold " : "font-medium"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                `text-lg transition-all duration-500 ${
                  isActive ? "cf-text-primary font-bold " : "font-medium"
                }`
              }
            >
              Coffees
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-lg transition-all duration-500 ${
                  isActive ? "cf-text-primary font-bold " : "font-medium"
                }`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
