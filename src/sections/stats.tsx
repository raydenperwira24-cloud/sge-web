"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Professional Team" },
  { value: "20+", label: "Global Clients" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Achievements
          </h2>
          <p className="text-gray-400 mt-4">
            Pencapaian kami dalam menghadirkan solusi industri terbaik
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-white/10 rounded-lg hover:border-green-600 transition"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-500">
                {item.value}
              </h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}