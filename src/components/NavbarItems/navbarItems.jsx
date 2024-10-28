import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-scroll";

export const navItems = [
  {
    id: 1,
    text: "Anasayfa",
    to: "anasyfa",
  },
  {
    id: 2,
    text: "Fotoğraflar",
    to: "fotoğraflar",
  },
  {
    id: 3,
    text: "İletişim",
    to: "contact",
  },
  {
    id: 4,
    text: "Biz Kimiz ?",
    to: "aboutUs",
  },
];

export const NavbarItems = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 text-black">
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 shad">
          {navItems.map((item) => (
            <Link
              key={item.id}
              smooth={true}
              to={item.to}
              className="group relative text-gray-400 font-bold pr-3 m-2 cursor-pointer duration-300 hover:text-yellow-400"
            >
              <a href={`/${item.to}`} className="flex items-center">
                {item.text}
              </a>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="flex md:hidden">
        <button onClick={handleClick} className="text-3xl mr-5">
          {click ? <IoIosMenu /> : <IoIosMenu color="gray" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`flex flex-col items-center justify-center bg-gray-800 absolute top-0 right-0 h-screen w-64 transform ${
          click ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            smooth={true}
            to={item.to}
            className="text-white font-bold text-lg py-4 cursor-pointer duration-700 hover:text-gray-500"
            onClick={handleClick} // Menüyü kapatmak için
          >
            {item.text}
          </Link>
        ))}
        <button
          onClick={handleClick}
          className="text-white font-bold text-sm py-4 cursor-pointer duration-700 hover:text-gray-500"
        >
          Menuyu Kapat
        </button>
      </div>
    </div>
  );
};