import React from "react";

const SubFooter = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Joined thousands of farmers who are already benefiting from
          FarmSupport's smart farming solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-50 transition duration-300">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
