import React from "react";
import { MapPin } from "lucide-react";
const merchants = [
  {
    name: "Agrinet Supplies",
    distance: "3.2 km",
    rating: 4.7,
    specialty: "Wheat, Rice, Pulses",
  },
  {
    name: "Kisaan Merchants",
    distance: "5.8 km",
    rating: 4.5,
    specialty: "Organic Produce, Maize",
  },
  {
    name: "FarmFresh Trading Co.",
    distance: "7.1 km",
    rating: 4.9,
    specialty: "All Grains, Export Quality",
  },
];
const Merchants = () => {
  return (
    <section id="merchants" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nearby Grain Merchants
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with local grain merchants, suppliers, and buyers in your
            area for easier trading and better prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchants.map((merchant, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {merchant.name}
                  </h3>
                  <p className="text-gray-500">Distance: {merchant.distance}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-700 font-medium">
                      {merchant.rating}/5
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialty:</span>
                  <span className="text-gray-700">{merchant.specialty}</span>
                </div>
                <div className="pt-4 flex space-x-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition duration-300 flex-1">
                    Contact
                  </button>
                  <button className="bg-white border border-green-600 text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition duration-300 flex-1">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Find More Merchants Near You
              </h3>
              <p className="text-gray-600">
                Enter your location to discover all grain merchants in your
                vicinity
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-green-700 transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchants;
