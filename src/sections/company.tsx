"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Company() {
  return (
    <section className="py-28 bg-white">

      <Greeting />

      <Divider />

      <VisionMission />

      <Divider />

      <HistoryTimeline />

      <Divider />

      <CoreValues />

      <Divider />

      <Experience />

      <Divider />

      <Compliance />

    </section>
  );
}

//////////////////////////
// EXPERIENCE
//////////////////////////

function Experience() {
  const stats = [
    {
      value: "25+",
      label: "Tahun",
    },
    {
      value: "250+",
      label: "Project Selesai",
    },
    {
      value: "30+",
      label: "Mitra Industri",
    },
    {
      value: "OnTime",
      label: "Engineering Support",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-700/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">

          <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
            Company
          </p>

          <h2 className="text-3xl font-semibold leading-tight mb-4">
            Experience &
            <br />
            Industrial Capability
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Dengan pengalaman puluhan tahun di bidang teknik,
            kami menyediakan solusi manufaktur presisi,
            mesin khusus, sistem otomatisasi,
            dan fabrikasi industri untuk industri global.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[650px] rounded-[32px] overflow-hidden shadow-2xl"
          >

            <Image
              src="/experience/Pictures2.png"
              alt="Industrial Experience"
              fill
              className="cover-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-black min-w-ml">

            </div>

          </motion.div>

          <div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-10">

              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                >

                  <h3 className="text-5xl font-semibold text-green-700 mb-3">
                    {item.value}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* BUSINESS CORE */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

              <h3 className="text-2xl font-semibold mb-6">
                Business Core
              </h3>

              <div className="space-y-5 text-gray-600">

                <BusinessItem text="Special Purpose Machine maker" />
                <BusinessItem text="Table Lifter" />
                <BusinessItem text="Industrial Conveyor Automation System" />
                <BusinessItem text="Precision Parts" />
                <BusinessItem text="Industrial Parts and OEM Parts" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function BusinessItem({ text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-2 h-2 rounded-full bg-green-700 mt-2"></div>
      <p>{text}</p>
    </div>
  );
}

//////////////////////////
// COMPLIANCE
//////////////////////////

function Compliance() {
  const items = [
    {
      title: "ISO 9001",
      desc: "Quality Management System",
      image: "/compliance/iso9001.png",
    },
    {
      title: "ISO 14001",
      desc: "Environmental Management",
      image: "/compliance/iso14001.png",
    },
    {
      title: "ISO 45001",
      desc: "Occupational Health & Safety",
      image: "/compliance/iso45001.png",
    },
  ];

  return (
    <section id="compliance" className="max-w-6xl mx-auto px-6 py-20">

      <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
        Company
      </p>

      <h2 className="text-4xl font-semibold mb-12">
        Compliance & Certification
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-4xl hover:shadow-lg transition"
          >

            <div className="relative w-full h-100 mb-5">
              <img
                src={item.image}
                className="object-contain w-full h-full"
              />
            </div>

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

//////////////////////////
// HISTORY
//////////////////////////

function HistoryTimeline() {
  const timeline = [
    {
      year: "2001",
      title: "Company Founded",
      desc: "Mulai didirikan dengan menyewa workshop dan fasilitas mesin.",
    },
    {
      year: "2003",
      title: "New Workshop",
      desc: "Pindah ke workshop baru dengan fasilitas lebih lengkap.",
    },
    {
      year: "2004",
      title: "CNC Expansion",
      desc: "Penambahan area fabrikasi dan mesin CNC.",
    },
    {
      year: "2005",
      title: "Industrial Product",
      desc: "Mulai masuk dalam pengerjaan komponen standar industri (OEMM) otomotif, musik dan lainnya.",
    },
    {
      year: "2009",
      title: "Official Expansion",
      desc: "Membeli lahan 4500m dan memasarkan SugLift.",
    },
    {
      year: "2012",
      title: "Area Expansion",
      desc: "Penambahan area Assembling.",
    },
    {
      year: "2013",
      title: "CNC Expansion",
      desc: "Penambahan mesin CNC dan Quality Manufacturing Equipment (CMM, Harding&Roughing Tester).",
    },
    {
      year: "2014",
      title: "Workshop Expansion",
      desc: "Penambahan area Workshop di BTJ.",
    },
    {
      year: "2015",
      title: "5 Axis Technology",
      desc: "Upgrade mesin teknologi 5-Axis.",
    },
  ];

  return (
    <section
      id="history"
      className="max-w-7xl mx-auto px-6 py-28 overflow-hidden"
    >

      {/* HEADER */}
      <div className="mb-16">

        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-3">
          Company
        </p>

        <h2 className="text-4xl font-semibold">
          Company Journey
        </h2>

      </div>

      {/* HORIZONTAL TIMELINE */}
      <div className="overflow-x-auto scrollbar-hide">

        <div className="flex gap-6 min-w-max pb-4">

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative w-[320px] flex-shrink-0"
            >

              {/* TOP LINE */}
              <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-200"></div>

              {/* DOT */}
              <div className="relative z-10 w-5 h-5 rounded-full bg-green-700 border-4 border-white shadow-md"></div>

              {/* CARD */}
              <div className="mt-8 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500">

                {/* YEAR */}
                <div className="inline-flex px-4 py-1 rounded-full bg-green-700/10 text-green-700 text-xs font-semibold mb-5">
                  {item.year}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* ACCENT */}
                <div className="mt-6 w-14 h-[2px] bg-green-700 rounded-full"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
//////////////////////////
// GREETING
//////////////////////////

function Greeting() {
  return (
    <section
      id="company-intro"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* FOTO */}
        <div className="object-flex-grid items-center">

          <div className="relative w-full h-[550px] rounded-2xl overflow-hidden shadow-lg">

            <Image
              src="/board/director1.jpg"
              alt="Director"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          </div>

          {/* SIGN */}
          <div className="mt-6 text-center">

            <div className="w-14 h-[2px] bg-green-700 mx-auto mb-4 rounded-full"></div>

            <p className="text-xl font-semibold text-gray-800">
              Muhammad Hasyim
            </p>

            <p className="text-sm tracking-[0.2em] uppercase text-gray-500">
              President Director
            </p>

          </div>

        </div>
                                                                                                                                                                                                                                                                                                                                                                                                         
        {/* TEXT */}
        <div>

          <h2 className="text-4xl md:text-4xl font-bold mb-10 leading-near">
            Keunggulan dalam memberikan pelayanan
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Kami telah beroperasi sejak tahun 2001,
            memberikan solusi dan layanan optimal
            pada pelanggan berupa layanan engineering dan
            menghasilkan produk-produk unik yang mendukung produktifitas 
            dan proses manufaktur. Untuk itu, kami secara terus menerus
            berupaya meningkatkan kemampuan baik dari segi teknologi, sumber daya manusia dan
            sistem manajemen agar selalu bisa menjadi bagian penting pada industri manufaktur 
            yang terus tumbuh dan berkembang dengan pesat.
            
            Kami akan terus mendukung industri manufaktur dengan berkontribusi aktif menjadi mitra strategis 
            untuk mengembangkan bisnis dan perusahaan anda.

          </p>

        </div>

      </div>

    </section>
  );
}

//////////////////////////
// VISION MISSION
//////////////////////////

function VisionMission() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100">

        <p className="text-sm tracking-[0.35em] text-gray-400 uppercase mb-4">
          Vision & Mission
        </p>

        <h3 className="text-4xl font-semibold mb-10 leading-tight">
          The Excellence Services (TES)
           
        </h3>

        {/* VISION */}
        <div className="mb-10">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-green-700"></div>

            <p className="text-lg font-semibold text-gray-900">
              Vision
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Menjadi yang terdepan dalam layanan engineering
            dan menghasilkan produk yang berorientasi pada
            QCDSE (Quality, Cost, Delivery, Safety, Environment) 
            untuk memberikan kontribusi margin dan kepuasan pelanggan.
          </p>

        </div>

        {/* MISSION */}
        <div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-green-700"></div>

            <p className="text-lg font-semibold text-gray-900">
              Mission
            </p>
          </div>

          <ul className="space-y-5 text-gray-600">

            <li className="flex gap-4">
              <span className="text-green-700 font-bold">
                01
              </span>

              <span>
                Memberikan layanan pembuatan barang berkualitas sesuai dengan 
                kebutuhan dan standar pelanggan.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="text-green-700 font-bold">
                02
              </span>

              <span>
                Mengembangkan inovasi engineering industri.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="text-green-700 font-bold">
                03
              </span>

              <span>
                Menjadi mitra strategis industri manufaktur.
              </span>
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

//////////////////////////
// CORE VALUES
//////////////////////////

function CoreValues() {
  const values = [
    {
      title: "Quality",
      desc: "Kami mengutamakan kualitas dalam pembuatan produk.",
    },
    {
      title: "Cost",
      desc: "Kami memberikan layanan terbaik dengan harga yang terjangkau.",
    },
    {
      title: "Delivery",
      desc: "Kami mengutamakan pengiriman tepat waktu dan cepat.",
    },
    {
      title: "Safety",
      desc: "Kami berdedikasi dalam kesehatan dan keselamatan di lingkungan produktivitas kerja.",
    },
    {
      title: "Environment", 
      desc: "Kami mengutamakan lingkungan yg bersih dan sehat."
   }, 
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <div className="mb-20">

        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Company
        </p>

        <h2 className="text-4xl font-semibold">
            Nilai Jual (Core Values)      
              </h2>

      </div>

      <div className="grid md:grid-cols-10 lg:grid-cols-5 gap-9">

        {values.map((v, i) => (
          <motion.div
  key={i}
  className="group relative overflow-hidden rounded-2xl border border-green-200/70 bg-gradient-to-b from-white to-green-50/30 p-8 hover:shadow-2xl hover:border-green-500 transition-all duration-500"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
>

  {/* TOP ACCENT */}
  <div className="w-14 h-[3px] bg-green-700 rounded-full mb-6 group-hover:w-24 transition-all duration-500"></div>

  {/* TITLE */}
  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
    {v.title}
  </h3>

  {/* DESC */}
  <p className="text-gray-600 text-sm leading-relaxed">
    {v.desc}
  </p>

  {/* GLOW EFFECT */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-700/10 blur-3xl rounded-full"></div>
  </div>

</motion.div>     
        )
      )
  }

      </div>

    </section>
  );
}

//////////////////////////
// DIVIDER
//////////////////////////

function Divider() {
  return (
    <div className="h-px bg-gray-200 max-w-5xl mx-auto" />
  );
}