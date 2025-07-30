import React from "react";

const showcases = [
  {
    title: "Smart Ride Pooling",
    description:
      "Efficiently match with others going in the same direction. Reduce traffic, save fuel, and make commuting fun together!",
    image: "https://via.placeholder.com/400x250?text=Smart+Ride+Pooling", // Replace with real screenshot
  },
  {
    title: "Safe via Request & Connect",
    description:
      "Send ride requests, approve connections, and share ride details safely. Control who you travel with.",
    image: "https://via.placeholder.com/400x250?text=Safe+Request+Connect",
  },
  {
    title: "Verified Profile System",
    description:
      "Only NITT students and staff can create accounts. Your profile includes name, dept, and verified email ID.",
    image: "https://via.placeholder.com/400x250?text=Verified+Profiles",
  }
];

const Showcase = () => {
  return (
    <div className="bg-white py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Product Showcase</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {showcases.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
