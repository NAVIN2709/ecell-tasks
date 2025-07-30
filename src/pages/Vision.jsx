import React from "react";

const Vision = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Vision</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Driving a sustainable, connected, and accessible future for everyone on the NIT Trichy campus.
        </p>
      </section>

      {/* Vision Goals */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">What We Envision</h2>
        <ul className="space-y-6 text-lg list-disc pl-6">
          <li>
            <span className="font-semibold">Sustainable Transport:</span> Minimize the number of single-person vehicle trips on campus to reduce fuel consumption and CO₂ emissions.
          </li>
          <li>
            <span className="font-semibold">Community-First Approach:</span> Strengthen the NITT community by encouraging students to share rides, stories, and moments.
          </li>
          <li>
            <span className="font-semibold">Smart Mobility:</span> Build a platform that uses real-time data to optimize ride availability, timing, and safety.
          </li>
          <li>
            <span className="font-semibold">Safety and Trust:</span> Ensure verified users, route transparency, and peer-reviewed experiences for every shared ride.
          </li>
          <li>
            <span className="font-semibold">Scalability:</span> Start within campus, but scale to inter-college rides, airport pickups, and event-based pooling — all from one platform.
          </li>
        </ul>
      </section>

      {/* How We Get There */}
      <section className="bg-green-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-green-700">How We'll Get There</h2>
          <p className="text-lg mb-4">
            ride<span className="text-green-700 font-bold">NITT</span> is more than just a ride-sharing app — it’s a mindset shift. By building student trust, integrating with campus infrastructure, and iterating based on real feedback, we aim to make shared mobility the new normal.
          </p>
          <p className="text-lg">
            With support from the Technical Council and collaboration across clubs and departments, this platform will evolve into a smart mobility backbone for the campus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Vision;
