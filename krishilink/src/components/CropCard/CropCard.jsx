import React from "react";

const CropCard = ({ crop }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{crop.name}</h3>
        <p className="text-green-700 font-semibold">{crop.price}</p>
        <p className="text-gray-500 text-sm">{crop.location}</p>
        <p className="text-xs text-gray-400">Farmer: {crop.farmer}</p>
      </div>
    </div>
  );
};

export default CropCard;
