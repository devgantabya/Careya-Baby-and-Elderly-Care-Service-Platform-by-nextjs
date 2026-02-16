import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our trusted caregiving solutions for families and individuals.
        </p>
      </section>

      {/* 2️⃣ Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Care Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3️⃣ How It Works Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How Our Services Work</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-2">1. Choose a Service</h4>
            <p className="text-gray-600">
              Select the caregiving service that fits your needs.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-2">2. Schedule a Caregiver</h4>
            <p className="text-gray-600">
              Pick a convenient time and date for your care session.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-2">3. Receive Care</h4>
            <p className="text-gray-600">
              Our trained caregivers arrive and provide compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ Why Choose Our Services */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Families Choose Careya</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg">Verified Caregivers</h4>
            <p className="text-gray-600 mt-2">
              All our caregivers go through background checks and training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">24/7 Availability</h4>
            <p className="text-gray-600 mt-2">
              We are always ready to provide care when you need it.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Flexible Plans</h4>
            <p className="text-gray-600 mt-2">
              Choose the schedule and services that match your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ CTA Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Book a Caregiver?</h2>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Book Now
        </button>
      </section>
    </div>
  );
}
