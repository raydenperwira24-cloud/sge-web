"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product }: any) {
  return (
    <motion.div
      className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3">
          {product.name}
        </h3>

        <ul className="text-sm text-gray-500 space-y-1 mb-5">
          {product.spec.map((s: string, i: number) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>

        {/* CTA */}
        <button className="text-green-700 font-medium text-sm hover:underline">
          View Details →
        </button>
      </div>
    </motion.div>
  );
}