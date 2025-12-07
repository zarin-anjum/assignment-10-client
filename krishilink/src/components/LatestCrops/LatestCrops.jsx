import { crops } from "../../data/crops";
import CropCard from "../CropCard/CropCard";
import { Link } from "react-router-dom";

const LatestCrops = () => {
  const latestSix = crops.slice(0, 6); // just take first 6 for now

  return (
    <div className="mt-12 px-10 pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Latest Crop Posts</h2>

        <Link
          to="/crops"
          className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestSix.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
};

export default LatestCrops;
