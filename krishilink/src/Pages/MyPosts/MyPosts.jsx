import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCrop, setEditCrop] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/api/crops/my-crops/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const confirmDelete = (onConfirm) => {
    toast(
      (t) => (
        <div className="p-4">
          <p className="mb-4 font-semibold text-gray-700">
            Are you sure you want to delete this crop?
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => {
                onConfirm();
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const handleDelete = async (id) => {
    confirmDelete(async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/crops/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setCrops(crops.filter((crop) => crop._id !== id));
          toast.success("Crop deleted successfully!");
        } else {
          toast.error("Failed to delete crop");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      }
    });
  };

  const handleEdit = (crop) => {
    setEditCrop(crop);
    setShowEditModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/api/crops/${editCrop._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editCrop),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setCrops((prev) =>
          prev.map((c) => (c._id === editCrop._id ? data.crop : c))
        );

        setShowEditModal(false);
        toast.success("Crop updated successfully!");
      } else {
        toast.error(data.message || "Failed to update crop");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6">📦 My Crop Posts</h2>

      {crops.length === 0 ? (
        <p className="text-center text-lg">No crops added yet.</p>
      ) : (
        <>
          <table className="w-full border">
            {" "}
            <thead className="bg-green-200">
              {" "}
              <tr>
                {" "}
                <th className="border p-2">Name</th>{" "}
                <th className="border p-2">Type</th>{" "}
                <th className="border p-2">Price</th>{" "}
                <th className="border p-2">Quantity</th>{" "}
                <th className="border p-2">Actions</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {crops.map((crop) => (
                <tr key={crop._id} className="text-center align-middle">
                  {" "}
                  <td className="border p-2">{crop.name}</td>{" "}
                  <td className="border p-2">{crop.type}</td>{" "}
                  <td className="border p-2">{crop.pricePerUnit}</td>{" "}
                  <td className="border p-2">{crop.quantity}</td>{" "}
                  <td className="border p-2 space-x-2">
                    {" "}
                    <button
                      onClick={() => handleEdit(crop)}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      {" "}
                      Edit{" "}
                    </button>{" "}
                    <button
                      onClick={() => handleDelete(crop._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      {" "}
                      Delete{" "}
                    </button>{" "}
                  </td>{" "}
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>

          {showEditModal && editCrop && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  Edit Crop
                </h3>

                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-semibold mb-1 text-gray-700"
                    >
                      Crop Name
                    </label>
                    <input
                      type="text"
                      value={editCrop.name}
                      onChange={(e) =>
                        setEditCrop({ ...editCrop, name: e.target.value })
                      }
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block font-semibold mb-1 text-gray-700"
                    >
                      Price Per Unit (Tk)
                    </label>
                    <input
                      type="number"
                      value={editCrop.pricePerUnit}
                      onChange={(e) =>
                        setEditCrop({
                          ...editCrop,
                          pricePerUnit: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="block font-semibold mb-1 text-gray-700"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={editCrop.quantity}
                      onChange={(e) =>
                        setEditCrop({ ...editCrop, quantity: e.target.value })
                      }
                      className="w-full border p-2 rounded"
                      placeholder="Quantity"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block font-semibold mb-1 text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      value={editCrop.location}
                      onChange={(e) =>
                        setEditCrop({ ...editCrop, location: e.target.value })
                      }
                      className="w-full border p-2 rounded"
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowEditModal(false)}
                      className="px-4 py-2 bg-gray-300 rounded"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyPosts;
