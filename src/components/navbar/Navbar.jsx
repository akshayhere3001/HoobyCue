import "./Navbar.css";
import logo from "./logo.png";
import { FaBell, FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import {
  MdExplore,
  MdStars,
  MdArrowDropDown,
  MdBookmark,
} from "react-icons/md";

const mobile_menu = document.getElementById("mobile-menu");
// const hamburger_icon = document.querySelector("#mobile-icon i");

function openCloseMenu() {
  mobile_menu.classList.toggle("block");
  mobile_menu.classList.toggle("active");
}

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

const Navbar = () => {
  return (
    <>
      <header className="h-24 bg-white">
        <nav className="relative px-24 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <img src={logo} alt="Tailwindcss Navigation" />

            {/* Search Bar  */}
            <div className="sm:block hidden wrap">
              <div className="w-full relative flex">
                <input
                  type="text"
                  className="w-full p-5 h-5 rounded-l-md bg-gray-100 text-gray-500"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="h-5 py-5 px-3 rounded-r-md bg-[#8064A2]  flex items-center justify-center  text-white cursor-pointer text-xl"
                >
                  <CiSearch />
                </button>
              </div>
            </div>

            <ul className="hidden md:flex space-x-6">
              <li className="flex relative group">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <MdExplore className="text-[#8064A2]" />
                  <a href="#" className="mr-1">
                    Services
                  </a>
                  <MdArrowDropDown />
                </div>
                {/* Submenu starts */}
                <ul className="absolute z-10 bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* Submenu ends */}
              </li>

              <li className="flex  relative group">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <MdStars className="text-[#8064A2]" />
                  <a href="#" className="mr-1">
                    Hobbies
                  </a>
                  <MdArrowDropDown />
                </div>
                {/* Submenu starts */}
                <ul className="absolute z-10 bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Football</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Coding</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Cricket</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Playing Music</a>
                  </li>
                  <li className="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Swimming</a>
                  </li>
                </ul>
                {/* Submenu ends */}
              </li>
            </ul>
            <div className="sm:block hidden">
              <ul className="flex text-2xl  space-x-6">
                <li className="cursor-pointer">
                  <MdBookmark className="text-[#8064A2]" />
                </li>
                <li className="cursor-pointer">
                  <FaBell className="text-[#8064A2]" />
                </li>
                <li className="cursor-pointer">
                  <FaCartShopping className="text-[#8064A2]" />
                </li>
              </ul>
            </div>
            <a
              href="#"
              className=" px-5 py-3 bg-[#8064A2] rounded hover:bg-[#896bad] text-white hidden md:flex"
              role="button"
            >
              Sign In
            </a>
            {/* Mobile menu icon */}
            <button onClick={() => openCloseMenu()} className="md:hidden">
              <i
                onClick={() => changeIcon(this)}
                className="fa-solid fa-bars"
              />
            </button>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden flex justify-center mt-3 w-full">
            <div
              id="mobile-menu"
              className="mobile-menu absolute top-23 w-full"
            >
              {" "}
              {/* add hidden here later */}
              <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                <li className="border-b-2 border-[#8064A2] hover:bg-red-400 hover:text-white pl-4">
                  <a href="https://google.com" className="block pl-7">
                    Home
                  </a>
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" className="block pl-7">
                    News
                  </a>
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <a href="#" className="block pl-11">
                    Services{" "}
                    <i className="fa-solid fa-chevron-down fa-2xs pt-4" />
                  </a>
                  {/* Submenu starts */}
                  <ul className="bg-white text-gray-800 w-full">
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a className="block pl-16" href="#">
                        Webdesign
                      </a>
                    </li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a className="block pl-16" href="#">
                        Digital marketing
                      </a>
                    </li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a className="block pl-16" href="#">
                        SEO
                      </a>
                    </li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a className="block pl-16" href="#">
                        Ad campaigns
                      </a>
                    </li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a className="block pl-16" href="#">
                        UX Design
                      </a>
                    </li>
                  </ul>
                  {/* Submenu ends */}
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" className="block pl-7">
                    About
                  </a>
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" className="block pl-7">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
