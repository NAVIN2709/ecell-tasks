import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Ride<span className="text-green-300">NITT</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Your smart, sustainable campus ride-sharing platform by the Technical Council, NIT Trichy.
        </p>
        <Link to="/about" className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
          Learn More
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Use Ride<span className="text-green-700">NITT</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">Ride Sharing Posts</h3>
    <p>Easily post your ride offers for others to join, saving fuel, money, and time.</p>
  </div>

  <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">Request & Connect</h3>
    <p>Find available rides or request one – connect seamlessly with fellow students or staff.</p>
  </div>

  <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
    <p>Only verified NITT users can use the platform, ensuring safety and trust within the community.</p>
  </div>
</div>

      </section>

      {/* CTA Section */}
      <section className="bg-green-100 py-14 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to share your ride?</h2>
        <p className="text-lg mb-6">Connect with fellow students and make your trips easier and greener.</p>
        <Link to="https://ridenitt.in" className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition">
          Explore Rides
        </Link>
      </section>
    </div>
  );
};

export default Home;
