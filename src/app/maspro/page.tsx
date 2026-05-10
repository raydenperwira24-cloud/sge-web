"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Factory,
  Cog,
  Boxes,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    title: "Automotive Component",
    image: "/maspro/Picture12.png",
  },
  {
    title: "Precision Jig & Fixture",
    image: "/maspro/robot.png",
  },
  {
    title: "Industrial Fabrication",
    image: "/maspro/Picture10.png",
  },
  {
    title: "OEM Manufacturing",
    image: "/maspro/Picture11.png",
  },
];

const machines = [
  {
    name: "CNC Milling",
    qty: "8 Unit",
  },
  {
    name: "CNC Lathe",
    qty: "5 Unit",
  },
  {
    name: "Laser Cutting",
    qty: "2 Unit",
  },
  {
    name: "Welding Machine",
    qty: "10 Unit",
  },
  {
    name: "Surface Grinding",
    qty: "4 Unit",
  },
  {
    name: "Inspection Equipment",
    qty: "Complete",
  },
];

export default function MasproPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center">

        {/* BG */}
        <Image
          src="/maspro/hero.jpg"
          alt="Maspro"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-sm text-gray-300 mb-5"
          >
            Mass Production
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-semibold leading-tight mb-8"
          >
            Precision
            <br />
            Manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-gray-300 text-lg leading-relaxed"
          >
            Supporting industrial and automotive sectors
            through scalable production systems,
            precision machining, and high-quality manufacturing.
          </motion.p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[700px] rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/maspro/robot1.png"
              alt="Manufacturing"
              fill
              className="object-grid"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Capability
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-8">
              Mass Production
              <br />
              with Consistency
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              We provide precision manufacturing solutions
              with efficient production systems,
              strict quality control,
              and scalable output capability
              for industrial requirements.
            </p>

            <div className="space-y-5">

              <Feature text="High Precision CNC Machining" />
              <Feature text="Automotive & OEM Manufacturing" />
              <Feature text="Quality Assurance System" />
              <Feature text="Mass Production Capability" />
              <Feature text="Custom Engineering Support" />

            </div>

          </motion.div>

        </div>
      </section>

      {/* CATEGORY */}
      <section className="py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Production Category
            </p>

            <h2 className="text-5xl font-semibold">
              Manufacturing Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
              >

                <div className="relative h-[320px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <button className="flex items-center gap-2 text-green-700 font-medium group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight size={18} />
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Production Flow
            </p>

            <h2 className="text-5xl font-semibold">
              Integrated Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">

            <ProcessItem
              icon={<Cog size={28} />}
              title="Design"
            />

            <ProcessItem
              icon={<Boxes size={28} />}
              title="Prototype"
            />

            <ProcessItem
              icon={<Factory size={28} />}
              title="Production"
            />

            <ProcessItem
              icon={<ShieldCheck size={28} />}
              title="QC Inspection"
            />

            <ProcessItem
              icon={<ArrowRight size={28} />}
              title="Delivery"
            />

          </div>

        </div>

      </section>

      {/* MACHINE LIST */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Machine List
            </p>

            <h2 className="text-5xl font-semibold">
              Production Equipment
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {machines.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 rounded-2xl p-8 flex justify-between items-center hover:border-green-700 transition"
              >

                <h3 className="text-xl font-medium">
                  {item.name}
                </h3>

                <p className="text-gray-400">
                  {item.qty}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-5">
            Partnership
          </p>

          <h2 className="text-5xl font-semibold mb-8">
            Looking for
            <br />
            OEM Manufacturing Partner?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            We are ready to support your industrial production
            with scalable manufacturing solutions and precision engineering.
          </p>

          <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full transition text-lg">
            Contact Us
          </button>

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

      <p className="text-gray-700">
        {text}
      </p>

    </div>
  );
}

//////////////////////////
// PROCESS ITEM
//////////////////////////

function ProcessItem({ icon, title }: any) {
  return (
    <div className="border border-gray-200 rounded-3xl p-10 hover:border-green-700 transition">

      <div className="mb-6 text-green-700">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

    </div>
  );
}