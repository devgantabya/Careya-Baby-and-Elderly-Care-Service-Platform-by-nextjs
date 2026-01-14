import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Careya</h1>
        <p className="mt-3 text-gray-600">
          Trusted Baby Sitting & Elderly Care Services
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </>
  );
}
