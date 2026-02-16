export default function HowItWorks() {
  return (
    <section className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-3xl font-bold">1</div>
          <p className="mt-3 text-gray-600">Choose the service you need.</p>
        </div>
        <div>
          <div className="text-3xl font-bold">2</div>
          <p className="mt-3 text-gray-600">Book a convenient schedule.</p>
        </div>
        <div>
          <div className="text-3xl font-bold">3</div>
          <p className="mt-3 text-gray-600">Relax while we take care.</p>
        </div>
      </div>
    </section>
  );
}
