"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

const products = [
  {
    name: "SUGLIFT SL 15-3550-3B",
    image: "/tablelift/lift1.jpg",
    capacity: "1500 KG",
    height: "3451 mm",
    system: "3P, 2,2 Kw, 220 Volt",
    size : "1750mm x 2500mm",
    stroke:"2651 mm",
  },
  {
    name: "SUGLIFT SL 15-1400",
    image: "/tablelift/lift2.jpg",
    capacity: "1500 KG",
    height: "1900 mm",
    system: "3P, 1,5 Kw, 220 Volt",
    size : "1500mm x 1500mm",
    stroke:"1400mm",
  },
  {
    name: "SUGLIFT SL25-251515-55",
    image: "/tablelift/lift3.jpg",
    capacity: "2500 KG",
    height: "7000 mm",
    system: "3P, 5,5 Kw, 380 Volt",
    size : "2500mm x 1500mm",
    stroke:"5500 mm",
  },
  {
    name: "SUGLIFT SL10-103010-C21H",
    image: "/tablelift/Picture3.jpg",
    capacity: "1000 KG",
    height: "3000 mm",
    system: "3P, 1,5 Kw, 380 Volt",
    size : "3000MM x 1000mm",
    stroke:"2050 mm",
  },
  {
    name: "SUGLIFT SL30-15258-b28",
    image: "/tablelift/nono.jpg",
    capacity: "3700 KG",
    height: "3000 mm",
    system: "3P, 7,5 Kw, 380 Volt",
    size : "2500mm x 1500mm",
    stroke:"2850 mm",
  },
  {
    name: "SUGLIFT SL12-151212-h55",
    image: "/tablelift/nana.png",
    capacity: "1200 KG",
    height: "7000 mm",
    system: "3P, 4 Kw, 380 Volt",
    size : "1500mm x 1500mm",
    stroke:"5500 mm",
  },
  {
    name: "SUGLIFT SL10-103010-C21H",
    image: "/tablelift/Picture3.jpg",
    capacity: "1000 KG",
    height: "3000 mm",
    system: "3P, 1,5 Kw, 380 Volt",
    size : "3000MM x 1000mm",
    stroke:"2050 mm",
  },
];

export default function TableLiftPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center">

        {/* BG IMAGE */}
        <Image
          src="/tablelift/hero1.png"
          alt="SugLift"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gray/30" />

        {/* CONTENT */}
        <div className="relative z-5 max-w-7xl mx-auto px-6 text-white">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-5 mt-10"
          >
            <Link
              href="#catalog"
              className="bg-black-700 hover:bg-white hover:text-black transition px-8 py-4 rounded-full flex items-center gap-2"
            >
              Explore Product
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="bg-black/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-full"
            >
              Contact Sales
            </Link>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              About Table Lift
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-8">
              SUGLIFT
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              SUGLift (sering disebut sebagai SUG Lift) adalah produk alat angkat (material handling) 
              jenis scissor lift atau table lifter yang diproduksi oleh PT. Surya Gemilang Engineering. 
              Produk ini dirancang sebagai alat angkat multi-aplikasi, dengan beberapa varian seperti SUGLIFT 
              PORTABLE dan model khusus yang diproduksi di area Karawang. Fitur : 
            </p>

            <div className="space-y-4">

              <Feature text="General Lifting" />
              <Feature text="Conveyor Systems" />
              <Feature text="Flexible Manufacturing Systems" />
              <Feature text="Dispatch Systems" />
              <Feature text="etc." />

            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  className="relative h-[650px] rounded-3xl overflow-hidden"
>

  <video
    src="/tablelift/tabb2.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />

  {/* overlay optional */}
  <div className="absolute inset-0 bg-black/20"></div>

</motion.div>

        </div>
      </section>

      {/* PRODUCT CATALOG */}
      <section
        id="catalog"
        className="py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Product Line
            </p>

            <h2 className="text-5xl font-semibold">
              Table Lift Catalog
            </h2>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.05 }}
    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 group"
  >

    {/* IMAGE */}
    <div className="relative h-[220px] overflow-hidden bg-gray-100">
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover object-top group-hover:scale-105 transition duration-700"
      />
    </div>

    {/* CONTENT */}
    <div className="p-5">

      <h3 className="text-sm font-semibold leading-snug mb-4 min-h-[45px]">
        {item.name}
      </h3>

      <div className="space-y-2 text-xs text-gray-600">

        <div className="flex justify-between border-b pb-2 gap-3">
          <span>Capacity</span>
          <span className="font-medium text-right">
            {item.capacity}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2 gap-3">
          <span>Height</span>
          <span className="font-medium text-right">
            {item.height}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2 gap-3">
          <span>System</span>
          <span className="font-medium text-right">
            {item.system}
          </span>
        </div>

        <div className="flex justify-between border-b pb-2 gap-3">
          <span>Size</span>
          <span className="font-medium text-right">
            {item.size}
          </span>
        </div>

        <div className="flex justify-between pb-1 gap-3">
          <span>Stroke</span>
          <span className="font-medium text-right">
            {item.stroke}
          </span>
        </div>

      </div>

    </div>

  </motion.div>
))}

          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/tablelift/application.png"
              alt="Application"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              APPLICATION
            </p>

            <h2 className="text-3xl font-semibold mb-2">
              Custom Design 
              For Your Specific Need.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Tersedia untuk otomotif manufaktur,
              gudang logistic, assembly line,
             produksi peralatan berat,
              dan sistem otomatisasi industri.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <ApplicationItem title="Automotive" />
              <ApplicationItem title="Warehouse" />
              <ApplicationItem title="Manufacturing" />
              <ApplicationItem title="Automation" />

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-32 bg-black text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-6">

         <Link
  href="/contact"
  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-700 hover:bg-green-800 text-white transition-all duration-300"
>
  Contact Us
</Link>

          <h2 className="text-5xl font-semibold mb-8">
            Need Custom
            <br />
            Lifting Solution?
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Our engineering team is ready to help your manufacturing
            operation with custom industrial lifting systems.
          </p>

        </div>
      </section>

    </main>
  );
}

//////////////////////////
// FEATURE
//////////////////////////

function Feature({ text }: any) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={20}
        className="text-green-700"
      />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

//////////////////////////
// APPLICATION ITEM
//////////////////////////

function ApplicationItem({ title }: any) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 hover:border-green-700 transition">
      <p className="font-medium">{title}</p>
    </div>
  );
}