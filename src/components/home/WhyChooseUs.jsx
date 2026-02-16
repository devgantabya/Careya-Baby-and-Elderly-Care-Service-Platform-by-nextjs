export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Careya?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Verified Caregivers</h3>
            <p className="text-gray-600 mt-2">
              Background-checked and trained professionals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              We're available anytime you need assistance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Affordable Plans</h3>
            <p className="text-gray-600 mt-2">
              Flexible pricing that fits your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
