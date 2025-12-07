import React from "react";
import blogs from "../../data/blogs";

const Blogs = () => {
  return (
    <section className="pt-14 pb-20 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-12">
          Agro News & Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-green-800 font-semibold mb-2">
                  {blog.date}
                </p>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 hover:text-green-800 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{blog.description}</p>
                <a
                  href={blog.link}
                  className="mt-auto inline-block text-green-50 bg-linear-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 px-4 py-2 rounded-full font-medium transition-colors text-center"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
