"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Facility() {

  // 🔥 AUTO SCROLL SAAT LOAD (kalau dari navbar)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        const yOffset = -100; // tinggi navbar
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 150);
    }
  }, []);

  return (
    <section id="facility" className="bg-white py-28">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Facility
        </p>
   </div>

      {/* HERO VIDEO */}
      <div className="relative w-full h-[500px] mb-24 overflow-hidden">
        <video
          src="/facility/workshop.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

        <div className="absolute left-10 bottom-10 text-white max-w-xl">
          <h3 className="text-3xl font-semibold mb-3">
            High Precision Manufacturing
          </h3>
          <p className="text-gray-200">
            Modern workshop with CNC machines and fabrication systems aligned with international standards.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* PRODUCTION */}
        <motion.div
          id="production"
          className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/facility/production.jpg"
            alt="Production"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold">Production</h3>
            <p className="text-sm text-gray-200">
              CNC machining, fabrication, and assembly line
            </p>
          </div>
        </motion.div>

        {/* QUALITY CONTROL */}
        <motion.div
          id="quality-control"
          className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/facility/qc.jpg"
            alt="Quality Control"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold">Quality Control</h3>
            <p className="text-sm text-gray-200">
              Inspection systems ensuring global quality standards
            </p>
          </div>
        </motion.div>

      </div>

      {/* OPTIONAL DETAIL SECTION (BIAR LEBIH "DALAM") */}
      <div className="max-w-5xl mx-auto px-6 mt-28 space-y-20">

        <div>
          
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-4">
            Quality Control System
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We implement strict inspection procedures and measurement systems
            to ensure each product meets international quality requirements.
          </p>
        </div>

      </div>

    </section>
  );
}