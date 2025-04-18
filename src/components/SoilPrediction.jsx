import React from "react";
import soilAnalysis from "./../assets/images/soil_technologies.jpg";
const SoilPrediction = () => {
  return (
    <section id="soilPrection" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Soil Prediction Facilities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our advanced soil prediction technology uses machine learning
              algorithms to analyze soil samples and provide farmers with
              detailed information about their soil health.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1 bg-green-500 rounded-full mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Comprehensive Soil Analysis
                  </p>
                  <p className="text-gray-600 mt-1">
                    Get detailed reports on soil composition, pH levels, and
                    nutrient content.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1 bg-green-500 rounded-full mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Fertility Assessment
                  </p>
                  <p className="text-gray-600 mt-1">
                    Understand your soil's fertility status and get
                    recommendations for improvement.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1 bg-green-500 rounded-full mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Customized Fertilizer Recommendations
                  </p>
                  <p className="text-gray-600 mt-1">
                    Receive tailored fertilizer recommendations based on your
                    soil's specific needs.
                  </p>
                </div>
              </li>
            </ul>
            <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300">
              Analyze Your Soil
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={soilAnalysis}
                  alt="Soil Analysis"
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                    1
                  </div>
                  <p className="text-gray-600">
                    Upload photos of your soil or send us a sample
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                    2
                  </div>
                  <p className="text-gray-600">
                    Our AI analyzes the soil composition and properties
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold mr-3">
                    3
                  </div>
                  <p className="text-gray-600">
                    Receive detailed reports and recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoilPrediction;
