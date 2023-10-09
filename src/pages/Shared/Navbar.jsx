import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { AuthContext } from '../../Context/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUserProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  const signOut = () => {
    logOut()
    .then(() => {
      toast.success('user signed out');
      navigate('/');
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  return (
    <div className="navbar bg-slate-100">
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
              {/* Use ScrollLink to scroll to the "serviceCard" section */}
              <ScrollLink to="serviceCard" spy={true} smooth={true} offset={-70} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li>
              <NavLink to="/speakers" activeClassName="text-red-500">
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="text-red-500">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="text-red-500">
                About Us
              </NavLink>
            </li>
            <li>
            {
          user &&  <NavLink to="/gallery" activeClassName="text-red-500">
                Gallery
              </NavLink>
        }
             
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
            {/* Use ScrollLink to scroll to the "serviceCard" section */}
            <ScrollLink to="serviceCard" spy={true} smooth={true} offset={-70} duration={500}>
              Service
            </ScrollLink>
          </li>
          <li>
            <NavLink to="/speakers" activeClassName="text-red-500">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="text-red-500">
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
            {/* <div className="w-10 rounded-full">
              <img src="../../../public/profile.png" alt="Profile" />
            </div> */}
            {
              user?.email ? (
                <>
                  <div>
                  <img className="rounded-full mr-3" src={userProfile?.photoURL} />
                  </div>
                </>
              ) : (
                <>
                <div className="w-10 rounded-full">
              <img src="../../../public/profile.png" alt="Profile" />
            </div>
                </>
              )
            }
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           
              <li>
            {
          user && <NavLink to="/profile" activeClassName="text-red-500">
          Profile
              </NavLink>
        }
              
            </li>
          
            {/* <li className="lg:hidden">
              <NavLink to="/login" activeClassName="text-red-500">
                Login
              </NavLink>
            </li> */}
            <li className="lg:hidden">
              <NavLink to="/register" activeClassName="text-red-500">
                Register
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/logout" activeClassName="text-red-500">
                Logout
              </NavLink> */}
              {
                user?.email ? <div><h1 className="text-base inline mr-3">{userProfile?.displayName}</h1> <button className="font-bold" onClick={signOut}>Log Out</button></div>
                :
                <Link to="/login" className="btn">
               <button>Log In</button>
            </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
