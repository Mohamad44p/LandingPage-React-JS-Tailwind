import React, { useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const NavLinks = ["Home", "Company", "Resources", "About", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white">
      <h1 className="w-full font-bold text-[#00df9a] text-3xl">React.</h1>
      <ul className="hidden md:flex">
        {NavLinks.map((link) => (
          <li
            key={link}
            className="p-4 rounded-lg cursor-pointer filter drop-shadow-lg transition duration-300 ease-in-out hover:hover:scale-105 hover:p-2 custom-hover-shadow"
          >
            {link}
          </li>
        ))}
      </ul>
      <div onClick={handleClick} className="block md:hidden cursor-pointer">
          {!isOpen ? <AiOutlineClose size={20}/> : <HiMenu size={20}/>}
      </div>
      <div className={!isOpen ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
      <h1 className="w-full font-bold text-[#00df9a] text-3xl m-4">React.</h1>
        <ul className="uppercase p-4">
          {NavLinks.map((link) => (
            <li
              key={link}
              className=" border-b border-gray-600 w-[55%] pl-4 p-4  rounded-lg cursor-pointer filter drop-shadow-lg transition duration-300 ease-in-out hover:hover:scale-105 hover:pl-12 custom-hover-shadow"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
