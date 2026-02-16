export default function TestimonialsSection() {
  return (
    <section className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow p-6 rounded-xl">
          <p className="text-gray-600">
            "Amazing service! Very professional and caring."
          </p>
          <h4 className="mt-4 font-semibold">— Sarah M.</h4>
        </div>
        <div className="bg-white shadow p-6 rounded-xl">
          <p className="text-gray-600">
            "We trust Careya completely with our parents."
          </p>
          <h4 className="mt-4 font-semibold">— Ahmed R.</h4>
        </div>
      </div>
    </section>
  );
}
