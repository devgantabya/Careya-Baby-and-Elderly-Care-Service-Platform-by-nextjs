"use client";

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Pricing Plans
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose a plan that suits your family’s caregiving needs. Simple,
          flexible, and transparent.
        </p>
      </section>

      {/* 2️⃣ Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-2xl p-8 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">
              $49<span className="text-base font-normal">/week</span>
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Baby Care: 2 hours/day</li>
              <li>Elderly Care: 2 hours/day</li>
              <li>24/7 Support</li>
            </ul>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Select Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border-2 border-black rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">
              $99<span className="text-base font-normal">/week</span>
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Baby Care: 4 hours/day</li>
              <li>Elderly Care: 4 hours/day</li>
              <li>Patient Support</li>
              <li>24/7 Support</li>
            </ul>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-2xl p-8 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">
              $149<span className="text-base font-normal">/week</span>
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Baby Care: Full day</li>
              <li>Elderly Care: Full day</li>
              <li>Patient Support</li>
              <li>Priority 24/7 Support</li>
              <li>Customized Care Plans</li>
            </ul>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Select Plan
            </button>
          </div>
        </div>
      </section>

      {/* 3️⃣ Features Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Features Included in Every Plan
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-gray-600">
          <div>
            <h4 className="font-semibold mb-2">Verified Caregivers</h4>
            <p>All caregivers go through background checks and training.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
            <p>Book care by hours, days, or weeks based on your needs.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p>We’re always available to assist you.</p>
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Choose Your Plan?</h2>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Book Now
        </button>
      </section>
    </div>
  );
}
