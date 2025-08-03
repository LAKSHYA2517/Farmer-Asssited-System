import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const navigate = useNavigate();

  const handleFetchData = () => {
    navigate("/ResultsPage");
  };

  return (
    <div className="max-w-lg mx-auto mt-24 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Enter Your Location
      </h2>
      <input
        type="text"
        placeholder="Search locality..."
        className="w-full border border-gray-300 rounded-lg p-2 mb-4"
      />
      <button
        onClick={handleFetchData}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        Fetch Data
      </button>
    </div>
  );
};

export default InputPage;
