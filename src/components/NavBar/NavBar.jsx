import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

const NavBar = () => {
  const activeClassName =
    "rounded-xl px-2 text-black font-bold transition-all duration-300";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Home
        </NavLink>
      </li>
      {/* <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li> */}
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClassName : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar mt-6 rounded-t-2xl bg-[#9538E2] px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="hidden bg-none text-xl font-bold lg:block">
            G@adget Heav3n
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <a className="btn flex aspect-square items-center justify-center rounded-full border-none bg-white p-3 text-black hover:text-[#9538E2]">
            <IoCartOutline size={20} />
          </a>
          <a className="btn flex aspect-square items-center justify-center rounded-full border-none bg-white p-3 text-black hover:text-[#9538E2]">
            <FaRegHeart size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
