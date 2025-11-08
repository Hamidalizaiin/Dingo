import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const usefulLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <footer className="bg-gray-900 text-gray-100 py-16 px-6 md:px-16 relative overflow-hidden">
      
      {/* Decorative Circle */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-2xl font-bold text-white">Dingo</h3>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Useful Links</h4>
          <ul className="space-y-2 text-gray-300">
            {usefulLinks.map((link, index) => (
              <li key={index} className="hover:text-orange-500 cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Address */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Contact</h4>
          <p className="text-gray-300">
            123 Modern Facade Street<br/>
            Sydney, NSW 2000<br/>
            Australia
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Phone:</span> +61 2 1234 5678
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Email:</span> contact@facadepro.com
          </p>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Newsletter</h4>
          <p className="text-gray-300">
            Subscribe to get updates on our latest projects and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Dingo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
