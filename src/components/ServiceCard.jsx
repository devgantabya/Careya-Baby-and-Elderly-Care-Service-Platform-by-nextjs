import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <p className="mt-2 font-bold">৳ {service.price} / hour</p>

      <Link
        href={`/service/${service.id}`}
        className="inline-block mt-3 text-blue-600"
      >
        View Details →
      </Link>
    </div>
  );
}
