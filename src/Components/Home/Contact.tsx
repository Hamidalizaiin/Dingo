import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Get in <span className="text-orange-500">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        
        {/* Left: Contact Details */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-900">Our Office</h3>
          <p className="text-gray-900 text-lg md:text-xl font-medium leading-relaxed">
            123 Modern Facade Street<br/>
            Sydney, NSW 2000<br/>
            Australia
          </p>
          <p className="text-gray-900 text-lg md:text-xl font-medium">
            <span className="font-semibold">Phone:</span> +61 2 1234 5678
          </p>
          <p className="text-gray-900 text-lg md:text-xl font-medium">
            <span className="font-semibold">Email:</span> contact@dingo.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <form className="grid gap-6 bg-white p-8 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={5}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
