import { useEffect } from "react";
import { NavbarItems } from "../components/NavbarItems/navbarItems"
import SearchBar from "./SearchBar"
import { motion, useAnimation } from "framer-motion"

const NavBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      // önce opacity'yi değiştir.
      controls
        .start({
          opacity: 0,
          transition: { duration: 1 }
        })
        .then(() => {
          // Sonra opacity'yi geri al.
          controls.start({
            opacity: 1,
            transition: { duration: 1 }
          });
        });
    }
      , 2000);
    return () => clearInterval(interval);
  }, [controls]);

  const handleSearch = (query) => {
    console.log("Arama sorgusu: ", query); // Arama sorgusunu kullanabilirsiniz
  };
  return (
    <>
      <div className="navbar bg-base-200 ">
        <div className="navbar-start">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
          </svg>
          {/* Logo */}
          <a className="btn btn-ghost text-xl">Logo</a>
        </div>
        <div className="navbar-center z-30">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="navbar-end"
          style={{ zIndex: 1 }}>

          <NavbarItems />
        </div>
      </div>
      {/* Telefon numarası kısmı */}
      {/* <div className="text-center bg-base-200 ">
        <a href="tel:+1234567890" className="text-blue-500 hover:underline animate-slide">
          +12 345 678 90
        </a>
      </div> */}
      <div className="  text-center bg-base-200 relative  after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer">
        <motion.a
          href="tel:+905317771863"
          className="text-slate-900 text-lg  font-extralight"
          style={{ zIndex: -1 }}
          initial={{ opacity: 0 }} // Sağdan başlar
          animate={controls}
          transition={{ duration: 0.5 }} // Animasyon süresi
        >
          +90 (531) 777 18 63
        </motion.a>
      </div>
    </>
  )
}

export default NavBar

