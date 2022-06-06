import React, { useState } from "react";
import classes from "./Nav.module.css";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const contactUs = () => {
    navigate("/motiv8/contact_us");
  };
  const menuHandler = (e)=>
  {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className="bg-transparent   z-50">
          <div className="flex items-center justify-between h-16 relative">
            <div className="hidden md:block">
              <ul className="flex flex-row gap-6 items-baseline pr-8">
                <li>
                  <Link to="/motiv8/home" className={classes.links}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about_us" className={classes.links}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/motiv8/about_us#the_team"
                    className={classes.links}
                  >
                    The Team
                  </Link>
                </li>
                <li>
                  <Link to="blog" className={classes.links}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" className={classes.links}>
                    Portfolio
                  </Link>
                </li>
                <li
                  onClick={contactUs}
                  id={classes.contact}
                  // className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Get In Touch
                </li>
              </ul>
            </div>

            <div className="absolute right-4 block md:hidden w-fit h-fit bg-blue-800 rounded-md">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="  bg-blue-500 self-end p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <span className="sr-only">Open main menu</span> */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {  
            <div
            
              className="bg-blue-200 fixed top-0 right-0 self-start w-[100vw] h-[100vh] py-4 z-50 md:hidden"
              id="mobile-menu"
              onClick={menuHandler}
            >
                <ul className="flex flex-col gap-2 pr-4 items-end self-end justify-end"
                
                >
                  <li>
                    <Link
                      to="/motiv8/home"
                      className={classes.links} >
                      Home
                    </Link>
                  </li>
                  <li
                  
                  >
                    <Link
                    
                      to="about_us"
                      className={classes.links}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/motiv8/about_us#the_team"
                      className={classes.links}
                    >
                      The Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="blog"
                      className={classes.links}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      className={classes.links}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li
                    onClick={contactUs}
                    id={classes.contact}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Get In Touch
                  </li>
                </ul>
            </div>
            }
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
