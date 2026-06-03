import Image from "next/image";
import Link from "next/link";


export default function OEMPartsPage() {
  const products = [
    {
      title: "Precision Machining Parts",
      description:
        "Custom OEM machining parts manufactured with high precision for industrial applications.",
    },
    {
      title: "Sheet Metal Components",
      description:
        "Fabricated sheet metal parts with strict quality control and dimensional accuracy.",
    },
    {
      title: "Welding & Assembly",
      description:
        "OEM welding and assembly solutions tailored to customer requirements.",
    },
    {
      title: "Automation Parts",
      description:
        "Mechanical and automation components for production line integration.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
              OEM Manufacturing Solution
            </span>

            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              OEM Parts Manufacturing
            </h1>

            <p className="max-w-2xl text-lg text-slate-300">
              High-quality OEM parts manufacturing services with precision
              machining, fabrication, welding, assembly, and custom engineering
              support for various industries.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Custom OEM Manufacturing
              </h2>

              <p className="text-gray-600">
                We provide complete OEM manufacturing services from design
                support, prototyping, machining, fabrication, assembly, and
                final quality inspection.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-8">
              <h3 className="mb-4 text-xl font-semibold">
                Our Capabilities
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✓ CNC Milling & Turning</li>
                <li>✓ Precision Machining</li>
                <li>✓ Sheet Metal Fabrication</li>
                <li>✓ Welding & Assembly</li>
                <li>✓ Quality Control Inspection</li>
                <li>✓ Industrial Automation Components</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            OEM Parts Categories
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <h2 className="mb-4 text-3xl font-bold">
              Quality Assurance
            </h2>

            <p className="max-w-3xl text-slate-300">
              Every OEM component undergoes strict inspection and quality
              control processes to ensure dimensional accuracy, durability,
              and compliance with customer specifications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-4xl font-bold">
            Need Custom OEM Parts?
          </h2>

          <p className="mb-8 text-lg">
            Contact our engineering team for consultation and quotation.
          </p>

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100">
            Request Quotation
          </button>
        </div>
      </section>
    </main>
  );
}