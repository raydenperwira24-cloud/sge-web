"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <Header />

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <Card id="job-order" title="Job Order" desc="Custom fabrication engineering tailored to your needs." />

          <Card id="maspro" title="Mass Production" desc="Efficient, scalable manufacturing process." />

          <Card id="maintenance" title="Maintenance Engineering" desc="Long-term support and industrial maintenance." />

        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div>
      <p className="text-sm text-gray-400 uppercase tracking-widest">Services</p>
      <h2 className="text-4xl font-semibold mt-2">What We Do</h2>
    </div>
  );
}

function Card({ id, title, desc }: any) {
  return (
    <motion.div
      id={id}
      className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}