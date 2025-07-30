import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About ride<span className="text-green-300">NITT</span></h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          A student-led initiative by the Technical Council of NIT Trichy to build a smarter, greener ride-sharing experience on campus.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg mb-6">
          At a campus as vast and vibrant as NIT Trichy, getting around efficiently is a challenge. With increasing vehicle usage and environmental concerns, the Technical Council envisioned a platform that connects students heading to similar destinations — be it class, hostel, mess, or even the railway station.
        </p>
        <p className="text-lg">
          ride<span className="text-green-700 font-semibold">NITT</span> was born to solve this problem, turning everyday rides into opportunities to share, connect, and reduce our carbon footprint — all within the student ecosystem.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-green-50 py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-lg">
              To create a seamless, safe, and sustainable ride-sharing experience tailored for the NITT community.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-lg">
              A campus where students share rides by default — saving fuel, reducing congestion, and building stronger peer connections.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Backed By */}
      <section className="py-14 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Backed by the Best</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          rideNITT is proudly built and maintained by the <span className="text-green-700 font-semibold">Technical Council</span> of NIT Trichy. It's a collaborative effort of developers, designers, and changemakers committed to improving campus life.
        </p>
      </section>
    </div>
  );
};

export default About;
