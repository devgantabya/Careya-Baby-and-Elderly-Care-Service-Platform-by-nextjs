import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <Link href="/" className="text-blue-600">
        Go Home
      </Link>
    </div>
  );
}
