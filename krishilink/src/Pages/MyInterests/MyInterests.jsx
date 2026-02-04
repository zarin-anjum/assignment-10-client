import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://krishilink-server-omega.vercel.app/api/interests/my-interests/${user.email}`)
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
      <Helmet>
        <title>KrishiLink – My Interests</title> 
      </Helmet>

      <h2 className="text-lg lg:text-2xl font-bold mb-6">📋 My Interests</h2>

      {interests.length === 0 ? (
        <p className="text-center text-lg">
          You haven't sent any interests yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow">
          <table className="min-w-[700px] w-full border border-gray-300">
            <thead className="bg-green-200">
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

                  <td className="border p-2">
                    {interest.owner?.ownerName || "N/A"}
                  </td>

                  <td className="border p-2">{interest.quantity}</td>

                  <td className="border p-2">{interest.message || "—"}</td>

                  <td className="border p-2">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        interest.status === "pending"
                          ? "bg-yellow-500"
                          : interest.status === "accepted"
                            ? "bg-green-600"
                            : "bg-red-500"
                      }`}
                    >
                      {interest.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterests;
