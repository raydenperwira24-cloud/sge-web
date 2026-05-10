"use client";

import ProductCard from "@/components/ProductCard";

export default function JobOrderPage() {

  const products = [
    {
      name: "Table Lifter With ROll Conveyor",
      image: "/products/prod1.png",
      spec: [
        "Lifting Up to 1000Kg",
        "height 1.5 meter",
        "Automatic conveyor ",
      ],
    },
    {
      name: "Layer Roller System",
      image: "/products/prod2.png",
      spec: [
        "Capacity: 100 Ton",
        "Stroke: 300 mm",
        "Control: PLC System",
      ],
    },
    {
      name: "Shidanki Machine",
      image: "/products/prod3.png",
      spec: [
        "Length: 10 meter",
        "Speed: Adjustable",
        "Material: Stainless Steel",
      ],
    },
     {
      name: "Pipe Roll Welding Machine",
      image: "/products/prod4.png",
      spec: [
        "Forming : 0.7-2.0 mm",
        "Speed: 5-6 /minute ",
        "Material: Hydraulic Pump",
      ],
    }, {
      name: "Buffing Grinder Machine",
      image: "/products/prod5.png",
      spec: [
        "Length: 10 meter (Heavy Duty)",
        "Speed: 3000 Rpm",
        "Power: 300-1300 W",
      ],
    },
  ];
  
<ProductCard />
  return (
    <section className="py-28 bg-white">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Product & Services
        </p>
        <h1 className="text-5xl font-semibold">
          Job Order Catalog
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Custom engineering solutions tailored to your industrial needs.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

    </section>
  );
}