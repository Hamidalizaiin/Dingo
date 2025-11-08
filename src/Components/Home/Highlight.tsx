import { motion } from "framer-motion";
import highlightImage from "../../../public/team.jpeg"; // Replace with your image

const highlights = [
    {
        icon: "🏆",
        title: "Expert Team",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.",
        description2:
            "Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.",
    },
    {
        icon: "⏱️",
        title: "On-Time Delivery",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.",
        description2:
            "Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.",
    },
    {
        icon: "💡",
        title: "Innovative Design",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.",
        description2:
            "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
        icon: "🛠️",
        title: "Durable Materials",
        description1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.",
        description2:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    },
];

const HighlightsSection = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

                {/* First Container: Text */}
                <motion.div
                    className="space-y-6 max-w-6xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Why Choose <span className="text-orange-500">Us</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.  In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper.
                    </p>

                    <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        Learn More
                    </button>
                </motion.div>

                {/* Second Container: Cards + Image */}
                <motion.div
                    className="flex flex-col md:flex-row gap-12 items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Left: Image */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={highlightImage}
                            alt="Facade Highlight"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Cards */}
                    {/* Right: Cards - Responsive Grid */}
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <div className="text-5xl mb-4 text-orange-400">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                                <p className="text-black mb-2">{item.description1}</p>
                                <p className="text-black">{item.description2}</p>

                                {/* Decorative Shape */}
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full opacity-20 mix-blend-multiply animate-pulse"></div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default HighlightsSection;
