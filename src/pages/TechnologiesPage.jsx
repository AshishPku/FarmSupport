import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const allTechnologies = [
  {
    name: "Drone Crop Monitoring",
    description:
      "Use drones for aerial surveillance of crops, enabling early detection of issues and optimized resource allocation.",
    detailedDescription:
      "Our drone technology provides high-resolution aerial imagery that helps farmers monitor crop health, identify pest infestations, and assess irrigation needs. The drones are equipped with multispectral sensors that can detect plant stress before it's visible to the naked eye, allowing for timely interventions.",
    image:
      "https://cdn.wikifarmer.com/images/detailed/2024/02/Drones-in-Crop-Monitoring-and-Management-Uses-Types-Advantages-and-Limitations.jpg",
    benefits: [
      "Early detection of crop diseases",
      "Precision application of fertilizers and pesticides",
      "Time-saving compared to manual scouting",
      "Improved yield estimation accuracy",
    ],
    specifications: {
      "Coverage Capacity": "Up to 100 acres per flight",
      "Battery Life": "30 minutes per charge",
      "Sensor Types": "RGB, Multispectral, Thermal",
    },
  },
  {
    name: "IoT Soil Sensors",
    description:
      "Wireless sensors that monitor soil moisture, temperature, and nutrient levels in real-time for precision farming.",
    detailedDescription:
      "Our IoT soil sensor network provides continuous monitoring of soil conditions at multiple depths. The system sends real-time data to your smartphone or computer, allowing you to make data-driven decisions about irrigation and fertilization. The sensors are weatherproof and require minimal maintenance.",
    image: "https://www.renkeer.com/wp-content/uploads/2021/06/soil.jpg",
    benefits: [
      "Real-time soil condition monitoring",
      "Reduced water usage through precise irrigation",
      "Optimized fertilizer application",
      "Historical data tracking for better decision making",
    ],
    specifications: {
      "Measurement Parameters": "Moisture, Temperature, NPK levels, pH",
      "Wireless Range": "Up to 1km (line of sight)",
      "Battery Life": "2 years (replaceable)",
      "Data Frequency": "Configurable from 15 mins to 24 hours",
    },
  },
  {
    name: "AI-Powered Irrigation",
    description:
      "Smart irrigation systems that use artificial intelligence to optimize water usage based on crop needs and weather conditions.",
    detailedDescription:
      "Our AI-powered irrigation system combines weather forecasts, soil moisture data, and plant growth models to create the optimal irrigation schedule. The system learns from your specific field conditions over time, continuously improving its recommendations to maximize water efficiency while maintaining crop health.",
    image:
      "https://cdn.wikifarmer.com/images/detailed/2024/02/Fig.4-Helicopter-Drones.jpg",
    benefits: [
      "Water savings of up to 30%",
      "Automated scheduling based on real conditions",
      "Integration with existing irrigation systems",
      "Drought prediction and mitigation",
    ],
    specifications: {
      Compatibility: "Works with drip, sprinkler, and pivot systems",
      "Weather Integration": "Supports multiple forecast services",
      "Control Options": "App, web, and voice control",
      "Learning Algorithm": "Adaptive machine learning model",
    },
  },
  {
    name: "Automated Harvesting Robots",
    description:
      "Robotic systems that can identify and harvest ripe produce with minimal damage to plants.",
    detailedDescription:
      "Our harvesting robots use advanced computer vision to identify ripe fruits and vegetables, then carefully pick them without damaging the plant. The robots work 24/7 and can significantly reduce labor costs during peak harvest seasons while improving consistency and quality of picked produce.",
    image:
      "https://www.lablynx.com/wp-content/uploads/2022/11/Automation-in-Farming.jpeg",
    benefits: [
      "24/7 harvesting capability",
      "Reduced labor costs",
      "Gentler handling of produce",
      "Consistent quality selection",
    ],
    specifications: {
      "Crop Types": "Tomatoes, strawberries, peppers, cucumbers",
      "Operating Speed": "Up to 8,000 picks per hour",
      "Power Source": "Electric (8 hour battery life)",
      "AI Vision": "RGB-D cameras with fruit ripeness detection",
    },
  },
  {
    name: "Vertical Farming Systems",
    description:
      "Compact, controlled-environment agriculture solutions for urban settings or limited spaces.",
    detailedDescription:
      "Our vertical farming systems allow you to grow crops in stacked layers with precisely controlled lighting, nutrients, and climate conditions. These systems use up to 95% less water than traditional farming and can be implemented in urban environments, bringing fresh produce closer to consumers.",
    image:
      "https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/517ce9c1-4e39-46b0-b152-796383cb6b6d/eden-green-vertical-farm-facility.jpg?format=2500w",
    benefits: [
      "Year-round production",
      "Dramatic water savings",
      "No pesticides required",
      "Local production reduces transport costs",
    ],
    specifications: {
      "System Types": "Hydroponic, Aeroponic, Aquaponic",
      Footprint: "Modular units from 10 sq.ft to industrial scale",
      "Crop Varieties": "Leafy greens, herbs, microgreens, strawberries",
      "Automation Level": "Fully automated nutrient and climate control",
    },
  },
];

const TechnologiesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Agricultural Technologies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive suite of agricultural technologies designed
          to optimize every aspect of modern farming operations.
        </p>
      </div>

      <div className="grid gap-12">
        {allTechnologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:w-1/3">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tech.name}
              </h2>
              <p className="text-gray-700 mb-6">{tech.detailedDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    Specifications
                  </h3>
                  <ul className="space-y-2">
                    {Object.entries(tech.specifications).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="text-gray-600 font-medium">
                          {key}:
                        </span>
                        <span className="text-gray-900">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Request Demo
                </button>
                <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                  Download Brochure
                </button>
                <button className="px-6 py-2 text-gray-700 hover:text-green-600 transition flex items-center">
                  Case Studies <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to modernize your farming operation?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          Contact Our Experts
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default TechnologiesPage;
