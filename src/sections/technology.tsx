"use client";

import { motion } from "framer-motion";
import { Cpu, Settings, Factory } from "lucide-react";

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-green-700 font-semibold mb-2">
            Our Technology
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Advanced Manufacturing Capabilities
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Teknologi modern dan sistem produksi terintegrasi untuk memastikan kualitas terbaik.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            className="p-8 border rounded-xl hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Cpu className="text-green-700 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Automation System</h3>
            <p className="text-gray-600">
              Sistem otomatisasi modern untuk meningkatkan efisiensi dan akurasi produksi.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="p-8 border rounded-xl hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Settings className="text-green-700 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Precision Engineering</h3>
            <p className="text-gray-600">
              Rekayasa presisi tinggi untuk memastikan setiap produk sesuai standar internasional.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="p-8 border rounded-xl hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Factory className="text-green-700 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Industrial Production</h3>
            <p className="text-gray-600">
              Fasilitas produksi lengkap dengan mesin industri berteknologi tinggi.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}