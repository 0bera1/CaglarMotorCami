import { useState, useEffect } from "react";
import PhotosItem from "./PhotosItem";
import { motion } from "framer-motion";

const Photos = () => {
  const [cards, setCards] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState("all"); // Başlangıçta tüm galeriyi göster
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("/data/cardItems.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        selectedGallery === "all";
        setFilteredCards(data); // Başlangıçta tüm kartları göster
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleGalleryChange = (gallery) => {
    setSelectedGallery(gallery);
    if (gallery === "all") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter((card) => card.galeri === gallery));
    }
  };

  return (
    <section id="fotoğraflar" className="my-24 sm:my-48 px-4 sm:px-8">
      <div className="container mx-auto">
        {/* Başlık ve Dropdown menü animasyonları */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center my-4 sm:my-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-50 mb-4 sm:mb-0">
            Fotoğraflar
          </h1>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  text-yellow-400 hover:bg-gray-600-focus m-1 text-sm sm:text-base px-4 py-2"
            >
              Galeri Seç
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 sm:w-52 p-2 shadow-lg"
            >
              <li className="hover:text-yellow-400">
                <button onClick={() => handleGalleryChange("all")}>
                  Tümünü Göster
                </button>
              </li>
              <li className="hover:text-yellow-400">
                <button onClick={() => handleGalleryChange(1)}>Galeri 1</button>
              </li>
              <li className="hover:text-yellow-400">
                <button onClick={() => handleGalleryChange(2)}>Galeri 2</button>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Kartların animasyonu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="flex justify-center"
            >
              <PhotosItem
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
