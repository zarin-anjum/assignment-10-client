import React from "react";
import { FaUsers, FaSeedling, FaHandshake, FaCheckCircle } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers className="text-green-800 text-4xl mb-3" />,
    value: "500+",
    label: "Farmers Connected",
  },
  {
    id: 2,
    icon: <FaSeedling className="text-green-800 text-4xl mb-3" />,
    value: "1200+",
    label: "Crops Posted",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-green-800 text-4xl mb-3" />,
    value: "800+",
    label: "Successful Trades",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-green-800 text-4xl mb-3" />,
    value: "98%",
    label: "Satisfied Users",
  },
];

const PlatformHighlights = () => {
  return (
    <section className="pt-14 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-12">
          Platform Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {stat.icon}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
