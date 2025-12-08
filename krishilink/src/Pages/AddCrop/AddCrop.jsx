import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddCrop = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    pricePerUnit: "",
    unit: "",
    quantity: "",
    description: "",
    location: "",
    image: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.type || !formData.pricePerUnit) {
      return alert("Please fill out all required fields.");
    }

    const cropData = {
      ...formData,
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };

    try {
      const res = await fetch("http://localhost:5000/crops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cropData),
      });

      const data = await res.json();

      if (data.insertedId) {
        setShowSuccess(true);

        // redirect after short delay
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/my-posts");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-green-50 py-12">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          📦 Add New Crop
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Crop Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tomato"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select Type</option>
              <option>Vegetable</option>
              <option>Fruit</option>
              <option>Grain</option>
              <option>Herb</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Price Per Unit (Tk) *
            </label>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              placeholder="55"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Unit */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Unit *
            </label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select Unit</option>
              <option>kg</option>
              <option>ton</option>
              <option>bag</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Estimated Quantity *
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="400"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Short description about the crop"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              name="location"
              placeholder="Bogura"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Image URL *
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/crop.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold text-lg shadow-md bg-linear-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 transition"
          >
            Add Crop
          </button>
        </form>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center">
              <h3 className="text-xl font-semibold text-green-700">
                Crop Added Successfully! 🎉
              </h3>
              <p className="text-gray-600 mt-1">Redirecting to My Posts...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCrop;
