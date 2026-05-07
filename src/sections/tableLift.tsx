"use client";

import { motion } from "framer-motion";

export default function TableLift() {
  return (
    <section id="table-lift" className="bg-white py-28">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Product
        </p>
        <h2 className="text-4xl font-semibold">
          Table Lift System
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Heavy-duty hydraulic table lift designed for industrial assembly and material handling systems.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* IMAGE */}
        <motion.div
          className="relative h-[420px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img
            src="/products/table-lift.jpg"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h3 className="text-2xl font-semibold mb-4">
            Industrial Table Lift
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Designed for high-load lifting operations in manufacturing environments.
            Built with strong steel structure and hydraulic system for stability and safety.
          </p>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>• Load capacity up to industrial scale</li>
            <li>• Hydraulic precision control system</li>
            <li>• Custom fabrication available</li>
            <li>• Safety locking mechanism</li>
          </ul>

        </motion.div>

      </div>

    </section>
  );
}