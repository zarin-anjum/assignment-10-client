import React, { useEffect, useState } from "react";
import CropCard from "../../components/CropCard/CropCard";
import { Helmet } from "react-helmet";

const AllCrops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://krishilink-server-omega.vercel.app/api/crops")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch crops:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-600 text-lg">
        Loading crops...
      </p>
    );
  }

  // Filter crops based on search term
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-12 py-12 bg-linear-to-b from-gray-50 to-green-50">
      <Helmet>
        <title>KrishiLink – All Crops</title> 
      </Helmet>

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
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
