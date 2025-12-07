import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahim Hossain",
    role: "Farmer",
    photo: "/assets/user1.jpg",
    message:
      "KrishiLink helped me sell my crops directly to buyers without any middlemen. It’s really easy and trustworthy!",
  },
  {
    id: 2,
    name: "Fatima Akter",
    role: "Buyer",
    photo: "/assets/user2.jpg",
    message:
      "I found fresh local produce quickly through KrishiLink. I love how transparent and direct it is!",
  },
  {
    id: 3,
    name: "Jamal Uddin",
    role: "Farmer",
    photo: "/assets/user3.jpg",
    message:
      "Posting my crops and connecting with buyers has never been easier. Highly recommended for all farmers!",
  },
];

const SuccessStories = () => {
  return (
    <section className="pt-14 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-12">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-green-100 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-green-800 text-3xl mb-4" />

              {/* Message */}
              <p className="text-gray-700 italic mb-6 text-center">{testi.message}</p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testi.photo}
                  alt={testi.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <h4 className="text-lg font-semibold text-gray-900">{testi.name}</h4>
                <p className="text-sm text-green-800">{testi.role}</p>
              </div>

              <FaQuoteRight className="text-green-800 text-3xl mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
