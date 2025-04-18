import React, { useState } from "react";
import {
  Droplets,
  Sun,
  Leaf,
  Filter,
  ShieldCheck,
  TrendingUp,
  Calendar,
  ArrowRight,
  PanelRightOpen,
  PanelRightClose,
  Sprout,
} from "lucide-react";

const CropRecommendationsPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSoil, setSelectedSoil] = useState("loamy");
  const [selectedSeason, setSelectedSeason] = useState("summer");
  const [filteredCrops, setFilteredCrops] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Crop icons mapping
  const cropIcons = {
    Tomatoes: <Sprout className="text-red-500" />,
    "Sweet Corn": <Sprout className="text-yellow-500" />,
    "Bell Peppers": <Sprout className="text-red-400" />,
    Spinach: <Sprout className="text-green-600" />,
    Cauliflower: <Sprout className="text-gray-100" />,
    Rice: <Sprout className="text-yellow-200" />,
    Okra: <Sprout className="text-green-400" />,
    Eggplant: <Sprout className="text-purple-600" />,
    Cabbage: <Sprout className="text-green-300" />,
    Kale: <Sprout className="text-green-700" />,
    Taro: <Sprout className="text-purple-300" />,
    Watermelon: <Sprout className="text-pink-500" />,
    "Sweet Potatoes": <Sprout className="text-orange-500" />,
    Carrots: <Sprout className="text-orange-400" />,
    Radishes: <Sprout className="text-red-300" />,
    Peanuts: <Sprout className="text-yellow-600" />,
    Cowpeas: <Sprout className="text-green-200" />,
  };

  // Sample crop recommendation data
  const cropData = {
    loamy: {
      summer: [
        {
          name: "Tomatoes",
          waterNeeds: 75,
          sunNeeds: 90,
          growthDays: 80,
          profit: 85,
          resistance: 70,
          description:
            "Heat-tolerant variety with excellent disease resistance and high market value.",
        },
        {
          name: "Sweet Corn",
          waterNeeds: 65,
          sunNeeds: 85,
          growthDays: 70,
          profit: 75,
          resistance: 80,
          description:
            "Early maturing variety that performs well in warm temperatures.",
        },
        {
          name: "Bell Peppers",
          waterNeeds: 70,
          sunNeeds: 80,
          growthDays: 75,
          profit: 80,
          resistance: 65,
          description:
            "Colorful variety with premium market potential and consistent yields.",
        },
      ],
      winter: [
        {
          name: "Spinach",
          waterNeeds: 60,
          sunNeeds: 50,
          growthDays: 45,
          profit: 70,
          resistance: 85,
          description:
            "Cold-hardy variety with exceptional nutrient content and quick harvest.",
        },
        {
          name: "Cauliflower",
          waterNeeds: 65,
          sunNeeds: 60,
          growthDays: 85,
          profit: 75,
          resistance: 60,
          description:
            "Premium variety with excellent curd formation and frost tolerance.",
        },
      ],
      monsoon: [
        {
          name: "Rice",
          waterNeeds: 90,
          sunNeeds: 75,
          growthDays: 120,
          profit: 65,
          resistance: 75,
          description:
            "Flood-tolerant variety with good yield potential in high rainfall.",
        },
        {
          name: "Okra",
          waterNeeds: 75,
          sunNeeds: 80,
          growthDays: 60,
          profit: 70,
          resistance: 65,
          description:
            "High-yielding variety that thrives in humid conditions with good disease resistance.",
        },
      ],
    },
    clayey: {
      summer: [
        {
          name: "Eggplant",
          waterNeeds: 70,
          sunNeeds: 85,
          growthDays: 75,
          profit: 75,
          resistance: 70,
          description:
            "Heat-loving variety with excellent performance in heavy soils.",
        },
        {
          name: "Okra",
          waterNeeds: 65,
          sunNeeds: 90,
          growthDays: 55,
          profit: 70,
          resistance: 60,
          description:
            "Fast-growing variety that performs well in clay with good drainage.",
        },
      ],
      winter: [
        {
          name: "Cabbage",
          waterNeeds: 60,
          sunNeeds: 55,
          growthDays: 90,
          profit: 60,
          resistance: 80,
          description:
            "Cold-tolerant variety with excellent storage potential and market demand.",
        },
        {
          name: "Kale",
          waterNeeds: 55,
          sunNeeds: 65,
          growthDays: 60,
          profit: 65,
          resistance: 85,
          description:
            "Frost-hardy variety with exceptional nutrient content and multiple harvests.",
        },
      ],
      monsoon: [
        {
          name: "Rice",
          waterNeeds: 95,
          sunNeeds: 70,
          growthDays: 125,
          profit: 70,
          resistance: 80,
          description:
            "Water-loving variety bred specifically for clay soils with excellent yields.",
        },
        {
          name: "Taro",
          waterNeeds: 85,
          sunNeeds: 65,
          growthDays: 180,
          profit: 75,
          resistance: 90,
          description:
            "Water-tolerant root crop with excellent performance in waterlogged clay soils.",
        },
      ],
    },
    sandy: {
      summer: [
        {
          name: "Watermelon",
          waterNeeds: 80,
          sunNeeds: 95,
          growthDays: 90,
          profit: 85,
          resistance: 60,
          description:
            "Heat-loving variety with deep root system ideal for sandy soils.",
        },
        {
          name: "Sweet Potatoes",
          waterNeeds: 60,
          sunNeeds: 85,
          growthDays: 120,
          profit: 75,
          resistance: 85,
          description:
            "Drought-tolerant variety with excellent performance in loose, sandy soil.",
        },
      ],
      winter: [
        {
          name: "Carrots",
          waterNeeds: 55,
          sunNeeds: 70,
          growthDays: 75,
          profit: 65,
          resistance: 75,
          description:
            "Cool-season root crop that develops excellent shape and color in sandy soils.",
        },
        {
          name: "Radishes",
          waterNeeds: 50,
          sunNeeds: 60,
          growthDays: 30,
          profit: 55,
          resistance: 80,
          description:
            "Quick-growing variety with crisp texture and excellent marketability.",
        },
      ],
      monsoon: [
        {
          name: "Peanuts",
          waterNeeds: 65,
          sunNeeds: 80,
          growthDays: 140,
          profit: 80,
          resistance: 70,
          description:
            "Nitrogen-fixing legume that improves soil while providing valuable harvest.",
        },
        {
          name: "Cowpeas",
          waterNeeds: 60,
          sunNeeds: 75,
          growthDays: 70,
          profit: 60,
          resistance: 85,
          description:
            "Drought-tolerant legume that improves sandy soil and provides protein-rich harvest.",
        },
      ],
    },
  };

  const filterCrops = () => {
    setIsLoading(true);
    setTimeout(() => {
      const crops = cropData[selectedSoil][selectedSeason];
      setFilteredCrops(crops);
      setIsLoading(false);
    }, 800); // Simulate API delay
  };

  const getPropertyColor = (value) => {
    if (!value && value !== 0) return "bg-gray-300";
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-green-400";
    if (value >= 40) return "bg-yellow-400";
    return "bg-red-400";
  };

  const getSeasonMonths = () => {
    switch (selectedSeason) {
      case "summer":
        return ["Mar", "Apr", "May", "Jun"];
      case "monsoon":
        return ["Jun", "Jul", "Aug", "Sep"];
      case "winter":
        return ["Oct", "Nov", "Dec", "Jan"];
      default:
        return [];
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-64 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-yellow-600 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-yellow-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-amber-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800">
              Smart Crop Recommendations
            </h2>
          </div>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            AI-powered crop suggestions tailored to your soil and climate
            conditions
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200">
          {/* Header section */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Find Your Ideal Crops
                </h3>
                <p className="opacity-90">
                  Our intelligent system analyzes soil conditions, seasonal
                  patterns, and market trends to recommend the best crops for
                  your farm.
                </p>
                <div className="flex items-center mt-4 text-sm opacity-80">
                  <ShieldCheck className="h-5 w-5 mr-1" />
                  <span>Based on agricultural research data</span>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1 opacity-90">
                      Soil Type
                    </label>
                    <select
                      className="w-full p-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white"
                      value={selectedSoil}
                      onChange={(e) => setSelectedSoil(e.target.value)}
                    >
                      <option value="loamy">Loamy</option>
                      <option value="clayey">Clayey</option>
                      <option value="sandy">Sandy</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1 opacity-90">
                      Season
                    </label>
                    <select
                      className="w-full p-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white"
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                    >
                      <option value="summer">Summer</option>
                      <option value="winter">Winter</option>
                      <option value="monsoon">Monsoon</option>
                    </select>
                  </div>
                </div>
                <button
                  className="w-full py-2 bg-white text-amber-700 rounded-lg font-medium flex items-center justify-center hover:bg-amber-50 transition-colors"
                  onClick={filterCrops}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-amber-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Filter className="h-4 w-4 mr-2" />
                      Get Recommendations
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results section */}
          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
              </div>
            ) : filteredCrops ? (
              <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-amber-800">
                    Recommended Crops for{" "}
                    {selectedSoil.charAt(0).toUpperCase() +
                      selectedSoil.slice(1)}{" "}
                    Soil in{" "}
                    {selectedSeason.charAt(0).toUpperCase() +
                      selectedSeason.slice(1)}
                  </h4>
                  <button
                    className="p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
                    onClick={() => setExpanded(!expanded)}
                    aria-label={
                      expanded ? "Collapse details" : "Expand details"
                    }
                  >
                    {expanded ? (
                      <PanelRightClose className="h-5 w-5" />
                    ) : (
                      <PanelRightOpen className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {filteredCrops.map((crop, index) => (
                    <div
                      key={index}
                      className="border border-amber-200 rounded-lg overflow-hidden bg-gradient-to-r from-amber-50 to-white hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Left section - always visible */}
                        <div className="p-5 md:w-1/3">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              {cropIcons[crop.name] || (
                                <Sprout className="text-amber-600" />
                              )}
                            </div>
                            <h5 className="text-xl font-semibold text-amber-900">
                              {crop.name}
                            </h5>
                          </div>

                          <p className="text-gray-600 text-sm mb-4">
                            {crop.description}
                          </p>

                          <div className="bg-amber-100 p-3 rounded-lg text-amber-800 text-sm">
                            <div className="flex items-center mb-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Growth period: {crop.growthDays} days</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              <span>Profit potential: {crop.profit}/100</span>
                            </div>
                          </div>
                        </div>

                        {/* Right section - expanded view */}
                        <div
                          className={`${
                            expanded ? "block" : "hidden md:block"
                          } md:flex-1 p-5 bg-white border-l border-amber-100`}
                        >
                          <h6 className="font-medium text-gray-700 mb-3">
                            Crop Requirements & Benefits
                          </h6>

                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 flex items-center">
                                  <Droplets className="h-4 w-4 text-blue-500 mr-1" />
                                  Water Needs
                                </span>
                                <span className="font-medium">
                                  {crop.waterNeeds}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getPropertyColor(
                                    crop.waterNeeds
                                  )}`}
                                  style={{ width: `${crop.waterNeeds}%` }}
                                ></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 flex items-center">
                                  <Sun className="h-4 w-4 text-yellow-500 mr-1" />
                                  Sunlight
                                </span>
                                <span className="font-medium">
                                  {crop.sunNeeds}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getPropertyColor(
                                    crop.sunNeeds
                                  )}`}
                                  style={{ width: `${crop.sunNeeds}%` }}
                                ></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 flex items-center">
                                  <ShieldCheck className="h-4 w-4 text-purple-500 mr-1" />
                                  Pest Resistance
                                </span>
                                <span className="font-medium">
                                  {crop.resistance}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getPropertyColor(
                                    crop.resistance
                                  )}`}
                                  style={{ width: `${crop.resistance}%` }}
                                ></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600 flex items-center">
                                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                  Profit Potential
                                </span>
                                <span className="font-medium">
                                  {crop.profit}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getPropertyColor(
                                    crop.profit
                                  )}`}
                                  style={{ width: `${crop.profit}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Planting Calendar */}
                <div className="mt-8 p-5 bg-amber-50 rounded-lg border border-amber-200">
                  <h4 className="text-lg font-medium text-amber-800 mb-3">
                    Planting Calendar
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Optimal planting time for these recommended crops in your
                    region:
                  </p>

                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      <div className="grid grid-cols-12 gap-1 mb-2">
                        {[
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ].map((month) => (
                          <div
                            key={month}
                            className="text-xs font-medium text-gray-500 text-center"
                          >
                            {month}
                          </div>
                        ))}
                      </div>

                      {filteredCrops.map((crop, index) => {
                        const seasonMonths = getSeasonMonths();
                        return (
                          <div key={index} className="mb-2">
                            <div className="text-sm font-medium mb-1 flex items-center">
                              {cropIcons[crop.name] || (
                                <Sprout className="h-4 w-4 mr-1 text-amber-600" />
                              )}
                              {crop.name}
                            </div>
                            <div className="grid grid-cols-12 gap-1 h-6">
                              {[
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec",
                              ].map((month, i) => {
                                const isPeak = seasonMonths.includes(month);
                                const isSecondary =
                                  month === seasonMonths[0] ||
                                  month ===
                                    seasonMonths[seasonMonths.length - 1];
                                return (
                                  <div
                                    key={i}
                                    className={`${
                                      isPeak
                                        ? "bg-amber-500"
                                        : isSecondary
                                        ? "bg-amber-300"
                                        : "bg-gray-200"
                                    } ${
                                      i === 0
                                        ? "rounded-l-full"
                                        : i === 11
                                        ? "rounded-r-full"
                                        : ""
                                    }`}
                                  ></div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}

                      <div className="flex items-center justify-end mt-3 text-xs text-gray-600">
                        <div className="flex items-center mr-3">
                          <div className="w-3 h-3 bg-amber-500 rounded-sm mr-1"></div>
                          <span>Peak planting</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-amber-300 rounded-sm mr-1"></div>
                          <span>Secondary planting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-10 w-10 text-amber-500" />
                </div>
                <h4 className="text-xl font-medium text-amber-800 mb-2">
                  Ready to Find Your Ideal Crops?
                </h4>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Select your soil type and current season above to get
                  personalized crop recommendations for your farm.
                </p>
                <button
                  className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
                  onClick={filterCrops}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-amber-50 px-6 py-4 text-center text-sm text-gray-600 border-t border-amber-100">
            <p>
              Recommendations are based on local climate data and agricultural
              research.
            </p>
            <button className="text-amber-600 font-medium hover:underline flex items-center mx-auto mt-1">
              Get detailed planting guides
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CropRecommendationsPage;
