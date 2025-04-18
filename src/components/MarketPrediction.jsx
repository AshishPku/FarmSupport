import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
const marketTrends = [
  {
    crop: "Wheat",
    price: "₹2,150/quintal",
    trend: "up",
    change: "+3.2%",
  },
  {
    crop: "Rice",
    price: "₹1,950/quintal",
    trend: "up",
    change: "+2.5%",
  },
  {
    crop: "Maize",
    price: "₹1,680/quintal",
    trend: "down",
    change: "-1.3%",
  },
  {
    crop: "Soybean",
    price: "₹3,780/quintal",
    trend: "up",
    change: "+4.7%",
  },
];
const MarketPrediction = () => {
  const [activeMarketTrend, setActiveMarketTrend] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarketTrend((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="marketTrends" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Current Market Trends
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest market trends and make informed
            decisions about when to sell your crops for maximum profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Crop Price Trends
              </h3>
              <div className="space-y-4">
                {marketTrends.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                      activeMarketTrend === index
                        ? "bg-green-50 border-l-4 border-green-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{item.crop}</h4>
                      <p className="text-sm text-gray-500">Updated today</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        {item.price}
                      </p>
                      <p
                        className={`text-sm ${
                          item.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.trend === "up" ? "↑" : "↓"} {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                View all market prices <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Market Insights
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-medium text-blue-800">
                    Wheat Demand Forecast
                  </h4>
                  <p className="text-blue-700 mt-1">
                    Wheat prices expected to rise by 5-7% in the next month due
                    to increased export demand.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-medium text-purple-800">
                    Government MSP Update
                  </h4>
                  <p className="text-purple-700 mt-1">
                    New Minimum Support Price announced for kharif crops,
                    effective immediately.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-medium text-amber-800">
                    Supply Chain Alert
                  </h4>
                  <p className="text-amber-700 mt-1">
                    Transportation disruptions expected in Northern regions due
                    to weather conditions.
                  </p>
                </div>
              </div>
              <button className="mt-6 text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                Read more insights <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPrediction;
