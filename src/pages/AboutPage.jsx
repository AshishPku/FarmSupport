import React from "react";

const AboutUS = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Team Members
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600">
            Meet the talented individuals behind the FarmSupport project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div
              key={member}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={`/api/placeholder/128/128`}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                Team Member {member}
              </h3>
              <p className="text-gray-500 text-center mb-4">Role Title</p>
              <p className="text-gray-600 text-center">
                Short bio about the team member and their contributions to
                FarmSupport.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
