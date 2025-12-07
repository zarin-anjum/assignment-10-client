import React from "react";
import { Link } from "react-router-dom";

const CropCard = ({ crop }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-5">
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
          {crop.name}
        </h3>
        <p className="text-green-700 font-semibold mb-1">{crop.price}</p>
        <p className="text-gray-500 text-sm mb-1">{crop.location}</p>
        <p className="text-gray-400 text-xs mb-4">Farmer: {crop.farmer}</p>

        <Link
          to={`/crop/${crop.id}`}
          className="inline-block w-full text-center px-4 py-2 bg-linear-to-r from-green-600 to-green-800 text-white rounded-lg hover:from-green-700 hover:to-green-900 transition-all font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CropCard;
