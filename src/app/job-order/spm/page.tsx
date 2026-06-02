import Image from "next/image";
import Link from "next/link";

export default function SPMPage() {
  const capabilities = [
    "Assembly Machine",
    "Testing Machine",
    "Conveyor System",
    "Welding Fixture",
    "Automation System",
    "Production Line Integration",
  ];

  const workflow = [
    "Requirement Analysis",
    "Engineering Design",
    "Manufacturing",
    "Assembly & Testing",
    "Installation",
    "After Sales Support",
  ];

  const spmCatalog = [
    {
      name: "Table Lifter With Roll Conveyor",
      image: "/spm/prod1.png",
      category: "SPM",
      description:
        "Table Lifter dengan sistem conveyor dapat mengangkat barang dan juga handling dengan mudah.",
    },
    {
      name: "Layer Roller System",
      image: "/spm/prod2.png",
      category: "SPM",
      description:
        " merujuk pada beberapa teknologi yang mengandalkan pergerakan silinder (roller) untuk membentuk, memindahkan, atau meratakan material secara berlapis (layer). Istilah ini paling umum ditemukan dalam industri manufaktur, percetakan, dan pencetakan 3D.",
    },
    {
      name: "Shidanki Machine",
      image: "/spm/prod3.png",
      category: "SPM",
      description:
        "Shidanki machine atau mesin penguji (Leak Tester atau Torque Tester) yang digunakan dalam industri manufaktur dan perakitan untuk memastikan fungsi mekanis berjalan normal.",
    },
    {
      name: "Piperoll Welding Machine",
      image: "/spm/prod4.png",
      category: "SPM",
      description:
        "mesin industri yang digunakan untuk membentuk dan menyambung material pipa secara otomatis melalui proses pengelasan dan penggilingan (roll forming).",
    },
    {
      name: "Buffing Grinder Machine",
      image: "/spm/prod5.png",
      category: "SPM",
      description:
        "Adigunakan untuk meratakan, menghilangkan cacat atau karat pada permukaan material, hingga memberikan hasil akhir yang mengkilap.",
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="content h-[700px]">
        <Image
          src="/products/spm/spmm.png"
          alt="SPM Machine"
          fill
          priority
          className="object-full"
        />

        <div className="absolute inset-0 bg-gray/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="font-semibold text-green-600">
              ABOUT SPM
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Designed Specifically For Your Production Process
            </h2>

            <p className="mt-2 leading-8 text-2x1-gray">
             Produk Special Purpose Machine kami dirancang untuk memecahkan tantangan manufaktur tertentu. 
             Setiap mesin dirancang berdasarkan kebutuhan pelanggan untuk memaksimalkan efisiensi, mengurangi waktu pekerjaan, 
             dan meningkatkan konsistensi produksi.
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/products/spm/about.jpg"
              alt="SPM Manufacturing"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">

          <div className="text-center">
            <span className="font-semibold text-green-600">
              CAPABILITIES
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Pembuatan Kami
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SPM CATALOG */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="mb-14 text-center">

            <span className="uppercase tracking-[4px] text-slate-400">
              Portfolio
            </span>

            <h2 className="mt-3 text-5xl font-bold">
              SPM Catalog
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Various Special Purpose Machines designed and manufactured
              according to customer requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {spmCatalog.map((item) => (
              <div
                key={item.name}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-5">

                  <span className="text-sm font-medium text-green-600">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-lg font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl bg-green-600 p-16 text-center text-white">

            <h2 className="text-4xl font-bold">
               Apakah anda tertarik dengan SPM kami? 
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-green-700"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}