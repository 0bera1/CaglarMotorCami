import { motion } from 'framer-motion';
const AboutUs = () => {
  return (
    <section id='aboutUs' className="  py-16 px-4 md:px-8 lg:px-16 text-yellow-50"
>
      <div className="max-w-6xl mx-auto text-center">
        {/* Başlık Animasyonu */}
        <motion.h2
          className="text-3xl font-bold text-yellow-50 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Biz Kimiz?
        </motion.h2>

        {/* Açıklama Animasyonu */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Motor Camı Firması olarak, sektörde yılların verdiği tecrübeyle kaliteli, güvenilir ve estetik ürünler sunuyoruz. Müşterilerimizin araçlarına değer katacak en iyi cam çözümlerini sunma gayesiyle çalışıyoruz.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misyon Animasyonu */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Misyonumuz</h3>
          <p>
            Müşterilerimize yüksek kaliteli motor camı ürünleri sunarak güvenlik ve estetik ihtiyaçlarını karşılamak. Müşteri memnuniyetini her zaman ön planda tutarak sektörde güvenilir bir marka olmaya devam etmek.
          </p>
        </motion.div>

        {/* Vizyon Animasyonu */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Vizyonumuz</h3>
          <p>
            Yenilikçi çözümlerimiz ve üstün ürün kalitemizle sektörde öncü firma olmak. Güvenlik standartlarına uygun ve estetik açıdan mükemmel ürünler geliştirerek müşteri memnuniyetini en üst seviyeye çıkarmak.
          </p>
        </motion.div>
      </div>

      {/* Değerlerimiz Animasyonu */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Değerlerimiz</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-100">
          <motion.li
            className="bg-gray-900 p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <strong>Güvenilirlik:</strong> Müşterilerimize karşı her zaman şeffaf ve güvenilir bir yaklaşımla hareket ediyoruz.
          </motion.li>
          <motion.li
            className="bg-gray-900 p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <strong>Kalite:</strong> Ürünlerimizin yüksek kalite standartlarına uygun olmasına özen gösteriyoruz.
          </motion.li>
          <motion.li
            className="bg-gray-900 p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <strong>Yenilikçilik:</strong> Teknolojiyi takip ederek müşterilerimize modern çözümler sunuyoruz.
          </motion.li>
          <motion.li
            className="bg-gray-900 p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <strong>Müşteri Memnuniyeti:</strong> Müşterilerimizin ihtiyaçlarına yönelik çözümler üretmeyi önemsiyoruz.
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutUs;
