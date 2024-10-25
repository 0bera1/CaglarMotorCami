import MapContainer from "../map/MapContainer";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi.");
  };
  return (
    <section
      id="contact"
      className=" bg-opacity-90 text-white py-10 px-4 lg:px-10"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:space-x-8">
        <motion.div
          className="flex-1 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="mb-1">Çağlar Motor Camı</p>
          <p className="mb-4">Adres: Filiz Sk. No:9, 35330 Balçova/İzmir</p>
          <a
            className="text-sm lg:text-base relative text-blue-500 font-extralight after:bg-blue-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer"
            href="tel:+905317771863"
          >
            Telefon: +90 (531) 777 18 63
          </a>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Bize Ulaşın</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Adınız"
              className="input input-bordered w-full text-gray-50"
            />
            <input
              type="email"
              placeholder="Email Adresiniz"
              className="input input-bordered w-full text-gray-50"
            />
            <textarea
              placeholder="Mesajınız"
              className="textarea textarea-bordered w-full h-32 text-gray-50"
            ></textarea>
            <button
              className="btn border-0 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full"
              type="submit"
              onClick={handleSubmit}
            >
              Gönder
            </button>
          </form>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-64 sm:h-80 lg:h-96 ">
            {" "}
            {/* Responsive height ayarı */}
            <MapContainer />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
