export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-rose-50 to-blue-50 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800">Careya</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        Trusted Baby Sitting & Elderly Care Services You Can Rely On
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Book Now
        </button>
        <button className="border px-6 py-3 rounded-lg">Learn More</button>
      </div>
    </section>
  );
}
