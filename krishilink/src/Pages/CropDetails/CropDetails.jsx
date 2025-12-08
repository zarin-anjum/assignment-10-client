import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { crops } from "../../data/crops";
import { AuthContext } from "../../Providers/AuthProvider";

const CropDetails = () => {
  const { cropId } = useParams();
  const { user } = useContext(AuthContext);

  const crop = crops.find((c) => c.id === parseInt(cropId));

  // State for Interest Form
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!crop) {
    return <p className="text-center mt-20 text-red-500">Crop not found!</p>;
  }

  // Check if logged-in user is the owner
  const isOwner = user?.email === crop.farmerEmail;

  // Calculate total price
  const totalPrice = quantity * parseInt(crop.price.replace(/[^\d]/g, ""));

  // Submit interest handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) return alert("Quantity must be at least 1");
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-green-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Crop Image */}
        <div className="lg:w-1/2">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-[450px] object-cover rounded-xl shadow-xl border border-gray-200"
          />
        </div>

        {/* Crop Info + Interest */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          {/* Crop Information */}
          <div className="bg-linear-to-r from-green-100 to-green-50 p-6 rounded-xl shadow-lg border border-green-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {crop.name}
            </h2>
            <p className="text-green-800 font-semibold text-2xl mb-3">
              {crop.price}
            </p>
            <div className="text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Location:</span> {crop.location}
              </p>
              <p>
                <span className="font-medium">Farmer:</span> {crop.farmer}
              </p>
              <p>
                <span className="font-medium">Posted At:</span> {crop.postedAt}
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              {crop.description || "No description available."}
            </p>
          </div>

          {/* Interest Form for Non-Owner */}
          {!isOwner && !submitted && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                Send Interest
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block mb-1 font-medium text-gray-600">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min={1}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-600">
                    Message
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>
                <p className="font-medium text-gray-700">
                  Total Price:{" "}
                  <span className="text-green-700">{totalPrice} BDT</span>
                </p>
                <button
                  type="submit"
                  className="mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg px-5 py-2 transition-colors shadow"
                >
                  Submit Interest
                </button>
              </form>
            </div>
          )}

          {/* Confirmation Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-green-100 bg-opacity-40 flex items-center justify-center z-50 animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 max-w-md text-center transform transition-transform duration-300 scale-95 animate-scaleIn">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Confirm Your Interest
                </h3>
                <p className="text-gray-600 mb-6">
                  You are about to submit an interest for{" "}
                  <span className="font-semibold text-green-700">
                    {quantity} {crop.unit || "units"}
                  </span>{" "}
                  of <span className="font-semibold">{crop.name}</span>.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition-colors"
                    onClick={() => {
                      setSubmitted(true);
                      setShowModal(false);
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-full shadow hover:bg-gray-300 transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Already Submitted Message */}
          {!isOwner && submitted && (
            <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800 font-semibold border border-yellow-200 text-center">
              You've already sent an interest for this crop.
            </div>
          )}

          {/* Received Interests for Owner */}
          {isOwner && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">
                Received Interests
              </h3>
              {crop.interests && crop.interests.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="border px-4 py-2 text-left">
                          Buyer Name
                        </th>
                        <th className="border px-4 py-2 text-left">Quantity</th>
                        <th className="border px-4 py-2 text-left">Message</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                        <th className="border px-4 py-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crop.interests.map((interest, idx) => (
                        <tr
                          key={interest._id}
                          className={`${
                            idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-green-50`}
                        >
                          <td className="border px-4 py-2">
                            {interest.userName}
                          </td>
                          <td className="border px-4 py-2">
                            {interest.quantity}
                          </td>
                          <td className="border px-4 py-2">
                            {interest.message}
                          </td>
                          <td className="border px-4 py-2">
                            {interest.status}
                          </td>
                          <td className="border px-4 py-2 flex gap-2">
                            <button className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition">
                              Accept
                            </button>
                            <button className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition">
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 mt-2">No interests received yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CropDetails;
