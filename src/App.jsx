import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import AboutUs from "./components/AboutUs";
import ScrollToTopButton from "./components/scrollTop/ScrollToTopButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../public/bg.webp";

function App() {
  return (
    <div className="bg-gradient-to-b  from-gray-900 via-gray-800 to-gray-950 min-h-screen ">
      {" "}
      {/* Animasyon sınıfı eklendi */}
      <NavBar />
      <main
        className="tstBera"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Home />
        <ScrollToTopButton />
        <AboutUs />
        <Photos />
        <Contact />
      </main>
    </div>
  );
}

export default App;
