"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Bridgestone", logo: "/clients/bridgestone.png" },
  { name: "Kubota", logo: "/clients/kubota.png" },
  { name: "Ajinomoto", logo: "/clients/ajinomoto.png" },
  { name: "NSK", logo: "/clients/nsk.png" },
  { name: "DNP", logo: "/clients/dnp.png" },
  { name: "Yamaha Motor Parts", logo: "/clients/yamahamo.png" },
  { name: "Yamaha Music", logo: "/clients/yamahamu.png" },
  { name: "Supernova Packaging", logo: "/clients/supernova.png" },
  { name: "BMJ", logo: "/clients/bmj.png" },
  { name: "Hamatetsu", logo: "/clients/hamatetsu.png" },
  { name: "Mutiara Hexagon", logo: "/clients/hexagon.png" },
  { name: "Hejo Tekno", logo: "/clients/hejotekno.png" },
  { name: "Shinkoh Indonesia", logo: "/clients/shinkoh.png" },
  { name: "Isuzu Astra Motor", logo: "/clients/isuzu.png" },
  { name: "Penta Ocean", logo: "/clients/penta.png" },
];

export default function Client() {
  return (
    <section id="client" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By Leading Companies
          </h2>
          <p className="text-gray-500 mt-4">
            Our Official Clients
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">

          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 hover:scale-110 transition duration-300"
              />

              <p className="text-xs text-gray-500 mt-3 text-center">
                {client.name}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}