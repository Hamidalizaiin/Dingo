import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", comment: "Amazing facade design! Professional and timely delivery.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jane Smith", comment: "Our building looks modern and sleek. Highly recommended!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Brown", comment: "Top-notch service and excellent quality materials.", img: "https://randomuser.me/api/portraits/men/65.jpg" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        What Our Clients <span className="text-orange-500">Say</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="relative bg-gray-800 p-6 rounded-2xl shadow-lg text-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className="relative mx-auto w-24 h-24 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full rounded-full object-cover border-4 border-orange-500"
              />
              {/* Small decorative circle */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full opacity-50 animate-pulse"></div>
            </div>
            <p className="text-gray-300 mb-4">"{t.comment}"</p>
            <h4 className="font-semibold text-white">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
