import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Get in Touch</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-green-800">Email</h2>
            <p className="text-gray-600">ridenitt@nitt.edu</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-800">Phone</h2>
            <p className="text-gray-600">+91 xxxxx xxxxx</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-800">Campus Address</h2>
            <p className="text-gray-600">
              NIT Trichy,<br />
              Tanjore Main Road,<br />
              Tiruchirappalli, Tamil Nadu 620015
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-green-50 p-6 rounded-lg shadow-md">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
