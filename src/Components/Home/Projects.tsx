import { motion } from "framer-motion";
import projectImage from "../../../public/luxurybuilding.avif"; // Replace with your image

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-orange-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Creative Image */}
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-96 md:h-[500px]">
            {/* Main Image */}
            <img
              src={projectImage}
              alt="Project Highlight"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Creative Gradient Circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full opacity-30 mix-blend-multiply animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full opacity-30 mix-blend-multiply animate-pulse"></div>
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Right: Text Container */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
          </p>
          <p className="text-gray-700 text-lg md:text-xl">
            In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.
          </p>
          <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            See More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
