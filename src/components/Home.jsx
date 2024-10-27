import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import b1 from "../assets/sliderImg/b1.jpg";
import b2 from "../assets/sliderImg/b2.jpg";
import b3 from "../assets/sliderImg/b3.jpg";
import b4 from "../assets/sliderImg/b4.jpg";
import b6 from "../assets/sliderImg/b6.jpg";
import { TbBackground } from "react-icons/tb";

const sliderImages = [b1, b2, b3, b4, b6];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: false,
    cssEase: "ease-in-out",
    dotsClass: "slick-dots flex justify-center mt-5 sm:mt-20", // Dots spacing for mobile and desktop

  };

  return (
    <div className="relative h-screen w-full bg-transparent">
      {/* Slider Component */}
      <Slider {...settings} className="absolute inset-0 bg-transparent max-h-dvh">
        {sliderImages.map((img, index) => (
          <div key={index} className="flex items-center justify-center bg-transparent max-h-dvh">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover bg-transparent"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="hero-overlay  text-neutral-content text-center absolute inset-0 flex items-center justify-center">
        <div className="items-center justify-center w-11/12 sm:w-auto max-w-2xl mx-auto p-4 sm:p-8 rounded-lg shadow-2xl shadow-black backdrop-blur-md border border-gray-300/30">
          <h1 className="mb-3 sm:mb-5 text-2xl sm:text-5xl font-light text-white">
            Çağlar Motor Camı
          </h1>
          <p className="mb-3 sm:mb-5 text-xs sm:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link to="contact" smooth={true} duration={1100}>
            <button className="btn hover:bg-yellow-400 hover:text-black border-0 text-yellow-400 text-xs sm:text-base">
              İletişime geç
            </button>
          </Link>

          {/* Social Media Icons */}
          <div className="mt-4 sm:mt-8 flex items-center justify-center space-x-3 sm:space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-lg sm:text-2xl hover:text-blue-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-lg sm:text-2xl hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-lg sm:text-2xl hover:text-pink-800" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-lg sm:text-2xl hover:text-blue-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;