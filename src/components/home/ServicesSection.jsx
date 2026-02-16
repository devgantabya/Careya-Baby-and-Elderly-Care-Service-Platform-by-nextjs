import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
