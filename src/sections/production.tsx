"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Production() {
  const machines = [
    {
      title: "CNC Machining",
      desc: "High precision CNC milling & turning for complex components.",
      image: "/production/cnc.png",
      specs: ["Tolerance ±0.01mm", "3-Axis / 5-Axis", "Steel / Aluminum"],
    },
    {
      title: "Welding & Fabrication",
      desc: "Advanced welding techniques for structural fabrication.",
      image: "/production/welding.jpg",
      specs: ["MIG / TIG Welding", "Heavy Structure", "Custom Fabrication"],
    },
    {
      title: "Laser Cutting",
      desc: "High-speed laser cutting for sheet metal precision.",
      image: "/production/laser.jpg",
      specs: ["Up to 20mm Thickness", "High Accuracy", "Clean Finish"],
    },
    {
      title: "Assembly Line",
      desc: "Efficient assembly system for industrial products.",
      image: "/production/assembly.jpg",
      specs: ["QC Integrated", "Mass Production", "Lean System"],
    },
  ];

  return (
    <section id="production" className="bg-gray-50 py-28">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Production
        </p>
        <h2 className="text-4xl font-semibold">
          Production Capability
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Equipped with modern machinery and skilled workforce to deliver high-quality engineering solutions.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {machines.map((m, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >

            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={m.image}
                alt={m.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">

              <h3 className="text-2xl font-semibold mb-3">
                {m.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {m.desc}
              </p>

              {/* SPECS */}
              <ul className="space-y-2 text-sm text-gray-500">
                {m.specs.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
                    {s}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}