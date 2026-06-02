import Image from "next/image";
import Link from "next/link";

export default function PrecisionPage() {
  const machines = [
    "CNC Milling",
    "CNC Turning",
    "Surface Grinding",
    "Conventional Milling",
    "Conventional Lathe",
    "Drilling Machine",
  ];

  const specs = [
    {
      title: "Tolerance",
      value: "±0.01 mm",
    },
    {
      title: "Material",
      value: "Steel, SS, Alu",
    },
    {
      title: "Production",
      value: "Prototype - Mass",
    },
    {
      title: "Quality",
      value: "100% Inspection",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen">

        <Image
          src="/precision/hero.jpg"
          alt="Precision Machining"
          fill
          priority
          className="object-cover opacity-30"
        />

        <div className="container relative z-10 mx-auto px-6 pt-40">

          <span className="text-green-400 uppercase tracking-[6px]">
            High Precision Machining
          </span>

          <h1 className="mt-6 text-6xl md:text-8xl font-bold">
            Precision
            <span className="block text-green-500">
              Manufacturing
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-300">
            Delivering high precision machining solutions with
            advanced CNC technology and strict quality control.
          </p>

        </div>
      </section>

      {/* SPECIFICATION */}
      <section className="py-24 border-t border-white/10">

        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {specs.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-2xl p-8"
              >
                <p className="text-gray-400">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-green-500">
                  {item.value}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MACHINE LIST */}
      <section className="py-24">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>
              <span className="text-green-400">
                MACHINING CAPABILITY
              </span>

              <h2 className="mt-4 text-5xl font-bold">
                Advanced Manufacturing Equipment
              </h2>

              <div className="mt-10 space-y-4">

                {machines.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-4"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">

              <Image
                src="/precision/machine.jpg"
                alt="CNC Machine"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-24 bg-zinc-950">

        <div className="container mx-auto px-6">

          <h2 className="text-5xl font-bold mb-12">
            Precision Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative h-[280px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={`/precision/gallery-${item}.jpg`}
                  alt="Gallery"
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="container mx-auto px-6">

          <div className="rounded-3xl border border-green-500 p-16 text-center">

            <h2 className="text-5xl font-bold">
              Looking For Precision Components?
            </h2>

            <p className="mt-4 text-gray-400">
              Contact our engineering team today.
            </p>

            <Link
              href="/contact"
              className="
                inline-block
                mt-8
                bg-green-600
                px-8
                py-4
                rounded-full
                font-semibold
              "
            >
              Request Quotation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}