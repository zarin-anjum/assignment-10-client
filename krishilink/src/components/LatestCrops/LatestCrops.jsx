import { useEffect, useState } from "react";
import CropCard from "../CropCard/CropCard";
import { Link } from "react-router-dom";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/crops")
      .then((res) => res.json())
      .then((data) => {
        const latestSix = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6);

        setCrops(latestSix);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load latest crops", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading latest crops...</p>;
  }

  return (
    <div className="mt-12 px-10 pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Latest Crop Posts</h2>

        <Link
          to="/allcrops"
          className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View All
        </Link>
      </div>

      {crops.length === 0 ? (
        <p className="text-gray-500">No crops posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestCrops;
