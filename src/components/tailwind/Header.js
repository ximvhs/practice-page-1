import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="fixed z-20 top-0 left-0 right-0 bg-orange-600 bg-opacity-80">
      {/* container */}
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-5 h-[130px]">
          {/* logo */}
          <div className="w-24 md:w-[400px] z-40">
            <img className="md:w-28" src="logo192.png" alt="#" />
          </div>
          {/* links */}
          <ul
            className={`ul-nav md:visible z-20 ${
              menu ? "off invisible" : "on"
            }`}
          >
            <li className="m-12 md:m-0 ">
              <a href="/footer" className="c-link">
                Home
              </a>
            </li>
            <li className="m-12 md:m-0 ">
              <a href="./AppSteps.js" className="c-link">
                Froduct
              </a>
            </li>
            <li className="m-12 md:m-0 ">
              <a href="./DownLoad.js" className="c-link">
                FAQ
              </a>
            </li>
            <li className="m-12 md:m-0">
              <a href="Footer" className="c-link">
                Contact
              </a>
            </li>
          </ul>
          {/* menu button */}
          <div
            onClick={handleMenu}
            className="z-20 cursor-pointer p-2 md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
