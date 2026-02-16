export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About Careya
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide trusted baby sitting, elderly care, and patient support
          services — helping families feel safe, supported, and stress-free.
        </p>
      </section>

      {/* 2️⃣ Our Story */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Careya was founded with a simple mission — to make caregiving
            accessible, reliable, and compassionate. We understand the
            challenges families face when searching for trusted caregivers.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            That’s why we built a platform that connects families with verified
            professionals who truly care.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center text-gray-400">
          Image Placeholder
        </div>
      </section>

      {/* 3️⃣ Mission & Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide safe, reliable, and professional caregiving services
              that bring peace of mind to families.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted caregiving platform in the region,
              known for compassion, safety, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ Why Choose Us */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Families Trust Us</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg">Verified Caregivers</h4>
            <p className="text-gray-600 mt-2">
              All caregivers go through background checks and training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Our team is always available to assist you.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Flexible Plans</h4>
            <p className="text-gray-600 mt-2">
              Choose services that match your schedule and needs.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ Core Values */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold">Compassion</h5>
              <p className="text-gray-600 text-sm mt-2">
                We care deeply about every family we serve.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Trust</h5>
              <p className="text-gray-600 text-sm mt-2">
                Transparency and reliability are our foundation.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Safety</h5>
              <p className="text-gray-600 text-sm mt-2">
                Your loved ones’ safety is our top priority.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Professionalism</h5>
              <p className="text-gray-600 text-sm mt-2">
                We maintain high service standards at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Team Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow rounded-2xl p-6">
            <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold">Dr. Sarah Ahmed</h4>
            <p className="text-sm text-gray-500">Founder & Director</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold">Rahim Uddin</h4>
            <p className="text-sm text-gray-500">Operations Manager</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold">Nusrat Jahan</h4>
            <p className="text-sm text-gray-500">Care Coordinator</p>
          </div>
        </div>
      </section>

      {/* 7️⃣ Stats Section */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-gray-300">Families Served</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="mt-2 text-gray-300">Verified Caregivers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-2 text-gray-300">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* 8️⃣ CTA Section */}
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
