import Image from "next/image";
import Link from "next/link";

export default function IndustrialPartsPage() {
  const materials = [
    "Carbon Steel",
    "Stainless Steel",
    "Aluminium",
    "Brass",
    "Copper",
    "Acryllic",
  ];

  const products = [
    {
      name: "Precision Shaft",
      image: "/industrial/Picture2.png",
      category: "Machining Part",
      material: "S45C Steel",
    },
    {
      name: "Machine Bracket",
      image: "/industrial/Picture3.png",
      category: "Fabrication Part",
      material: "SS400",
    },
    {
      name: "Jig Fixture",
      image: "/industrial/abcd.png",
      category: "Fixture",
      material: "Aluminium",
    },
    {
      name: "Bearing Housing",
      image: "/industrial/Picture1.png",
      category: "OEM Component",
      material: "FC25",
    },
    {
      name: "Gear Component",
      image: "/industrial/gear.png",
      category: "Precision Part",
      material: "SCM440",
    },
  ];

  const process = [
    "Engineering",
    "Material Preparation",
    "Machining",
    "Quality Control",
    "Assembly",
    "Delivery",
  ];

  return (
    <main className="bg-gray">

      {/* HERO */}
      <section className="relative h-[700px]">
        <Image
          src="/industrial/dfastt.png"
          alt="Industrial Parts"
          fill
          priority
          className="object-fill"
        />

        <div className="absolute inset-0 bg-gray/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">

            </div>

          </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="font-semibold text-green-600">
              ABOUT INDUSTRIAL PARTS
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              High Quality Industrial Components
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              PT. Surya Gemilang Engineering memproduksi komponen industri dengan kontrol 
              kualitas yang ketat, proses pemesinan presisi, dan pengiriman yang andal.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">

            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/industrial/about.jpg"
              alt="Industrial Parts"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">

          <div className="text-center">
            <span className="text-green-600 font-semibold">
              MATERIAL CAPABILITY
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Materials We Process
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {materials.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 text-center border"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCT CATALOG */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-14">
            <span className="uppercase tracking-[4px] text-slate-400">
              Product Catalog
            </span>

            <h2 className="mt-3 text-5xl font-bold">
              Industrial Components
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            {products.map((item) => (
              <div
                key={item.name}
                className="group border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">

                  <span className="text-green-600 text-sm">
                    {item.category}
                  </span>

                  <h3 className="mt-2 font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-4 border-t pt-4 text-sm">
                    <div className="flex justify-between">
                      <span>Material</span>
                      <span>{item.material}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">

          <div className="text-center">
            <span className="text-green-600 font-semibold">
              PROCESS
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Manufacturing Process
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {process.map((item, index) => (
              <div
                key={item}
                className="bg-white border rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-green-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-3">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl bg-gray-700 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
             Kami hadir untuk memenuhi kebutuhan usaha anda!
            </h2>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white text-green-700 px-8 py-4 font-semibold"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}