import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const technologies = [
  {
    name: "Drone Crop Monitoring",
    description:
      "Use drones for aerial surveillance of crops, enabling early detection of issues and optimized resource allocation.",
    image:
      "https://cdn.wikifarmer.com/images/detailed/2024/02/Drones-in-Crop-Monitoring-and-Management-Uses-Types-Advantages-and-Limitations.jpg",
  },
  {
    name: "IoT Soil Sensors",
    description:
      "Wireless sensors that monitor soil moisture, temperature, and nutrient levels in real-time for precision farming.",
    image:
      "https://cdn.manxtechgroup.com/wp-content/uploads/2024/08/soil-monitoring-with-iot.jpg",
  },
  {
    name: "AI-Powered Irrigation",
    description:
      "Smart irrigation systems that use artificial intelligence to optimize water usage based on crop needs and weather conditions.",
    image:
      "https://cdn.wikifarmer.com/images/detailed/2024/02/Fig.4-Helicopter-Drones.jpg",
  },
];
const Technologies = () => {
  return (
    <section id="agriInnovations" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Agri-Tech Innovations
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge agricultural technologies that can
            revolutionize your farming practices and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <button className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to={"/recent-technologies"}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition duration-300"
          >
            Explore All Technologies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
