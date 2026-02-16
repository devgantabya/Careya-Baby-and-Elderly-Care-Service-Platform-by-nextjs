"use client";

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          How It Works
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Careya makes finding trusted caregivers simple and stress-free. Follow
          these easy steps to get started.
        </p>
      </section>

      {/* 2️⃣ Steps Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose a Service</h3>
            <p className="text-gray-600">
              Select the caregiving service that fits your family’s needs: baby
              care, elderly care, or patient support.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Schedule a Caregiver</h3>
            <p className="text-gray-600">
              Pick a convenient time and date for your care session.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl hover:shadow-lg transition">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive Care</h3>
            <p className="text-gray-600">
              Our trained and verified caregivers arrive and provide
              compassionate, professional care.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Why Choose Careya Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Careya?</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg">Verified Caregivers</h4>
            <p className="text-gray-600 mt-2">
              Every caregiver is background-checked and trained.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              We’re available whenever you need help or guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Flexible Scheduling</h4>
            <p className="text-gray-600 mt-2">
              Book for a few hours or long-term care, as your needs change.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Trusted Care?
        </h2>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Book Now
        </button>
      </section>
    </div>
  );
}
