import React from "react";
import { FaUpload, FaSearch, FaHandshake } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUpload />,
    title: "Post Your Crops",
    description:
      "Farmers can upload crop details with price, quantity, and images to reach potential buyers.",
  },
  {
    id: 2,
    icon: <FaSearch />,
    title: "Browse Crops",
    description:
      "Buyers can explore all available crops posted by farmers and choose what they need.",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Connect & Trade",
    description:
      "Message the farmer or contact them directly to negotiate a fair and transparent deal.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-12">
          How KrishiLink Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto rounded-full bg-green-100 text-green-800 mb-5 text-4xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
