// src/pages/AllCrops/AllCrops.jsx
import React, { useState } from "react";
import CropCard from "../../components/CropCard/CropCard";
import { crops } from "../../data/crops"; 

const AllCrops = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter crops based on search term
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-12 py-12 bg-linear-to-b from-gray-50 to-green-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        All Crops
      </h2>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search crops..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Crop Grid */}
      {filteredCrops.length === 0 ? (
        <p className="text-center text-gray-600">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
