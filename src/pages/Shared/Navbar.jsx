import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" activeClassName="text-red-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeClassName="text-red-500">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" activeClassName="text-red-500">
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointments" activeClassName="text-red-500">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="text-red-500">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">WellEventHub</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" activeClassName="text-red-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" activeClassName="text-red-500">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" activeClassName="text-red-500">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" activeClassName="text-red-500">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="text-red-500">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="space-x-2 hidden md:hidden lg:flex">
          <NavLink
            to="/login"
            activeClassName="btn-active"
            className="btn btn-sm bg-slate-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            activeClassName="btn-active"
            className="btn btn-sm bg-slate-100"
          >
            Register
          </NavLink>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="../../../public/profile.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/profile" activeClassName="text-red-500">
                Profile
              </NavLink>
            </li>
            <li className="lg:hidden">
              <NavLink to="/login" activeClassName="text-red-500">
                Login
              </NavLink>
            </li>
            <li className="lg:hidden">
              <NavLink to="/register" activeClassName="text-red-500">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="text-red-500">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
