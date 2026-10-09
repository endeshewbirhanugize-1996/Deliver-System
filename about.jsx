
import React, {useState, useEffect} from "react";
const About = () => {
  const [mission, setMission] = useState("");
  useEffect(() => { })

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-wider mb-3">
            About EthioDelivery
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            We Deliver <span className="text-red-600">Convenience</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            EthioDelivery is a homegrown Ethiopian delivery platform
            on a mission to make everyday life easier, one fast and
            reliable delivery at a time.
          </p>
        </div>
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center text-3xl">
              🚚
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Fast Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We help customers receive their orders quickly and
              conveniently wherever they are.
            </p>
          </div>
          {/* Reliable Service */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center text-3xl">
              🤝
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Reliable Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to provide dependable delivery services
              for individuals and businesses.
            </p>
          </div>
          {/* Local Focus */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center text-3xl">
              🇪🇹
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Made for Ethiopia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are building a delivery experience designed around
              the needs of Ethiopian customers and businesses.
            </p>
          </div>
        </div>
        {/* Mission */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Our mission is to connect customers, businesses, and
            delivery partners through a simple, fast, and reliable
            digital delivery platform.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

