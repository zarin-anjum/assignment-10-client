import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/api/interests/my-interests/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📋 My Interests</h2>

      {interests.length === 0 ? (
        <p className="text-center text-lg">You haven't sent any interests yet.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Crop Name</th>
              <th className="border p-2">Owner</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((interest) => (
              <tr key={interest._id} className="text-center align-middle">
                <td className="border p-2">{interest.cropName}</td>
                <td className="border p-2">{interest.owner.ownerName}</td>
                <td className="border p-2">{interest.quantity}</td>
                <td className="border p-2">{interest.message}</td>
                <td className="border p-2">{interest.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyInterests;
 