import React, { useState } from "react";
import {
  Sprout,
  CalendarCheck,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Sun,
  CloudRain,
  Thermometer,
  LeafyGreen,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const SmartFarmingPage = () => {
  const [expandedStage, setExpandedStage] = useState(0);

  // Sample crop lifecycle data
  const cropLifecycle = [
    {
      stage: "Land Preparation",
      duration: "7-10 days",
      status: "completed",
      tasks: [
        {
          name: "Soil Testing",
          status: "completed",
          alert: null,
          recommendation: "Soil pH balanced at 6.5 - optimal for wheat",
        },
        {
          name: "Plowing",
          status: "completed",
          alert: null,
          recommendation: "Field plowed to 15cm depth",
        },
      ],
      icon: <Sprout className="text-green-600" />,
    },
    {
      stage: "Sowing",
      duration: "Ongoing (Day 3/5)",
      status: "active",
      tasks: [
        {
          name: "Seed Treatment",
          status: "pending",
          alert: "Complete before tomorrow",
          recommendation: "Use Trichoderma viride for disease prevention",
        },
        {
          name: "Planting",
          status: "in-progress",
          alert: "Optimal moisture level detected",
          recommendation: "Continue planting at 20cm row spacing",
        },
      ],
      icon: <LeafyGreen className="text-green-500" />,
    },
    {
      stage: "Vegetative Growth",
      duration: "Upcoming in 2 days",
      status: "pending",
      tasks: [
        {
          name: "First Fertilization",
          status: "pending",
          alert: "Prepare NPK mixture",
          recommendation: "Apply 50kg N, 25kg P, 25kg K per acre",
        },
        {
          name: "Weed Control",
          status: "pending",
          alert: "Monitor weed growth",
          recommendation: "Consider mechanical weeding in 5 days",
        },
      ],
      icon: <Sun className="text-yellow-500" />,
    },
    {
      stage: "Flowering",
      duration: "Expected in 3 weeks",
      status: "pending",
      tasks: [],
      icon: <CloudRain className="text-blue-400" />,
    },
  ];

  // Weather alerts
  const weatherAlerts = [
    {
      type: "rain",
      message: "30% chance of rain tomorrow afternoon",
      severity: "moderate",
      action: "Delay irrigation scheduled for tomorrow",
    },
    {
      type: "temperature",
      message: "Cold spell expected in 4 days (min 8°C)",
      severity: "high",
      action: "Prepare frost protection for seedlings",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 rounded-full bg-green-300 opacity-15 animate-ping-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-green-100 opacity-10 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Sprout className="h-8 w-8 text-green-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Smart Farming Guidance
            </h2>
          </div>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            AI-powered crop lifecycle management with real-time recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200">
          {/* Current Stage Highlight */}
          <div className="bg-green-50 p-6 border-b border-green-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <CalendarCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800">
                  Current Stage
                </h3>
                <p className="text-green-700">
                  {cropLifecycle.find((stage) => stage.status === "active")
                    ?.stage || "Preparation"}
                </p>
              </div>
            </div>
          </div>

          {/* Crop Lifecycle Timeline */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
              <Sprout className="mr-2" /> Wheat Crop Lifecycle
            </h3>

            <div className="space-y-4">
              {cropLifecycle.map((stage, index) => (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    expandedStage === index
                      ? "border-green-400 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  <button
                    className={`w-full p-4 flex items-center justify-between ${
                      stage.status === "active" ? "bg-green-50" : "bg-white"
                    }`}
                    onClick={() =>
                      setExpandedStage(expandedStage === index ? -1 : index)
                    }
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full mr-4 ${
                          stage.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : stage.status === "active"
                            ? "bg-green-200 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {stage.icon}
                      </div>
                      <div className="text-left">
                        <h4
                          className={`font-medium ${
                            stage.status === "active"
                              ? "text-green-800"
                              : "text-gray-800"
                          }`}
                        >
                          {stage.stage}
                        </h4>
                        <p
                          className={`text-sm ${
                            stage.status === "active"
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {stage.duration}
                        </p>
                      </div>
                    </div>
                    {expandedStage === index ? (
                      <ChevronDown className="text-gray-500" />
                    ) : (
                      <ChevronRight className="text-gray-500" />
                    )}
                  </button>

                  {expandedStage === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200 animate-fade-in">
                      {stage.tasks.length > 0 ? (
                        <ul className="space-y-4">
                          {stage.tasks.map((task, taskIndex) => (
                            <li
                              key={taskIndex}
                              className="p-3 bg-white rounded-lg shadow-sm"
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex items-center">
                                  {task.status === "completed" ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                  ) : task.status === "in-progress" ? (
                                    <div className="h-5 w-5 rounded-full border-2 border-yellow-500 mr-3 flex items-center justify-center">
                                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                    </div>
                                  ) : (
                                    <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3"></div>
                                  )}
                                  <div>
                                    <h5 className="font-medium text-gray-800">
                                      {task.name}
                                    </h5>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {task.recommendation}
                                    </p>
                                  </div>
                                </div>
                                {task.alert && (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <AlertTriangle className="h-3 w-3 mr-1" />
                                    {task.alert}
                                  </span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-center py-4">
                          No tasks available for this stage yet
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Weather Alerts Section */}
          <div className="p-6 bg-yellow-50 border-t border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
              <AlertTriangle className="mr-2" /> Weather Alerts
            </h3>

            <div className="space-y-4">
              {weatherAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500"
                >
                  <div className="flex items-start">
                    <div
                      className={`p-1 rounded-full mr-3 ${
                        alert.severity === "high"
                          ? "bg-red-100 text-red-500"
                          : "bg-yellow-100 text-yellow-500"
                      }`}
                    >
                      {alert.type === "rain" ? (
                        <CloudRain className="h-5 w-5" />
                      ) : (
                        <Thermometer className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        {alert.message}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Action:</span>{" "}
                        {alert.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Recommendation */}
          <div className="p-6 bg-green-50 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="mr-2" /> Today's Priority Task
            </h3>

            <div className="p-4 bg-white rounded-lg shadow-sm border border-green-200">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-green-100 mr-4">
                  <Droplets className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Irrigation Check
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Soil moisture at 45%. Recommended irrigation: 25mm in the
                    evening.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Field A</span>
                  <span>65% complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your global CSS */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SmartFarmingPage;
