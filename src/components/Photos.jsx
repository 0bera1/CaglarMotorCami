// Photos.js
import { useState, useEffect } from "react";
import PhotosItem from "./PhotosItem";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import { div } from "framer-motion/client";

const Photos = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedOther, setSelectedOther] = useState(null); // Modal için seçilen "other" değeri, başlangıçta null

  useEffect(() => {
    fetch("/data/cardItems.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data); // Başlangıçta tüm kartları göster
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleGalleryChange = (gallery) => {
    setFilteredCards(gallery === "all" ? cards : cards.filter((card) => card.galeri === gallery));
  };

  const handleSearch = (query) => {
    const searchResults = query === ""
      ? cards
      : cards.filter((card) =>
          card.title.toLowerCase().includes(query.toLowerCase()) ||
          card.description.toLowerCase().includes(query.toLowerCase())
        );
    setFilteredCards(searchResults);
  };

  const handleButtonClick = (other) => {
    setSelectedOther(other || []); // "other" boşsa boş dizi olarak ayarla
  };

  const closeModal = () => {
    setSelectedOther(null); // Modalı kapat
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
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-50 mb-4 sm:mb-0">Fotoğraflar</h1>
          <div className="flex flex-row gap-5">
            <SearchBar onSearch={handleSearch} />
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn text-yellow-400 hover:bg-gray-600-focus text-sm sm:text-base px-4 py-2"
              >
                Galeri Seç
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 sm:w-52 p-2 shadow-lg">
                <li className="hover:text-yellow-400"><button onClick={() => handleGalleryChange("all")}>Tümünü Göster</button></li>
                <li className="hover:text-yellow-400"><button onClick={() => handleGalleryChange(1)}>Galeri 1</button></li>
                <li className="hover:text-yellow-400"><button onClick={() => handleGalleryChange(2)}>Galeri 2</button></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Kartların animasyonu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <PhotosItem
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                onClick={() => handleButtonClick(card.other)} // Buton tıklama işleyicisi
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOther !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 shadow-2xl flex justify-center items-center z-50">
          <div className="bg-gray-950 p-5 rounded-3xl w-auto lg:max-w-4xl lg:min-h-min max-h-full sm:max-h-[520px]">
            <h2 className="text-2xl font-bold mb-4">Detaylı Bilgi</h2>
            {selectedOther.length > 0 ? (
              <div className="flex  flex-wrap gap-4 justify-center">
                
                {selectedOther.map((otherItem, index) => (
                  <img
                    key={index}
                    src={otherItem}
                    alt={`Other Content ${index + 1}`}
                    className={`mb-4 ${selectedOther.length > 1 ? "w-auto max-h-56" : "w-full h-auto"}`}
                  />
                ))}
              </div>
            ) : (
              <div className="lg:w-56 lg:h-20 items-center p-5  justify-center">
              <p className="text-white text-center">Detay yok</p>
              </div>
            )}
            <button onClick={closeModal} className="btn text-yellow-400">Kapat</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;