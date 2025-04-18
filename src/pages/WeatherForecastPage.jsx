import React, { useState, useEffect } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  Thermometer,
  Droplets,
  Wind,
  Calendar,
  ArrowRight,
  CloudLightning,
  CloudSnow,
  Leaf,
} from "lucide-react";

const WeatherForecastPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Sample weather data - would be fetched from an API in production
  const weatherData = {
    current: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      rainChance: 20,
      icon: <Cloud className="text-violet-800" />,
    },
    hourly: [
      { time: "Now", temp: 28, icon: <Cloud className="text-blue-400" /> },
      { time: "11 AM", temp: 30, icon: <Sun className="text-yellow-500" /> },
      { time: "12 PM", temp: 32, icon: <Sun className="text-yellow-500" /> },
      { time: "1 PM", temp: 33, icon: <Sun className="text-yellow-500" /> },
      { time: "2 PM", temp: 32, icon: <CloudRain className="text-blue-500" /> },
      { time: "3 PM", temp: 30, icon: <CloudRain className="text-blue-500" /> },
      { time: "4 PM", temp: 29, icon: <Cloud className="text-blue-400" /> },
    ],
    forecast: [
      {
        day: "Today",
        high: 33,
        low: 26,
        icon: <Cloud className="text-blue-400" />,
        condition: "Partly Cloudy",
        rainChance: 20,
      },
      {
        day: "Tomorrow",
        high: 34,
        low: 25,
        icon: <Sun className="text-yellow-500" />,
        condition: "Sunny",
        rainChance: 0,
      },
      {
        day: "Wed",
        high: 30,
        low: 24,
        icon: <CloudRain className="text-blue-500" />,
        condition: "Light Rain",
        rainChance: 60,
      },
      {
        day: "Thu",
        high: 29,
        low: 23,
        icon: <CloudLightning className="text-purple-500" />,
        condition: "Thunderstorms",
        rainChance: 80,
      },
      {
        day: "Fri",
        high: 27,
        low: 22,
        icon: <CloudRain className="text-blue-500" />,
        condition: "Showers",
        rainChance: 70,
      },
    ],
    agricultureTips: [
      "Hold off on fertilizer application due to expected rain in 48 hours",
      "Ideal conditions for harvesting wheat crops today and tomorrow",
      "Consider irrigation for vegetable plots as soil moisture levels are decreasing",
      "Potential pest activity may increase with rising humidity",
    ],
    soilConditions: {
      moisture: 45,
      temperature: 24,
    },
  };

  // Get formatted date strings
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Function to determine weather icon color based on temperature
  const getTempColor = (temp) => {
    if (temp >= 35) return "text-red-600";
    if (temp >= 30) return "text-orange-500";
    if (temp >= 25) return "text-yellow-500";
    if (temp >= 20) return "text-green-500";
    if (temp >= 15) return "text-blue-400";
    return "text-blue-600";
  };

  // Calculate temperature range for proper chart scaling
  const temps = weatherData.hourly.map((h) => h.temp);
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);
  const tempRange = maxTemp - minTemp;

  return (
    <section className="py-16 bg-gradient-to-b from-green-100 to-green-50">
      {/* Agriculture-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-green-600"></div>
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-green-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-green-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Farm Weather Forecast
            </h2>
          </div>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Real-time weather updates tailored for smarter agricultural planning
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
          {/* Weather Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-500 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-lg opacity-90">{formattedDate}</div>
                <div className="text-sm opacity-80">{formattedTime}</div>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Your Farm, Karnataka
                </h3>
              </div>
              <div className="flex items-center">
                <div className="text-7xl mr-4 flex items-center justify-center">
                  {weatherData.current.icon}
                </div>
                <div>
                  <div className="text-5xl font-bold">
                    {weatherData.current.temp}°
                  </div>
                  <div className="text-xl">{weatherData.current.condition}</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="flex flex-col items-center">
                <Droplets className="h-6 w-6 mb-1" />
                <span className="text-sm">Humidity</span>
                <span className="text-lg font-semibold">
                  {weatherData.current.humidity}%
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Wind className="h-6 w-6 mb-1" />
                <span className="text-sm">Wind Speed</span>
                <span className="text-lg font-semibold">
                  {weatherData.current.windSpeed} km/h
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CloudRain className="h-6 w-6 mb-1" />
                <span className="text-sm">Rain Chance</span>
                <span className="text-lg font-semibold">
                  {weatherData.current.rainChance}%
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-green-50 px-6 pt-4">
            <div className="flex border-b border-green-100">
              <button
                onClick={() => setActiveTab("today")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "today"
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-green-700"
                }`}
              >
                Hourly Forecast
              </button>
              <button
                onClick={() => setActiveTab("week")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "week"
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-green-700"
                }`}
              >
                5-Day Forecast
              </button>
              <button
                onClick={() => setActiveTab("agriculture")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "agriculture"
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-green-700"
                }`}
              >
                Agriculture Impact
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Hourly Forecast */}
            {activeTab === "today" && (
              <div className="overflow-x-auto">
                <div className="flex space-x-6 min-w-max pb-4">
                  {weatherData.hourly.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-sm font-medium text-gray-500">
                        {hour.time}
                      </div>
                      <div className="my-2 w-10 h-10">{hour.icon}</div>
                      <div
                        className={`text-lg font-bold ${getTempColor(
                          hour.temp
                        )}`}
                      >
                        {hour.temp}°
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corrected Temperature Chart */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">
                    Temperature Trend
                  </h4>
                  <div className="relative h-32">
                    {/* Temperature range labels */}
                    <div className="absolute -left-2 top-0 text-xs text-gray-500">
                      {maxTemp}°
                    </div>
                    <div className="absolute -left-2 bottom-0 text-xs text-gray-500">
                      {minTemp}°
                    </div>

                    {/* Chart grid lines */}
                    <div className="absolute left-0 right-0 top-0 border-t border-gray-100 w-full"></div>
                    <div className="absolute left-0 right-0 top-1/4 border-t border-gray-100 w-full"></div>
                    <div className="absolute left-0 right-0 top-1/2 border-t border-gray-100 w-full"></div>
                    <div className="absolute left-0 right-0 top-3/4 border-t border-gray-100 w-full"></div>
                    <div className="absolute left-0 right-0 bottom-0 border-t border-gray-100 w-full"></div>

                    {/* Temperature bars */}
                    <div className="absolute inset-0 flex items-end justify-between p-1">
                      {weatherData.hourly.map((hour, index) => {
                        const heightPercent =
                          tempRange > 0
                            ? ((hour.temp - minTemp) / tempRange) * 100
                            : 50;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center w-8"
                          >
                            <div
                              className={`w-6 rounded-t-lg ${getTempColor(
                                hour.temp
                              )}`}
                              style={{
                                height: `${heightPercent}%`,
                                minHeight: "4px",
                              }}
                            ></div>
                            <div className="mt-2 text-xs text-gray-500">
                              {hour.time}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-600 rounded-full mr-1"></div>
                      <span>≥35°</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
                      <span>30-34°</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                      <span>25-29°</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                      <span>20-24°</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-1"></div>
                      <span>15-19°</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5-Day Forecast */}
            {activeTab === "week" && (
              <div className="space-y-4">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg flex items-center justify-between ${
                      index === 0 ? "bg-green-50" : "hover:bg-green-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-4">{day.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {day.day}
                        </div>
                        <div className="text-sm text-gray-500">
                          {day.condition}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-blue-500 mr-4">
                        <CloudRain className="h-4 w-4 inline mr-1" />
                        {day.rainChance}%
                      </div>
                      <div className="text-right">
                        <span className={`font-bold ${getTempColor(day.high)}`}>
                          {day.high}°
                        </span>
                        <span className="mx-1 text-gray-400">/</span>
                        <span className="text-gray-500">{day.low}°</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Agriculture Impact */}
            {activeTab === "agriculture" && (
              <div className="space-y-6">
                {/* Soil Conditions */}
                <div className="p-5 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-4">
                    Soil Conditions
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-green-700">Soil Moisture</p>
                      <div className="mt-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{
                            width: `${weatherData.soilConditions.moisture}%`,
                          }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>Dry</span>
                        <span>{weatherData.soilConditions.moisture}%</span>
                        <span>Saturated</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Soil Temperature</p>
                      <div className="flex items-center mt-1">
                        <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-xl font-semibold">
                          {weatherData.soilConditions.temperature}°C
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Optimal for most crop growth
                      </p>
                    </div>
                  </div>
                </div>

                {/* Farming Advice */}
                <div>
                  <h4 className="text-lg font-medium text-green-800 mb-4">
                    Weather Impact & Recommendations
                  </h4>
                  <ul className="space-y-3">
                    {weatherData.agricultureTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mt-1 mr-2">
                          <ArrowRight className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-gray-700">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Field Operations */}
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <h4 className="text-lg font-medium text-green-800 mb-4">
                    Field Operations Advisory
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                      <p className="font-medium text-green-800">
                        Suitable Today
                      </p>
                      <div className="mt-2 space-y-1 text-sm text-gray-700">
                        <p>Harvesting</p>
                        <p>Pest Control</p>
                        <p>Soil Testing</p>
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <p className="font-medium text-red-800">
                        Not Recommended
                      </p>
                      <div className="mt-2 space-y-1 text-sm text-gray-700">
                        <p>Fertilizer Application</p>
                        <p>Seeding</p>
                        <p>Irrigation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-green-50 px-6 py-4 text-center text-sm text-gray-600 border-t border-green-100">
            <p>
              Weather data updated every 30 minutes. Last updated:{" "}
              {formattedTime}
            </p>
            <button className="text-green-600 font-medium hover:underline flex items-center mx-auto mt-1">
              Set up weather alerts <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecastPage;
