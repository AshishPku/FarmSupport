import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Cloud,
  CloudRain,
  Leaf,
  Upload,
  Calendar,
  ChevronRight,
  BarChart,
  Zap,
  MapPin,
  TreePalm,
} from "lucide-react";
const features = [
  {
    title: "Agri-Tech Innovations",
    link: "agriInnovations",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    description:
      "Explore the latest agricultural technologies and learn how to implement them on your farm",
  },
  {
    title: "Soil Prediction",
    link: "soilPrection",
    icon: <TreePalm className="w-12 h-12 text-purple-600" />,
    description:
      "Analyze soil composition and receive detailed insights on fertility, pH levels, and nutrient content",
  },
  {
    title: "Today's Weather Forecast",
    link: "weather",
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    description:
      "Access real-time weather updates tailored for agricultural planning and decision making",
  },
  {
    title: "Crop Recommendations",
    link: "cropRecommendation",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    description:
      "Get personalized crop suggestions based on your soil type and local climate conditions",
  },
  {
    title: "Smart Farming Guidance",
    link: "smartFarming",
    icon: <Calendar className="w-12 h-12 text-orange-500" />,
    description:
      "Step-by-step guidance throughout the crop lifecycle with timely alerts and recommendations",
  },
  {
    title: "Identify Plant Diseases",
    link: "plantDiseases",
    icon: <Upload className="w-12 h-12 text-red-500" />,
    description:
      "Upload photos of plant issues and receive instant disease identification and treatment options",
  },
  {
    title: "Market Trends",
    link: "marketTrends",
    icon: <BarChart className="w-12 h-12 text-indigo-500" />,
    description:
      "Stay updated with current crop prices, demand patterns, and forecasted market trends",
  },
  {
    title: "Nearby Grain Merchants",
    link: "merchants",
    icon: <MapPin className="w-12 h-12 text-pink-500" />,
    description:
      "Find and connect with local grain merchants, suppliers, and buyers in your area",
  },
];
const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Smart Farming Guide
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FarmSupport equips farmers with essential tools for smarter
            agriculture. It delivers tailored crop recommendations based on soil
            and climate conditions, detects plant diseases using image analysis,
            and provides real-time weather updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.slice(0, 8).map((feature, index) => (
            <a
              href={`#${feature.link}`}
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 transform ${
                activeFeature === index
                  ? "scale-105 border-2 border-green-500"
                  : "hover:scale-105"
              }`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
