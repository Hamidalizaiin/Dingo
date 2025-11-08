import { motion } from "framer-motion";
import aboutImage from "../../../public/about.jpeg"; // Replace with your image

const About = () => {
  return (
    <section className="py-20 bg-gray-50 flex flex-col md:flex-row items-center px-6 md:px-16">
      
      {/* Image */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="md:w-1/2 md:pl-12 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          About <span className="text-orange-500">Us</span>
        </h2>
        <p className="text-gray-700 text-lg">
          We specialize in designing and installing modern facades for commercial and residential buildings. Our team uses high-quality materials and latest technology to ensure durability and elegance.
        </p>
        <p className="text-gray-700 text-lg">
          With years of experience and hundreds of projects completed, we are your trusted partner in transforming your building’s exterior.
        </p>
        <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default About;
