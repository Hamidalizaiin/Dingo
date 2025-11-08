import { motion } from "framer-motion";
import image from '../../../public/heroimage.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 text-white flex items-center">
      {/* Background Image */}
      <img
        src={image}
        alt="Facade Design"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2 text-left space-y-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Transform Your <span className="text-orange-500">Building Facade</span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-lg md:text-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Modern designs, durable materials, and expert installation for commercial and residential buildings.
          </motion.p>

          <motion.div
            className="flex space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Get a Quote
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Our Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Facade Highlight"
            className="rounded-xl shadow-2xl object-cover w-full h-96 md:h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
