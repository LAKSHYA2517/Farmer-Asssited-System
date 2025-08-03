import React from "react";

const ResultsPage = () => {
  const data = {
    soilType: "Loamy Soil",
    temperature: "28°C",
    humidity: "65%",
    nitrogen: "Medium (40 kg/ha)",
    precipitation: "60%",
    windSpeed: "10 km/h",
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 p-6 min-h-[70vh]">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Soil & Weather Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="bg-white/30 backdrop-blur-md rounded-2xl shadow-md p-8 text-center"
          >
            <h3 className="text-lg font-semibold text-green-700 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </h3>
            <p className="text-gray-800 text-xl mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
