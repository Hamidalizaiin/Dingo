import { useState, useEffect } from "react";
import logo from '../../public/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24
      ">
        <img src={logo} alt="Dingo Logo" className="w-20 " />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`font-semibold hover:text-orange-500 ${active === link.id ? "text-orange-500 border-b-2 border-orange-500" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-orange-500 mb-1 transition-all duration-300" style={{ transform: isOpen ? "rotate(45deg) translateY(8px)" : "none" }}></span>
            <span className="block w-6 h-0.5 bg-orange-500 mb-1 transition-all duration-300" style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span className="block w-6 h-0.5 bg-orange-500 transition-all duration-300" style={{ transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              setIsOpen(false);
              setActive(link.id);
            }}
            className={`block px-4 py-3 hover:bg-orange-50 ${active === link.id ? "text-orange-500 font-semibold" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
