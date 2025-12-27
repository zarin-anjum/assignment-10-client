import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-green-50 py-12">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">👤 My Profile</h2>
          <div className="flex flex-col items-center mb-6">
            <img
              src={photo || "https://i.ibb.co/2kRZpYv/user.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <p className="mt-3 text-gray-700 font-semibold">{user?.email}</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
