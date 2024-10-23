import { useState, useEffect } from "react";
import PhotosItem from "./PhotosItem";

const Photos = () => {
  const [cards, setCards] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(1); // Başlangıçta 1. galeri seçili
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // JSON dosyasından verileri çek
    fetch("/data/cardItems.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data.filter(card => card.galeri === selectedGallery)); // Başlangıçta filtrele
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Galeri değiştiğinde filtreleme işlemi
  const handleGalleryChange = (gallery) => {
    setSelectedGallery(gallery);
    if (gallery === "all") {
      setFilteredCards(cards); // Tüm kartları göster
    } else {
      setFilteredCards(cards.filter(card => card.galeri === gallery)); // Seçilen galeriyi filtrele
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">Photos</h1>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-primary text-white hover:bg-primary-focus m-1"
          >
            Galeri Seç
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg"
          >
            <li>
              <button onClick={() => handleGalleryChange("all")}>Tümünü Göster</button>
            </li>
            <li>
              <button onClick={() => handleGalleryChange(1)}>Galeri 1</button>
            </li>
            <li>
              <button onClick={() => handleGalleryChange(2)}>Galeri 2</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 ">
        {filteredCards.map((card) => (
          <PhotosItem
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
