import { useEffect } from "react";
import { NavbarItems } from "../components/NavbarItems/navbarItems";
import SearchBar from "./SearchBar";
import { motion, useAnimation } from "framer-motion";
import { FaMotorcycle } from "react-icons/fa"; // Motor simgesi
import { BsFillTelephoneFill } from "react-icons/bs"; // Telefon simgesi

const NavBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  const handleSearch = (query) => {
    console.log("Arama sorgusu: ", query);
  };

  return (
    <>
      <div className="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg relative">
        <div className="navbar-start flex items-center">
          <FaMotorcycle className="h-8 w-8 text-yellow-400 animate-bounce mt-2 ml-4" /> {/* Motor simgesi */}
          <a className="btn bg-transparent ml-4 text-yellow-400 text-xl rounded-full hover:bg-yellow-400 hover:text-white shadow-lg transition duration-300">
            Logo
          </a>
        </div>
        <div className="navbar-center z-30">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="navbar-end" style={{ zIndex: 1 }}>
          <NavbarItems />
        </div>
      </div>
      <div className="text-center bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-900 relative after:bg-yellow-400 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer">
        <motion.a
          href="tel: +905317771863"
          className="flex items-center justify-center text-yellow-400 text-xl shadow-lg font-thin transition-transform transform hover:scale-110"
          style={{ zIndex: -1 }}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <BsFillTelephoneFill className="mr-2" /> {/* Telefon simgesi */}
          Tel: +90 (531) 777 18 63
        </motion.a>
      </div>
    </>
  );
};

export default NavBar;
